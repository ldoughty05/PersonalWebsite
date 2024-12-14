import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage.js';
import ArticlePage from './pages/articlesPage.js';

import { FileExplorer } from './features/contentWindow/contentWindow.js';
import CBasics from './pages/articles/CBasics.js';
import CPILocatorSummer from './pages/articles/CPILocatorSummer.js';
import ReactBasics from './pages/articles/ReactBasics.js';
import ReactQuickstart from './pages/articles/ReactQuickstart.js';
import SetupGitOnLinux from './pages/articles/SetupGitLinux.js';
import VimCheatSheet from './pages/articles/VimCheatSheet.js';
import SOFT260Notes from './pages/articles/SOFT260CondensedNotes.js';

export function App() {
  return (
    <>
      <Routes>
        <Route path = {'/'} element={ <HomePage /> }></Route>
        {/* <Route path="/articles/:articleId" element={<ArticlePage />} /> */}
        <Route path="/articles" element={<ArticlePage />}>
          <Route path="cbasics" element={<CBasics />} />
          <Route path="cpisummer" element={<CPILocatorSummer />} />
          <Route path="reactquickstart" element={<ReactQuickstart />} />
          <Route path="reactbasics" element={<ReactBasics />} />
          <Route path="setupgitonlinux" element={<SetupGitOnLinux />} />
          <Route path="vimcheatsheet" element={<VimCheatSheet />} />
          <Route path="soft260notes" element={<SOFT260Notes />} />
          <Route path="*" element={<FileExplorer />} />
        </Route>
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </>
  )}