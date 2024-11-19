import styles from './contentWindow.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';

const articles = [
  {title: "React Quickstart", suburl: 'reactquickstart', date: "8/25/2024"},
  {title: "CPI Locator Summer Work Overview", suburl: 'cpisummer', date: "8/25/2024"},
  {title: "React Basics", suburl: 'reactbasics', date: "8/27/2024"},
  {title: "Setup Git on Linux", suburl: 'setupgitonlinux', date: "8/26/2024"},
  {title: "C Basics", suburl: 'cbasics', date:"8/30/2024"},
  {title: "Vim & Bash Cheat Sheet", suburl: 'vimcheatsheet', date:"9/25/2024"},
]
const useMediaQuery = (query) => {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
}

const TaskbarButtons = () => {
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

export function FileExplorer() {
  const articleLinks = articles.map((articleDict) => {
    return (
      <tr key={articleDict.title}>
        <td><Link to={`${articleDict.suburl}`}>{articleDict.title}</Link></td>
        <td>{articleDict.date}</td>
      </tr>
    );
  });

  return (
    <div className={styles.fileExplorer} >
      <table>
        <thead>
          <tr key={"table_header"}>
            <th>Title</th>
            <th>Publish Date</th>
          </tr>
        </thead>
        <tbody>
          {articleLinks}
        </tbody>
      </table>
    </div>
  )
}

export function ContentWindow(props){
  // if (openedFileKey !== "")
    return (
      <div className={styles.contentWindow}>
        <div className={styles.topBar}>
          <h3>Page</h3>
          <div className={styles.buttonShelf}>
            <TaskbarButtons/>
          </div>
        </div>
        <div className={styles.pageContainer}>
          <div className={styles.page}>
            <div className={styles.content}>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }