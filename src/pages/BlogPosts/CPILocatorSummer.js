import "./BlogPosts.css";

const CPILocatorSummer = () => {
    return (
        <div className="page">
            <div className="header">
                <h1>Locating Central Pivot Irrigators with Deep Learning</h1>
                <p><em>Using Tensorflow in Colab and Google's Vertex AI to identify central pivot irrigators 
                    from Landsat 9 imagery. What I learned after 94 hours on the project</em></p>
                <hr/>
            </div>
            <h2>My Engineering Journey During Summer 2024</h2>
            <div className="indented">
                <h3>Building the Dataset</h3>
                <p>With any deep learning project, the first step is planning out what kind of data to use and 
                    how to source the dataset. I spent the first few days of the project researching what technologies 
                    were available to me and which ones would best suit this project. </p>
                <p>Since this project is primarily map based, I started out by looking into ArcGIS, an industry grade 
                    mapping and satellite imagery analysis software. Being that Arc is a paid software, I hoped that it 
                    would grant me access to the highest quality satellite imagery. I did not find that to be the case. 
                    ArcGIS has built in Deep Learning tools that I hoped would allow me to easily label a dataset and 
                    plug them into a model that I can make in the app. The sophistication of the software was its 
                    downfall because I got overwhelmed by all the words, buttons, and menus. ArcGIS has very little 
                    documentation or public examples online. The view video tutorials that were available were more 
                    promotional videos to show off its capabilities rather than step by step instructions. In hindsight 
                    I think ArcGIS would have added unnecessary complexity. It is primarily for mapping and labeling of 
                    features for human use rather than per pixel image classification with a ground up custom model; 
                    this was probably hinted at by the difficulty I faced trying to get a raster image.</p>
                <p>	The next program I looked at was Google Earth Engine. This program was interesting to use because 
                    it was my first time being forced to write code for a distributed computing platform, meaning no 
                    loops. Since this was made by google, there were plenty of resources for me to get my footing. I 
                    chose to use Landsat 9 as my imagery source because that is what <a href="https://www.mdpi.com/
                    2072-4292/12/3/558">the research paper I was loosely following</a> used. I was able to mask clouds 
                    by using the QA_Pixel band and selecting the bits which indicate that a pixel is covered by a cloud 
                    or its shadow, and then layer imagery from other times in that same year to fill in the holes left 
                    by masking the clouds. The next step was creating subimages from the satellite imagery to plug into 
                    my model. I did this by creating an array of points and mapping a function over that array to generate 
                    images centered around them. I later found a better solution, which is to simply pick random coordinate 
                    points inside a region and generate images around those points.</p>
                <p>	I labeled my dataset by saving a .tif file of the entire sample region and marking it up in 
                    Photoshop. I created an image layer over it where I marked all the CPI areas white, and everything 
                    else was black. The edges of the CPI areas were greyish just from the brushes, but I think that 
                    makes sense because the AI should have lower confidence that the edge pixels are part of the cpi, 
                    meaning it shouldn’t be as white. Some areas had multiple differently shaped CPIs packed into the 
                    same area so that I had to find higher resolution imagery to differentiate them. I don’t expect the 
                    model to do well with those areas unless I can source some higher resolution raster images. 
                    Landsat offers images at 30 meters per pixel while Sentinel can provide between 10-60 meters per 
                    pixel depending on the band. I decided not to spend the time to switch to sentinel because the 
                    original paper still found success with Landsat, I don’t think the additional compute time for 
                    the higher resolution will provide a significant enough boost to accuracy, and because the 3x 
                    increase will still not be enough to analyze the damage on the narrow rotating arm for the later 
                    stage of the project.</p>
                <p>After creating my dataset, I had to format it in a way that my model would be able to read it. 
                    Since I am using TensorFlow, I want to bundle my training images and labels into a tfrecord. 
                    Using Google Colab, I created an Apache Beam pipeline that takes in the region that I labeled, 
                    samples random points within, and generates a 128x128 patch which holds the red, green, and blue 
                    channels, as well as a channel for my labels. Next, the patch gets serialized in the same way 
                    Earth Engine serializes its images (I wish I had recognized this earlier because I later spent 
                    4 hours trying to do the same thing at another point in the project). Finally, the data gets 
                    split into a training and validation dataset, and each turned into tfrecords.</p>
                <p>One of the most impactful and hard to find bugs in the project was part of this dataset creation 
                    pipeline. The region I was giving to my pipeline was small and I only expected it to output 50 
                    or so patches, but for some reason it took upwards of 15 minutes. I tried splitting up the 
                    pipeline and adding print statements, but because of the multithreading in the Apache Beam backend, 
                    my print statements showed up out of order which made them unhelpful. I suspected that there was 
                    an infinite loop occurring somewhere in my pipeline. To rule out that possibility, I set it to 
                    only output two 4x4 patches. If it were to finish is about the same time, maybe it was only 
                    terminating because of some timeout. This time it finished quicker, but still significantly 
                    longer than one would expect. A trip to the library later, I finally found the problem. In a 
                    failure to really understand what a line of code from the google lecture I had watched, I 
                    mistakenly told my sampling method to take <code>(SAMPLE_POINTS * number of possible color values)</code>
                    points, so it was taking 256 times the number of points I was expecting. Fixing that was a 
                    huge performance increase.</p>
                <p>It's surprising that most of the work in a deep learning project doesn’t even touch TensorFlow. 
                    Most of it is data collection, evaluation, and serialization.</p>

                <h3>Building the Model</h3>
                <p>Now I can finally build the model. I used a U Net model, just like in the previously mentioned 
                    research paper. U Net Models are excellent for image segmentation because they reintroduce data 
                    from previous layers into later ones which keeps the original image information from getting 
                    diluted as it passes through the network.</p>
                <p>With my end goal of being able to stream my model’s CPI predictions onto the Earth Engine map at 
                    any point, it is necessary that my model is hosted on Google’s Vertex AI platform so that it can 
                    interact with Earth Engine. Vertex is a very sophisticated industry grade platform, so it was 
                    daunting to have to figure it out myself.  Thankfully, the documentation is descriptive, and 
                    Google provided a GitHub link with a generic vertex ai workflow for me to follow along with. 
                    I wrote code for my dataset generation script that saves the dataset to a Google Cloud Storage 
                    Bucket. I wrote code that sends my model to Vertex AI and runs a training job, and then mounts 
                    it to an online prediction endpoint. Finally, I can send requests to the model’s endpoint from 
                    Earth Engine to get the prediction.</p>
                <p>Dreadfully, when I try to make a prediction in Earth Engine, it gives me an error! It says 
                    something like “input depth does not match filter depth. 1 vs 3”. Earth Engine does not tell 
                    me where the bug is, but I was able to narrow it down to where my input layer connects to the 
                    first convolutional layer in my network. I spent hours verifying that the inputs and outputs 
                    of each tensor at each step of the network matched up. The model is fine. It must be that 
                    ee.model.predictImage() does not send the data as a dictionary of tensors for each layer as 
                    my model expects. I do not know how to get a print statement of what exactly the shapes of 
                    the inputs are when it goes to predict because the model is being hosted at that server endpoint 
                    and not my machine. I investigated using logger rather than print, which worked for logging steps 
                    of the training job, but still not model predictions from an endpoint.</p>
                <p>Debugging this error was especially difficult because after any kind of iteration I had to retrain 
                    the model and remount it to the endpoint which took about 15 minutes. I cut down on training time 
                    by only making it train for 1 epoch at 20 steps, but preparing the task and mounting to the 
                    endpoint still took a long time. I remedied this by doing the model training locally. With that 
                    I had to get images from Earth Engine to my local directory. I exported the Earth Engine test 
                    images to my Google Drive so that I could mount my drive to Colab. I then had to write code to 
                    convert that image into a tensor and serialize it as a dictionary of base64 encrypted tensors 
                    full of strings to simulate the Vertex and Earth Engine hosted environment. There was an example 
                    of this in one of the demonstrations I was following that I only noticed after I had spent hours 
                    reverse engineering the Earth Engine serialization process. The struggle was worth it because it 
                    forced me to check my understanding of the code I wrote, and it motivated me to do some much-needed 
                    refactoring.</p>
                <p>Finally, after I bypassed Earth Engine, I GOT A PREDICTION! But it was an all-white square. Not good. 
                    I swapped the tanh on my final layer to a sigmoid and I started seeing detail in my prediction image. 
                    My range of outputs had been [-1,1] when I wanted [0,1]. And then I laid eyes on the most beautiful 
                    128x128 image I had ever seen. It was black with a little white smudge. That smudge perfectly 
                    following the curvature of the top right portion of a central pivot irrigated circle of farmland. 
                    A sign of life. </p>
                <p>This isn’t good enough. I switched out the final 1x1 convolution with a single filter for a dense 
                    layer because they are functionally identical (I think). The image was mostly grey. I need to 
                    incentivize my model to label each pixel closer to the extremes of either 0 or 1. I am using 
                    binary cross entropy for my loss function which should already be doing this, but maybe I can 
                    modify it to further incentivize the polar extremes. I also modified my training dataset code 
                    and my model’s code to take in the near-infrared band in addition to the original three so that 
                    it gets more data to make a more confident prediction on. I think the next step would be to expand 
                    the training dataset to include more varied landscapes. </p>

                <h3>What Next?</h3>
                <p>Once I can accurately get the shapes of the CPI circles, I want to write code to approximate the 
                    bounding boxes of each CPI, even when they overlap. I think I can do this by looping through each 
                    pixel along the edge of the closed chapes and finding the longest chord enclosed by the shape. 
                    If the perpendicular line through that longest chord is less than half as long, I know there must 
                    be more than one CPIs in that region. With the bounding boxes I can find the center of the CPI and 
                    approximate its length.</p>
            </div>

            <h2>Concepts and Tools I Learned</h2>
            <ul>
                <li>Serialization 📦
                    <ul>
                        <li>Makes data easy to be transferred, stored, or transmitted. I’m boxing it up in the 
                            manner that Earth Engine expects it to look like.</li>
                    </ul>
                </li>
                <li>U-Net Models 📎 
                    <ul>
                        <li><a href="https://github.com/VidushiBhatia/U-Net-Implementation/blob/main/U_Net_for_
                        Image_Segmentation_From_Scratch_Using_TensorFlow_v4.ipynb">
                            A good U-Net Implementation by Vidushi Bhatia</a></li>
                        <li>Great for image segmentation.</li>
                        <li>Prevents information from being diluted by reintroducing it at deeper layers of the model.</li>
                        <li>Currently my model overtrains hard because I have such a small dataset.</li>
                    </ul>
                </li>
                <li>Google Cloud ☁️
                    <ul>
                        <li>Bucket is a general storage location. Not meant for the long term. Useful for making data 
                            accessible to a distributed compute network. </li>
                        <li>Vertex Ai lets you reliably store datasets, train models, and them host them remotely. Vertex makes 
                            it easy to scale a project to keep up with user demand as well as making it easy to manage huge 
                            datasets.</li>
                    </ul>
                </li>
                <li>Tensorflow and Keras 🪧
                    <ul>
                        <li>Tensorflow is a machine learning library. Keras is an API used for pushing data through the 
                            TensorFlow pipeline??</li>
                    </ul>
                </li>
                <li>Pickle 🥒
                    <ul>
                        <li>Saves a JavaScript object as a file to be reused in another context</li>
                    </ul>
                </li>
                <li>Docker 🐳
                    <ul>
                        <li>Creates its own kernel to simulate a consistent execution environment on any machine 
                            without having the overhead of simulating hardware like a VM would. Removes the age 
                            old “But it works on my machine” problem.</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
export default CPILocatorSummer