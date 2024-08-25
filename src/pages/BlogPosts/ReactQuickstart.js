const ReactQuickstart = () => {
    const installCodeSnippet = `
    # installs nvm (Node Version Manager) <br/>
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash <br/>
    # download and install Node.js (you may need to restart the terminal)<br/>
    nvm install 20<br/>
    # verifies the right Node.js version is in the environment<br/>
    node -v <br/>
    # should print 'v20.16.0'<br/>
    # verifies the right npm version is in the environment<br/>
    npm -v <br/>
    # should print '10.8.1'
    `;

    const npmCodeSnippet = `
    npm i -D react-router-dom <br/>
    npm audit fix
    `;

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
    
    const layoutjsCodeSnippet = `
    import { Outlet, Link } from "react-router-dom";
    const Layout = () => {
        return (
        <>
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
            </nav>

            <Outlet />
        </>
        )
    };

    export default Layout;
    `;

    const genericWebpageCodeSnippet = `
    const Home = () => {
        return <h1>Home</h1>;
        };

        export default Home;
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
                    <pre className="code">{installCodeSnippet}</pre>
                </div>
                <h2>Step 2. Create the project</h2>
                <p><code>cd</code> into the folder where you want to keep your project folder.</p>
                <p>run <code>npx create-react-app my-app-name</code> where “my-app-name” is the name of your app. Mine is named “personal”</p>
                <p><code>cd</code> into your newly made directory.</p>
                <p>Since our project will be a multi page website, we  need to install the React Router DOM.</p>
                <div className="snippet-container">
                    <pre className="code">{npmCodeSnippet}</pre>
                </div>
                <p>It will still show that there are some vulnerabilities,  but fixing them only breaks stuff, so for our use case we can ignore them.</p>
                <p>Run <code>npm start</code> to start the local web server.</p>
                <p>Open your IDE. I’m using VSCode so I can do <code>code .</code></p>
                <h2>Step 3. Creating the page router</h2>
                <p>I am following the directions from w3schools on <a href="https://www.w3schools.com/react/react_router.asp">setting up the React Router.</a></p>
                <p>Open the src folder and delete everything except for index.js.</p>
                <p>Open index.js and replace whatever is inside it with the following:</p>
                <div className="snippet-container">
                    <pre className="code">{indexjsCodeSnippet}</pre>
                </div>
                <p>Notice the first Route is a parent to the others. This means that you can create html and css that gets inherited by all the pages whose 
                    routes are its children so you don’t have to copy and paste css into each one.  Whatever I put in Layout.js will be shared with all my 
                    other pages.</p>
                <p>The code above includes routes to pages called “Blogs” and “Contact”, but they can be whatever you want them to be. You can also add more pages.</p>
                <p>The route where the path is a wildcard (path=”*”) means that it will route to that page whenever the path is something that hasn’t previously been defined. 
                    Perfect for a page not found message.</p>
                <p>In your src folder, create a new folder named “pages”.</p>
                <p>In the pages folder create a file named Layout.js.</p>
                <p>Inside Layout.js paste the following code:</p>
                <div className="snippet-container">
                    <pre className="code">{layoutjsCodeSnippet}</pre>
                </div>
                <p>This includes links between the pages. Since it is in the Layout.js, and since all the other pages appear as its children in our index.js, 
                    all of our pages will include these links.</p>
                <p>In your src/pages folder create files for each of the pages you want for your project. Mine includes Home.js, Blogs.js, Contact.js, and NoPage.js.</p>
                <p>The content of each of those files is similar to this:</p>
                <div className="snippet-container">
                    <pre className="code">{genericWebpageCodeSnippet}</pre>
                </div>
            </div>
        </div>
    )
}

export default ReactQuickstart