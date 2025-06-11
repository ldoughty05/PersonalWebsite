import styles from './home.module.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function LinksBanner() {
  return (
    <div className={styles.linksBanner}>
      <div className={styles.outerBorder}>
        <div className={styles.innerBorder}>
          <div className={styles.content}>
            <a href="https://www.linkedin.com/in/lukedoughty/">
              <FontAwesomeIcon icon={faLinkedin} size="5x"/>
            </a>
            <a href="https://github.com/ldoughty05">
              <FontAwesomeIcon icon={faGithub} size="5x"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Home() {
  const LOGO = '/media/LukeDoughty-Yeezuz.png';
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <img src={LOGO} className={styles.logo} alt='Luke Doughty' />
        <h2>Embedded Systems • Web Dev • AI/ML </h2>
        <hr />
      </div>
      <div className={styles.links}>
        {/* <Link to="/aboutme">&gt; About Me</Link> */}
        <button onClick={panDownOnClick}>&gt; Projects</button>
        <a href='https://lukedoughty.me/pdfs/Term_4_Resume_Entrepreneur.pdf'>&gt; Resume</a>
        <a href="https://www.linkedin.com/in/lukedoughty/">&gt; LinkedIn</a>
      </div>
      <LinksBanner />
      <div className={styles.banners}>
        <div className={styles.largeBanner} style={{backgroundColor: 'var(--background-bold'}}>
            {isScrolled && <FontAwesomeIcon icon={faAngleUp} size="2x" onClick={panUpOnClick} className={styles.uparrow} alt="^"/>}
        </div>
        <div className={styles.smallBanner} style={{backgroundColor: 'var(--important-B)'}}></div>
        <div className={styles.smallBanner} style={{backgroundColor: 'var(--important-C)'}}></div>
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