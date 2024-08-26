const HelloWorldSnippet = `
const BasicWebpage = () => {
     return (
	<h1> Hello World! </h1>
     );
}
export default BasicWebpage;
`;

const StylingSnippet = `
/* BasicWebpage.js */
import ‘./BasicWebpage.css’
const BasicWebpage = () => {
     return (
	<h1 className=’basicClass’> Hello World! </h1>
     );
}
export default BasicWebpage;

/* Basic Webpage.css */
.basicClass {
     Color: red;
}
`

const ComponentSnippet = `
const ComponentName = ({/* Input parameters, aka props*/}) => {
     return (
          /* html code goes here.  Youre only supposed to have one object along    with its children. If you need to put multiple objects in here, you can wrap them in empty tags, for example the following */
          <>
               <h1>Hello World </h1>
               <h2>I am using React! </h2>
          </>
     )
}
`

const ParentSnippet = `
const ParentComponent = () => {
     return ( <ChildComponent exampleParameter=’applesauce’/>);
     /* If your parameter is a number you can do exampleParameter={0} */
}
`

const UseEffectSnippetA = `
useEffect(() => {
    //Do something here
    //Runs on every render
});
`

const UseEffectSnippetB = `
useEffect(() => {
  //Runs only on the first render
}, []);
`

const UseEffectSnippetC = `
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
`

const CustomHookSnippet = `
export const useCustomHook = ( /* params */ ) => {
	//Whatever logic you want. Usually includes state and effect hooks.
	return -1;
}
`

const CreateContextSnippet = `
import { createContext } from 'react';
export const LevelContext = createContext(/* default value */);
`

const UseContextSnippet = `
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

const myComponent = () => {
    const level = useContext(LevelContext);

    return (/*component html stuff*/)
}
`

const ProvideContextSnippet =`
import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
`


const ReactBasics = () => {
    return (
        <div className="page">
            <div className="header">
                <h1>React Basics</h1>
                <p><em>Basic features of React, especially Hooks, props, and Contexts</em></p>
                <hr/>
            </div>
            <h2>Hello World</h2>
            <p>You can create the most basic React webpage by making a BasicWebpage.js 
                (You can name it whatever you want) file, and adding the following ‘Hello World’ code:</p>
            <div className="snippet-container">
                <pre className="code">{HelloWorldSnippet}</pre>
            </div>
            <p>You can add styling by creating a BasicWebpage.css file, importing it to your BasicWebpage.js 
                file by adding <code>import ‘./BasicWebpage.css’</code>. You can assign class names to your 
                html code by adding a <code>className</code> parameter.</p>
            <div className="snippet-container">
                <pre className="code">{StylingSnippet}</pre>
            </div>
            <h2>Single Page Application</h2>
            <p>One of the key differences between using a framework like React and making a static webpage with 
                simply html/css/js is the single page design. React loads everything with a single html file, 
                so instead of loading in a brand new html page, it only swaps out the content on that page. 
                This speeds things up by eliminating some request overhead and decreases the bandwidth usage.</p>
            <p>The content on the page consists of components. Components can be created as functions or as 
                classes – functions being the more popular option. Each component is defined with </p>
            <div className="snippet-container">
                <pre className="code">{ComponentSnippet}</pre>
            </div>
            <p>You can even put components inside components</p>
            <div className="snippet-container">
                <pre className="code">{ParentSnippet}</pre>
            </div>
            <p>You can make your React App have multiple pages (technically still a Single Page Application) 
                using the react-router-dom. The DOM is the Document Object Model, which basically is just a 
                big word for whatever is on screen. Like in my explanation of a SPA above, the react-router-dom 
                just chooses which components to show on the screen.</p>
            <p>For help setting up the react-router-dom, see <u>React Quickstart</u>.</p>
            <h2>Hooks</h2>
            <p>The best way to handle state or events is to use react hooks. The most common hooks you will 
                use are <code>useState</code> and <code>useEffect</code>. </p>
            <p><code>useState</code> is useful because it lets you share variables across your components. The docs might 
                call all your components the ‘hierarchy tree graph’. You create a state hook as follows:</p>
            <p><code>const [stateValue, setStateValue] = useState(/*default value*/)</code></p>
            <p>You can then access this state variable by using <code>stateValue</code> (You can name it whatever you want), 
                or modify it by calling <code>setStateValue()</code>.</p>
            <p><code>useEffect</code> is useful for separating side effects from your structural code. Basically if you want your 
                components to do something, you probably need to put that action in a <code>useEffect</code> hook.</p>
            <div className="snippet-container">
                <pre className="code">{UseEffectSnippetA}</pre>
            </div>
            <p>Sometimes you only need something to happen once. Maybe some setup logic.</p>
            <div className="snippet-container">
                <pre className="code">{UseEffectSnippetB}</pre>
            </div>
            <p>If you want your effect to happen whenever some state change happens, you can give it dependency values as follows:</p>
            <div className="snippet-container">
                <pre className="code">{UseEffectSnippetC}</pre>
            </div>
            <p>If you catch yourself repeating the same useEffect code, you might want to make a custom hook to make your code more maintainable. 
                It is best practice for hooks to always start with ‘use’.</p>
            <div className="snippet-container">
                <pre className="code">{CustomHookSnippet}</pre>
            </div>
            <h2>Prop Drilling vs Contexts</h2>
            <p>When you create a state variable in a component, you likely want to use it in its children as well. Sometimes you even need it in its 
                children’s children.  The simplest way to share the state variable down the hierarchy tree is to simply pass it as a prop to the child, 
                for example <code>{"<ChildComponent myState={myState}>"}</code>. </p>
            <p>Prop Drilling is the word we use to describe the repeated passing down of a prop to reach a a deep member of the hierarchy tree. 
                This can get messy fast and it is difficult to maintain.</p>
            <p>If you find yourself doing a lot of prop drilling, or if many components need the same variable, 
                it may be best to use a <a href="https://react.dev/learn/passing-data-deeply-with-context">React Context</a>.</p>
            <p>Example use cases for contexts is defining appearance schemes (e.g. dark mode) or storing the currently logged in user account information.</p>
            <h3>Step 1. Create the context</h3>
            <p>It is best practice to export the context from a file so that any of your components can use it.</p>
            <div className="snippet-container">
                <pre className="code">{CreateContextSnippet}</pre>
            </div>
            <h3>Step 2. Use the context</h3>
            <p>You can access the state variable from whichever component by using <code>useContext()</code>.</p>
            <div className="snippet-container">
                <pre className="code">{UseContextSnippet}</pre>
            </div>
            <h3>Step 3. Provide the Context</h3>
            <p>Now wrap the parent component in a context provider. Now any of its children can use that context no matter how deep they are.</p>
            <div className="snippet-container">
                <pre className="code">{ProvideContextSnippet}</pre>
            </div>
        </div>
    )
}

export default ReactBasics