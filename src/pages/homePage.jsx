import styles from './homePage.module.css';

import { Projects } from '../features/projects/projects.jsx';
import { Home } from '../features/home/home.jsx'
import { SkillsSummary } from '../features/skillsSummary/skillsSummary.js';
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