import styles from './skillsSummary.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import { projects } from '../projects/projectsDictionary.js';

function getOccurencesMapping(array) {
  let occurences = {};
  for (const item of array){
    if (!occurences[item]){ // if we have not seen an item like this yet.
      occurences[item] = 1;
    } else {
      occurences[item]++;
    }
  }
  return occurences;
}

function sortSkills(skills){
  const skillsOccurenceMapping = getOccurencesMapping(skills);
  const entries = Object.entries(skillsOccurenceMapping);
  entries.sort((a, b) => b[1] - a[1]);
  const sortedSkills = entries.map((entry) => entry[0]); // we only want the word now.
  return sortedSkills;
}

export function SkillsSummary() {
  const [showingSkills, setShowingSkills] = useState(false);
  const skills = projects.map((project) => project.skills).flat();
  const sortedSkillsList = sortSkills(skills);
  const content = sortedSkillsList.map((word) => <p key={word}>{word}</p>);
  return (
    <div className={styles.skillsSummary}>
      <button className={styles.toggle} onClick={() => setShowingSkills(!showingSkills)}>
        <h1>Skills Summary</h1>
        {showingSkills ? 
          <FontAwesomeIcon icon={faAngleLeft} size="2x"/>
          : <FontAwesomeIcon icon={faAngleDown} size="2x"/>
        }
        <p>Based on skills from personal projects.</p>
      </button>
        {showingSkills &&
          <div className={styles.content}>
            {content}
          </div>
        }
    </div>
  );
}