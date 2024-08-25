const ReactQuickstart = () => {
    const indexjsCodeSnippet = `
    import ReactDOM from "react-dom/client";
    import { BrowserRouter, Routes, Route } from "react-router-dom";
    /* import each page in your application, for example */
    import Layout from "./pages/Layout";
    import Home from "./pages/Home";
    import Blogs from "./pages/Blogs";
    import Contact from "./pages/Contact";
    import NoPage from "./pages/NoPage";
    
    export default function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
    `;
    

    return (
        <div className="page">
            <div className="header">
                <h1>React Quickstart</h1>
                <p><em>Installing React on Linux and creating a basic multi page application</em></p>
                <hr/>
            </div>
            <div className="body">
                <p>The most frustrating part of starting a project is usually setting up the environment 
                    and installing all the necessary packages before you write your first line of code. 
                    Here is a guide to get a multi-page project up and running with React on Linux.</p>
                <h2>Step 1. Installing React via Node.js</h2>
                <p>Visit the <a href="https://nodejs.org/en/download/package-manager">Node.js download page</a> for 
                help installing the correct version of Node.js for your system.</p>
                <p>This is what I used: </p>
                <div className="snippet-container">
                    {/* <div className="testDiv"></div> */}
                    <pre className="code">
                    # installs nvm (Node Version Manager) <br/>
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash <br/>
                    # download and install Node.js (you may need to restart the terminal)<br/>
                    nvm install 20<br/>
                    # verifies the right Node.js version is in the environment<br/>
                    node -v <br/>
                    # should print `v20.16.0`<br/>
                    # verifies the right npm version is in the environment<br/>
                    npm -v <br/>
                    # should print `10.8.1`
                    </pre>
                </div>
                <h2>Step 2. Create the project</h2>
                <p><code>cd</code> into the folder where you want to keep your project folder.</p>
                <p>run <code>npx create-react-app my-app-name</code> where “my-app-name” is the name of your app. Mine is named “personal”</p>
                <p><code>cd</code> into your newly made directory.</p>
                <p>Since our project will be a multi page website, we  need to install the React Router DOM.</p>
                <div className="snippet-container">
                    <pre className="code">
                        npm i -D react-router-dom <br/>
                        npm audit fix
                    </pre>
                </div>
                <p>It will still show that there are some vulnerabilities, but fixing them only breaks stuff, so for our use case we can ignore them.</p>
                <p>Run <code>npm start</code> to start the local web server.</p>
                <p>Open your IDE. I’m using VSCode so I can do <code>code .</code></p>
                <h2>Step 3. Creating the page router</h2>
                <p>I am following the directions from w3schools on <a href="https://www.w3schools.com/react/react_router.asp">setting up the React Router.</a></p>
                <p>Open the src folder and delete everything except for index.js.</p>
                <p>Open index.js and replace whatever is inside it with the following:</p>
                <div className="snippet-container">
                    <pre className="code">{indexjsCodeSnippet}</pre>
                </div>
                
            </div>
        </div>
    )
}

export default ReactQuickstart