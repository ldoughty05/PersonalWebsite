import styles from './homePage.module.css';

import { Projects } from '../features/projects/projects';
import { Hero } from '../features/hero/hero'
import { SkillsSummary } from '../features/skillsSummary/skillsSummary';
import { Ribbon } from '../features/ribbon/ribbon';
export default function HomePage() {
  return (
    <div styles={{display: 'inline-block'}}>
      <div className={styles.content}>
        <Hero />
        <SkillsSummary />
        <Projects />
      </div>
      <Ribbon />
    </div>
  )
}