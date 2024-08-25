import "./Blogs.css"
import { Link } from 'react-router-dom';
import React, { StrictMode, useState } from 'react';

import foldericon from "./directory_closed-4.png";

import CPILocatorPt1 from "./BlogPosts/CPILocatorPt1";
import ReactQuickstart from "./BlogPosts/ReactQuickstart";

const ContentWindow = ({title, openedFileIndex, setOpenedFileIndex, children}) => {
  if (openedFileIndex.current !== 0)
    return (
      <StrictMode>
        <div className="ContentWindow">
          <div className="ContentWindow-top-bar">
            <h3 className="window-name">{title}</h3>
            <div className="button-shelf">
              <button onClick={() => setOpenedFileIndex(1)}>Explorer</button>
              <button onClick={() => setOpenedFileIndex(openedFileIndex.previous)}>Back</button>
              <button onClick={() => setOpenedFileIndex(0)}>X</button>
            </div>
          </div>
          <div className="ContentWindow-page-container">
            <div className="ContentWindow-page">
              <div className="ContentWindow-page-content">
                <FileDirectory index={openedFileIndex} setOpenedFileIndex={setOpenedFileIndex}/>
              </div>
            </div>
          </div>
        </div>
      </StrictMode>
    )
  return null
}

const FileExplorer = ({setOpenedFileIndex}) => {
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
              <td onClick={() => setOpenedFileIndex(2)}>React Quickstart</td>
              <td>8/25/2024</td>
            </tr>
            <tr>
              <td onClick={() => setOpenedFileIndex(3)}>Using Deep Learning to Locate CPIs</td>
              <td>8/23/2024</td>
            </tr>
            <tr>
              <td onClick={() => setOpenedFileIndex(4)}>Docker </td>
              <td>8/24/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StrictMode>
  )
}

const FileDirectory = ({index, setOpenedFileIndex}) => {
  return [
    null,
    <FileExplorer setOpenedFileIndex={setOpenedFileIndex}/>,
    <ReactQuickstart/>,
    <CPILocatorPt1/>,
  ][index.current]
}

const Blogs = () => {
  const [openedFileIndex, setOpenedFileIndex] = useState({ current: 1, previous: 1 });

  const updateFileIndex = (newIndex) => {
    setOpenedFileIndex((prevState) => ({
      current: newIndex,
      previous: prevState.current !== 0 ? prevState.current : prevState.previous /* if the current state is 0, dont set the previous to zero after I reassign anything (we dont want back to close the window)*/
    }));
  }

  return (
    <StrictMode>
      <div className="Blogs">
        <img src={foldericon} alt="[FILES]" className="Blogs-foldericon-desktop" onClick={() => updateFileIndex(1)}/>
        <ContentWindow title="File Explorer" openedFileIndex={openedFileIndex} setOpenedFileIndex={updateFileIndex} />
        <div className="Blogs-taskbar">
          <Link to="/" className="Blogs-taskbar-home-button">Home</Link>
          <img src={foldericon} alt="[FILES]" className="Blogs-foldericon-taskbar"/>

        </div>
      </div>
    </StrictMode>
  );
};
  
export default Blogs;