import styles from './home.module.css';
import logo from '../../LukeDoughty-Yeezuz.png';
import uparrow from './up-arrow.png'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

export function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt='Luke Doughty' />
        <h2>Embedded Systems • Web Dev • AI/ML </h2>
        <hr />
      </div>
      <div className={styles.links}>
        {/* <Link to="/aboutme">&gt; About Me</Link> */}
        <Link onClick={panDownOnClick}>&gt; Projects</Link>
        <Link to="/articles/FileExplorer">&gt; Articles</Link>
      </div>
      <div className={styles.banners}>
        <div className={styles.largeBanner} style={{backgroundColor: 'var(--background-bold'}}>
            {isScrolled && <img src={uparrow} onClick={panUpOnClick} className={styles.uparrow} alt="^"/>}
        </div>
        <div className={styles.smallBanner} style={{backgroundColor: 'var(--important-orange'}}></div>
        <div className={styles.smallBanner} style={{backgroundColor: 'var(--important-yellow'}}></div>
      </div>
    </div>
  );
}

const panDownOnClick = () => {
  window.scrollBy({
      top: window.innerHeight - 100,
      left: 0,
      behavior:'smooth'
  });
}

const panUpOnClick = () => {
  window.scrollBy({
      top:-window.innerHeight,
      left: 0,
      behavior:'smooth'
  });
}
/*
Maybe I can make this one function that knows the current state of
which view to focus on, so instead of an up and down function I just toggle

I can also use that state to make sure the wrong half doesnt peek into view when resizing.
*/