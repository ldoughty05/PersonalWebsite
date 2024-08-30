import "./ArticlePage.css"
import { Link, useParams } from 'react-router-dom';
import React, { StrictMode, useState, useEffect, useMemo } from 'react';


import foldericon from "./directory_closed-4.png";

import CPILocatorSummer from "./Articles/CPILocatorSummer";
import ReactQuickstart from "./Articles/ReactQuickstart";
import ReactBasics from "./Articles/ReactBasics";
import SetupGitLinux from "./Articles/SetupGitLinux";
import CBasics from "./Articles/CBasics";

const articles = new Map();
articles.set("ReactQuickstart", {title: "React Quickstart", component: <ReactQuickstart/>, date: "8/25/2024"});
articles.set("CPISummer", {title: "CPI Locator Summer Work Overview", component: <CPILocatorSummer/>, date: "8/25/2024"});
articles.set("ReactBasics", {title: "React Basics", component: <ReactBasics/>, date: "8/27/2024"});
articles.set("GitLinux", {title: "Setup Git on Linux", component: <SetupGitLinux/>, date: "8/26/2024"});
articles.set("CBasics", {title: "C Basics", component:<CBasics/>, date:"8/30/2024"} )

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

const FileDirectory = ({openedFileKey}) => {
  const fileDict = new Map();
  fileDict.set("FileExplorer", {title:"File Explorer", 
    component: <FileExplorer articlesInfo={articles}/>});
    //articles.keys() returns a MapIterator
  articles.forEach((value, key, _) => fileDict.set(key, value)); //Add all of articles Map to fileDict

  return fileDict.get(openedFileKey).component;
}


const TaskbarButtons = ({setOpenedFileKey}) => {
  const desktop = useMediaQuery("(min-width: 680px)");
  if (desktop) 
    return (
    <>
      <Link to="/articles/FileExplorer"><button>Explorer</button></Link>
      <Link to="/articles"><button>X</button></Link>
    </>
  )
  return null
}

const ContentWindow = ({openedFileKey}) => {
  if (openedFileKey !== "")
    return (
      <StrictMode>
        <div className="ContentWindow">
          <div className="ContentWindow-top-bar">
            <h3 className="window-name">{openedFileKey}</h3>
            <div className="button-shelf">
              <TaskbarButtons/>
            </div>
          </div>
          <div className="ContentWindow-page-container">
            <div className="ContentWindow-page">
              <div className="ContentWindow-page-content">
                <FileDirectory openedFileKey={openedFileKey}/>
              </div>
            </div>
          </div>
        </div>
      </StrictMode>
    )
  return null
}

const FileExplorer = ({articlesInfo}) => {
  const articlesArr = [...articlesInfo];
  let linksArr = [articlesInfo.length];
  articlesInfo.forEach((val, key, _) => linksArr.push(
      <tr key={key}>
          <td><Link to={`/articles/${key}`}>{val.title}</Link></td>
        
          <td>{val.date}</td>
      </tr>

  ));
  // for (let i = 0; i < fileKeys.length; i++){
  //   linksArr[i] = (
  //   <tr>
  //     <td>
  //       <Link to={`/articles/${articlesArr[i].key}`}></Link>
  //     </td>
  //     <td>m/dd/yyyy</td>
  //   </tr>
  //   )
  //}
  return (
    <StrictMode>
      <div className="FileExplorer" >
        <table className="FileExplorer-table">
          <thead>
            <tr key={"table_header"}>
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
  const currentArticle = articleId || ""
  return (
    <StrictMode>
      <div className="Blogs">
        {/* MAKE THIS A LINK */}
        <Link to="/articles/FileExplorer">
          <img src={foldericon} alt="[FILES]" className="Blogs-foldericon-desktop"/>
        </Link>
        <ContentWindow openedFileKey={currentArticle}/>
        <div className="Blogs-taskbar">
          <Link to="/" className="Blogs-taskbar-home-button">Home</Link>
          <Link to="/articles/FileExplorer">
            <img src={foldericon} alt="[FILES]" className="Blogs-foldericon-taskbar"/>
        </Link>
        </div>
      </div>
    </StrictMode>
  );
};
  
export default ArticlePage;