import styles from './desktop64.module.css'
import { Link } from 'react-router-dom';
import foldericon from "./directory_closed-4.png";

export function Desktop64(props){
  return (
    <div className={styles.desktop}>
      {/* MAKE THIS A LINK */}
      <Link to="/articles/FileExplorer">
        <img src={foldericon} alt="[FILES]" className={styles.folderIcon}/>
      </Link>
      {props.children}
      <div className={styles.taskbar}>
        <Link to="/" className={styles.homeButton}>Home</Link>
        <Link to="/articles/FileExplorer">
          <img src={foldericon} alt="[FILES]" className={styles.taskbarIcon}/>
      </Link>
      </div>
    </div>
  );
}
