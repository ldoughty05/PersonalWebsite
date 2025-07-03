import styles from './homePage.module.css';

import { Projects } from '../features/projects/projects';
import { Hero } from '../features/hero/hero'
import { SkillsSummary } from '../features/skillsSummary/skillsSummary';
import { Ribbon } from '../features/ribbon/ribbon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  const panUpOnClick = () => {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
  }
  const uparrow = faAngleUp;
  return (
    <>
      <div className={styles.content}>
        <Hero />
        <div className={styles.banner}>
          <div className={styles.stripe_large} style={{ backgroundColor: 'var(--important-A)' }}>
            <button onClick={panUpOnClick}>
              <FontAwesomeIcon icon={faAngleUp} size="2x" color={'white'}/>
            </button>
          </div>
          <div className={styles.stripe_small} style={{ backgroundColor: 'var(--important-B)' }}></div>
          <div className={styles.stripe_small} style={{ backgroundColor: 'var(--important-C)' }}></div>
        </div>
        <SkillsSummary />
        <Projects />
      </div>
      <Ribbon />
    </>
  )
}