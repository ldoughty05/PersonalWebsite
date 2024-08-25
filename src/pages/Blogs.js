import "./Blogs.css"
import { Link } from 'react-router-dom';
import React, { StrictMode, useState, useEffect, useMemo } from 'react';


import foldericon from "./directory_closed-4.png";

import CPILocatorPt1 from "./BlogPosts/CPILocatorPt1";
import ReactQuickstart from "./BlogPosts/ReactQuickstart";

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


const TaskbarButtons = ({openedFileName, setOpenedFileName}) => {
  const desktop = useMediaQuery("(min-width: 680px)");
  if (desktop) 
    return (
    <>
      <button onClick={() => setOpenedFileName("File Explorer")}>Explorer</button>
      <button onClick={() => setOpenedFileName(openedFileName.previous)}>Back</button>
      <button onClick={() => setOpenedFileName("")}>X</button>
    </>
  )
  return null
}

const ContentWindow = ({openedFileName, setOpenedFileName, children}) => {
  if (openedFileName.current !== "")
    return (
      <StrictMode>
        <div className="ContentWindow">
          <div className="ContentWindow-top-bar">
            <h3 className="window-name">{openedFileName.current}</h3>
            <div className="button-shelf">
              <TaskbarButtons openedFileName={openedFileName} setOpenedFileName={setOpenedFileName}/>
            </div>
          </div>
          <div className="ContentWindow-page-container">
            <div className="ContentWindow-page">
              <div className="ContentWindow-page-content">
                <FileDirectory openedFileName={openedFileName} setOpenedFileName={setOpenedFileName}/>
              </div>
            </div>
          </div>
        </div>
      </StrictMode>
    )
  return null
}

const FileExplorer = ({setOpenedFileName}) => {
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
            <tr>
              <td onClick={() => setOpenedFileName("React Quickstart")}>React Quickstart</td>
              <td>8/25/2024</td>
            </tr>
            <tr>
              <td onClick={() => setOpenedFileName("CPI Locator Overview Pt1")}>Using Deep Learning to Locate CPIs</td>
              <td>8/23/2024</td>
            </tr>
            <tr>
              <td onClick={() => setOpenedFileName("Docker")}>Docker </td>
              <td>8/24/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StrictMode>
  )
}

const FileDirectory = ({openedFileName, setOpenedFileName}) => {
  const fileDict = {
    "File Explorer": <FileExplorer setOpenedFileName={setOpenedFileName}/>,
    "React Quickstart": <ReactQuickstart/>,
    "CPI Locator Overview Pt1": <CPILocatorPt1/>,
  }
  console.log(openedFileName)
  return fileDict[openedFileName.current] || null;
}

const Blogs = () => {
  const [openedFileName, setOpenedFileName] = useState({ current: "File Explorer", previous: "File Explorer" });
  const updateFileName = (newFile) => {
    setOpenedFileName((prevState) => ({
      current: newFile,
      previous: prevState.current === "" ? prevState.previous : prevState.current /* (we dont want back to a closed window*/
    }));
  }

  return (
    <StrictMode>
      <div className="Blogs">
        <img src={foldericon} alt="[FILES]" className="Blogs-foldericon-desktop" onClick={() => updateFileName("File Explorer")}/>
        <ContentWindow openedFileName={openedFileName} setOpenedFileName={updateFileName} />
        <div className="Blogs-taskbar">
          <Link to="/" className="Blogs-taskbar-home-button">Home</Link>
          <img src={foldericon} alt="[FILES]" className="Blogs-foldericon-taskbar" onClick={() => updateFileName("File Explorer")}/>

        </div>
      </div>
    </StrictMode>
  );
};
  
export default Blogs;