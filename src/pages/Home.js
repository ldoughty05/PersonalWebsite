import './Home.css';
import logo from './LukeDoughty-Yeezuz.png';
import uparrow from './up-arrow.png';
import { Link } from "react-router-dom";

const panDownOnClick = () => {
    window.scrollBy({
        top:window.innerHeight,
        left: 0,
        behavior:'smooth'
    });
}

const panUpOnClick = () => {
    window.scrollBy({
        top:-window.innerHeight,
        left: 0,
        behavior:'smooth'
    });
}
/*
Maybe I can make this one function that knows the current state of
which view to focus on, so instead of an up and down function I just toggle

I can also use that state to make sure the wrong half doesnt peek into view when resizing.
*/

const ProjectCard = ({title="", year="", description="", source_link=null, demo_link=null, article_link=null}) => {
    return (
        <div className="ProjectCard">
            <h3>{year}</h3>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <ul className='Project-link-shelf'>
                {source_link && <li>
                    <a href={source_link} target='_blank' className='color-A Project-link' rel="noopener noreferrer">&gt; source</a>
                </li>}
                {demo_link && <li>
                    <a href={source_link} target='_blank' className='color-B Project-link' rel="noopener noreferrer">&gt;  demo</a>
                </li>}
                {article_link && <li>
                    <a href={source_link} target='_blank' className='color-C Project-link' rel="noopener noreferrer">&gt; article</a>
                </li>}
            </ul>
        </div>
    )
}
const Home = () => {
    return (
    <div className="Home">
        <header className="Home-header">
            <img src={logo} className='Home-logo' alt='Luke Doughty' />
            <Link to="/aboutme" className='Home-links'>&gt; About Me</Link>
            <Link onClick={panDownOnClick} className='Home-links'>&gt; Projects</Link>
            <Link to="/articles" className='Home-links'>&gt; Articles</Link>
        </header>

        <div className="Projects-page">
            <div className='Projects-banner-large color-A'>
                <img src={uparrow} onClick={panUpOnClick} className='Projects-uparrow' alt="^"/>
            </div>
            <div className='Projects-banner-small color-B'></div>
            <div className='Projects-banner-small color-C'></div>
                <body className='Projects-body'>
                    <h1>Projects</h1>
                    <p>Projects I’ve made in the past years, including this website, some deep learning, and windows applications</p>
                    <div className='ProjectCard-grid-container'>
                    <div className='ProjectCard-grid'>
                        <ProjectCard
                            title="This Website!"
                            year="2024"
                            description="Learned to use React, RouterDOM, and Hooks."
                            source_link="https://github.com/ldoughty05/PersonalWebsite"
                        />
                        <ProjectCard
                            title="CPI Locator"
                            year="2024"
                            description="U-Net Deep Learning Model using Google Earth Engine and Vertex Ai Platform to segment central pivot 
                                irrigators from satellite imagery "
                        />
                        <ProjectCard
                            title="Character Classifier"
                            year="2024"
                            description="Deep learning MNIST classifier with a GUI so you can try it with your own handwriting."
                            source_link="https://github.com/ldoughty05/character_classifier"
                        />
                        <ProjectCard
                            title="Deep Learning Basics"
                            year='2023'
                            description="Text generation, sentiment analysis, and more. Following along with 'Deep Learning' by Andrew W. Trask."
                            source_link={'https://github.com/ldoughty05/Deep-Learning'}
                        />
                        <ProjectCard
                            title='Boid Simulator'
                            year='2023'
                            description='Simulates the flocking behavior of birds in 2d space.'
                            source_link={'https://github.com/ldoughty05/boidSim'}
                        />
                    </div>
                </div>
            </body>
        </div>
    </div>
    );
};

export default Home;