import styles from './hero.module.css';
import { useState, useEffect, useRef } from 'react'
import { ReactFitty } from "react-fitty";

export function Hero() {
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
    <div className={styles.hero}>
      <img src={BACKGROUND_IMAGE_CLOUDS} className={styles.backgroundImage} />
      <div className={styles.content} >
        <div className={styles.titleContainer} ref={containerRef}>
          <ReactFitty minSize={38} wrapText={true} className={styles.title} >LUKE DOUGHTY</ReactFitty>
          <h2 className={styles.subtitle} ref={subtitleRef}>DEVELOPER</h2>
        </div>
        <div className={styles.links}>
          <button onClick={panDownOnClick}>&gt; PROJECTS</button>
          <a href="https://lukedoughty.me/pdfs/Term6_5ResumeEmbeddedLaTeX.pdf">&gt; RESUME</a>
          <a href="https://www.linkedin.com/in/lukedoughty/">&gt; LINKEDIN</a>
        </div>
      </div>
      <div className={styles.stripesContainer}>
        <div className={styles.stripeMarquee}>
          <div className={styles.marquee_inner}>
            <span>WEB DEV - AI/ML - CYBERSECURITY - EMBEDDED SYSTEMS - AUTOMATION -</span>
            <span>WEB DEV - AI/ML - CYBERSECURITY - EMBEDDED SYSTEMS - AUTOMATION -</span>
          </div>
        </div>
        <div className={styles.stripe}></div>
      </div>
    </div>
  );
}

const panDownOnClick = () => {
  window.scrollTo({
      top: window.innerHeight,
      behavior:'smooth'
  });
}