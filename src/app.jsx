import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage';
import ArticlePage from './pages/articlesPage';

import { FileExplorer } from './features/contentWindow/contentWindow';
import CBasics from './pages/articles/CBasics';
import CPILocatorSummer from './pages/articles/CPILocatorSummer';
import ReactBasics from './pages/articles/ReactBasics';
import ReactQuickstart from './pages/articles/ReactQuickstart';
import SetupGitOnLinux from './pages/articles/SetupGitLinux';
import VimCheatSheet from './pages/articles/VimCheatSheet';
import SOFT260Notes from './pages/articles/SOFT260CondensedNotes';

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