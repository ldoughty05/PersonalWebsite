import styles from './desktop64.module.css'
import { Link } from 'react-router-dom';

export function Desktop64(props){
  const FOLDER_ICON = '/media/directory_closed-4.png';
  const CLOUDY_BACKGROUND = '/media/CloudyWin98.jpg';
  // background-image: url('/media/CloudyWin98.jpg');

  return (
    <div className={styles.desktop}
          style={{ backgroundImage: `url(${CLOUDY_BACKGROUND})`}}>
      {props.children}
      <Link to="/articles/FileExplorer">
        <img src={FOLDER_ICON} alt="[FILES]" className={styles.folderIcon}/>
      </Link>
      <div className={styles.taskbar}>
        <Link to="/" className={styles.homeButton}>Home</Link>
        <Link to="/articles/FileExplorer">
          <img src={FOLDER_ICON} alt="[FILES]" className={styles.taskbarIcon}/>
      </Link>
      </div>
    </div>
  );
}
