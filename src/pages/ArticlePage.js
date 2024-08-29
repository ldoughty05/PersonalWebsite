import "./ArticlePage.css"
import { Link, useParams } from 'react-router-dom';
import React, { StrictMode, useState, useEffect, useMemo } from 'react';


import foldericon from "./directory_closed-4.png";

import CPILocatorSummer from "./Articles/CPILocatorSummer";
import ReactQuickstart from "./Articles/ReactQuickstart";
import ReactBasics from "./Articles/ReactBasics";
import SetupGitLinux from "./Articles/SetupGitLinux"

const articles = new Map();
articles.set("ReactQuickstart", {title: "React Quickstart", component: <ReactQuickstart/>, date: "8/25/2024"});
articles.set("CPISummer", {title: "CPI Locator Summer Work Overview", component: <CPILocatorSummer/>, date: "8/25/2024"});
articles.set("ReactBasics", {title: "React Basics", component: <ReactBasics/>, date: "8/27/2024"});
articles.set("GitLinux", {title: "Setup Git on Linux", component: <SetupGitLinux/>, date: "8/26/2024"});

export const useMediaQuery = (query) => {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
}

const FileDirectory = ({openedFileKey, setOpenedFileKey}) => {
  const fileDict = new Map();
  fileDict.set("FileExplorer", {title:"File Explorer", 
    component: <FileExplorer fileKeys={[...articles.keys()]} setOpenedFileKey={setOpenedFileKey}/>});
    //articles.keys() returns a MapIterator
  articles.forEach((value, key, _) => fileDict.set(key, value)); //Add all of articles Map to fileDict

  return fileDict.get(openedFileKey.current).component;
}


const TaskbarButtons = ({openedFileKey, setOpenedFileKey}) => {
  const desktop = useMediaQuery("(min-width: 680px)");
  if (desktop) 
    return (
    <>
      <button onClick={() => setOpenedFileKey("FileExplorer")}>Explorer</button>
      <button onClick={() => setOpenedFileKey(openedFileKey.previous)}>Back</button>
      <button onClick={() => setOpenedFileKey("")}>X</button>
    </>
  )
  return null
}

const ContentWindow = ({openedFileKey, setOpenedFileKey, children}) => {
  if (openedFileKey.current !== "")
    return (
      <StrictMode>
        <div className="ContentWindow">
          <div className="ContentWindow-top-bar">
            <h3 className="window-name">{openedFileKey.current}</h3>
            <div className="button-shelf">
              <TaskbarButtons openedFileKey={openedFileKey} setOpenedFileKey={setOpenedFileKey}/>
            </div>
          </div>
          <div className="ContentWindow-page-container">
            <div className="ContentWindow-page">
              <div className="ContentWindow-page-content">
                <FileDirectory openedFileKey={openedFileKey} setOpenedFileKey={setOpenedFileKey}/>
              </div>
            </div>
          </div>
        </div>
      </StrictMode>
    )
  return null
}

const FileExplorer = ({fileKeys, setOpenedFileKey}) => {
  let linksArr = [fileKeys.length];
  for (let i = 0; i < fileKeys.length; i++){
    linksArr[i] = (
    <tr>
      <td onClick={() => setOpenedFileKey(fileKeys[i])}>{fileKeys[i]}</td>
      <td>m/dd/yyyy</td>
    </tr>
    )
  }

  return (
    <StrictMode>
      <div className="FileExplorer" >
        <table className="FileExplorer-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Publish Date</th>
            </tr>
          </thead>
          <tbody>
            {linksArr}
          </tbody>
        </table>
      </div>
    </StrictMode>
  )
}

const ArticlePage = () => {
  const {articleId} = useParams();
  console.log("articleId: ",articleId);
  const startingPage = articleId || "FileExplorer"
  const [openedFileKey, setOpenedFileKey] = useState({ current: startingPage, previous: startingPage });
  const updateFileKey = (newKey) => {
    setOpenedFileKey((prevState) => ({
      current: newKey,
      previous: prevState.current === "" ? prevState.previous : prevState.current /* (we dont want back to a closed window*/
    }));
  }

  return (
    <StrictMode>
      <div className="Blogs">
        <img src={foldericon} alt="[FILES]" className="Blogs-foldericon-desktop" onClick={() => updateFileKey("FileExplorer")}/>
        <ContentWindow openedFileKey={openedFileKey} setOpenedFileKey={updateFileKey} />
        <div className="Blogs-taskbar">
          <Link to="/" className="Blogs-taskbar-home-button">Home</Link>
          <img src={foldericon} alt="[FILES]" className="Blogs-foldericon-taskbar" onClick={() => updateFileKey("FileExplorer")}/>

        </div>
      </div>
    </StrictMode>
  );
};
  
export default ArticlePage;