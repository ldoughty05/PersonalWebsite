import styles from './hero.module.css';
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { ReactFitty } from "react-fitty";

export function Hero() {
  const LOGO = '/media/LukeDoughty-Yeezuz.png';
  const BACKGROUND_IMAGE_CLOUDS = "/media/CloudyWin98_RedHue.png"
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef();
  const subtitleRef = useRef();

  useEffect(() => {
    function spaceOutSubtitle() {
      if (!containerRef.current || !subtitleRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const subtitleText = subtitleRef.current.textContent;
      const charCount = subtitleText.length;

      if (charCount <= 1) return;
      subtitleRef.current.style.letterSpacing = '0px'; // Reset letter spacing for calculation
      const subtitleWidth = subtitleRef.current.scrollWidth;
      const spacing = Math.max(0, (containerWidth - subtitleWidth) / (charCount - 1));

      subtitleRef.current.style.letterSpacing = `${spacing.toFixed(3)}px`;
    }
    spaceOutSubtitle();
    window.addEventListener('resize', spaceOutSubtitle);
    const timeout = setTimeout(spaceOutSubtitle, 100);

    return () => {
      window.removeEventListener('resize', spaceOutSubtitle);
      clearTimeout(timeout);
    };  
  }, []);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className={styles.container}>
      <img src={BACKGROUND_IMAGE_CLOUDS} className={styles.background} />
      <div className={styles.content} >
        <div className={styles.titleContainer} ref={containerRef}>
          <ReactFitty minSize={38} wrapText={true} className={styles.title} >LUKE DOUGHTY</ReactFitty>
          <h2 className={styles.subtitle} ref={subtitleRef}>DEVELOPER</h2>
        </div>
        <div className={styles.links}>
          <button onClick={panDownOnClick}>&gt; PROJECTS</button>
          <a href="https://lukedoughty.me/pdfs/Term_4_Resume_Entrepreneur.pdf">&gt; RESUME</a>
          <a href="https://www.linkedin.com/in/lukedoughty/">&gt; LINKED IN</a>
        </div>
        <div className={styles.stripe}>WEB DEV, EMBEDDED SYSTEMS, AI/ML</div>
      </div>
      <div className={styles.largeBanner} style={{backgroundColor: 'var(--background-bold'}}>
            {isScrolled && <FontAwesomeIcon icon={faAngleUp} size="2x" onClick={panUpOnClick} className={styles.uparrow} alt="^"/>}
        </div>
        <div className={styles.smallBanner} style={{backgroundColor: 'var(--important-B)'}}></div>
        <div className={styles.smallBanner} style={{backgroundColor: 'var(--important-C)'}}></div>
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