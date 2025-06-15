import styles from './homePage.module.css';

import { Projects } from '../features/projects/projects';
import { Home } from '../features/home/home'
import { SkillsSummary } from '../features/skillsSummary/skillsSummary';
export default function HomePage() {
  return (
    <>
      <div className={styles.background}>
        <Home />
        <SkillsSummary />
        <Projects />
      </div>
    </>
  )
}