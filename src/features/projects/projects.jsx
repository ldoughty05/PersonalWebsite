import styles from './projects.module.css';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

// import { projects as projectsdict } from './projectsDictionary';
import { useEffect, useState } from 'react';
import api from "../../projectExperienceAPI";

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
}
function LinkButton(props)
{
  if (props.link.substring(0, 4) === "http"){
    return (
      <a 
        href={props.link}
        style={{backgroundColor: props.backgroundColor, color: props.textColor}}
        target='_blank' 
        rel="noopener noreferrer"
      >
      {props.label}
      </a>
    );
  } else {
    return (
      <Link
        to={props.link}
        style={{backgroundColor: props.backgroundColor, color: props.textColor}}
      >
      {props.label}
      </Link>
    );
  }
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  skills: PropTypes.array,
  description: PropTypes.string,
  bullet_points: PropTypes.arrayOf(PropTypes.string),
  source_link: PropTypes.string,
  demo_link: PropTypes.string,
  article_link: PropTypes.string, 
  isImportant: PropTypes.bool,
}
function ProjectCard(props){
  const cardStyleClasses = props.isImportant ? `${styles.card} ${styles.important}` : `${styles.card}`;
  let skills = "";
  for (let i = 0; i < props.skills.length; i++){
    if (i > 0){
      skills += ' ◦ '
    }
    skills += props.skills[i];

  }
  let bullet_points;
  if (props.bullet_points){
    bullet_points = props.bullet_points.map((bullet, i) =>
      <li key={i}>{bullet}</li>);
  }
  return (
    <div className={cardStyleClasses}>
      <h3>{props.year}</h3>
      <h2>{props.title}</h2>
      {props.description && !props.bullet_points && (<p>{props.description}</p>)}
      <ul>{bullet_points && bullet_points}</ul>
      <p><i>{skills}</i></p>
      <ul className={styles.linkShelf}>
        <li>
          {props.source_link && <LinkButton
            link={props.source_link}
            label='&gt; source'
            backgroundColor='var(--important-A-light)'
            textColor='var(--important-A-dark)'
          />}
        </li>
        <li>
          {props.demo_link && <LinkButton
            link={props.demo_link}
            label='&gt; demo'
            backgroundColor='var(--important-B-light)'
            textColor='var(--important-B-dark)'
          />}
        </li>
        <li>
          {props.article_link && <LinkButton
            link={props.article_link}
            label='&gt; article'
            backgroundColor='var(--important-C-light)'
            textColor='var(--important-C-dark)'
          />}
        </li>
      </ul>
    </div>
  )
}

export function Projects(){
  const [projects, setProjects] = useState([]); // list of project experience objects

  useEffect(() => {
    getProjectsFromDatabase()
  }, [])

  const getProjectsFromDatabase = () => {
    api
      .get("/api/experiences/projects/")
      .then((res) => res.data)
      .then((data) => {
        setProjects(data)
        console.log("response: ", data);
      })
      .catch((error) => {});
  }
  console.log("projects: ", projects);
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <p>
        Note: Many projects do not include source links due to university academic 
        integrity policy restrictions. I'm happy to share source code upon request.
        <br />
        If you are interested in a project, please reach out to me via luke.doughty@me.com.
      </p>
      <div className={styles.grid}>
        { 
          projects && projects.map((project, id) =>
            <ProjectCard
              title={project.title}
              year={project.start_date && project.start_date.substring(0,4)}
              skills={project.skills.map(skill_obj => skill_obj.name)}
              bullet_points={project.bullet_points}
              source_link={project.links.source}
              demo_link={project.links.demo}
              article_link={project.links.article}
              isImportant={project.isImportant}
              key={project.title}
            />
          )
        }
      </div>
    </div>
  )
}