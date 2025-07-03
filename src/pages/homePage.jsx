import styles from './homePage.module.css';

import { Projects } from '../features/projects/projects';
import { Hero } from '../features/hero/hero'
import { SkillsSummary } from '../features/skillsSummary/skillsSummary';
export default function HomePage() {
  return (
    <>
      <div className={styles.background}>
        <Hero />
        <SkillsSummary />
        <Projects />
      </div>
    </>
  )
}