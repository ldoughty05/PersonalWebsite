import styles from './projects.module.css';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

import { projects } from './projectsDictionary';

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string,
  source_link: PropTypes.string,
  demo_link: PropTypes.string,
  article_link: PropTypes.string, 
}
function ProjectCard(props){
  return (
      <div className={styles.card}>
          <h3>{props.year}</h3>
          <h2>{props.title}</h2>
          <h4>{props.description}</h4>
          <ul className={styles.linkShelf}>
              {props.source_link && <li>
                  <a href={props.source_link}
                    style={{backgroundColor: 'var(--important-red)'}}
                    target='_blank' rel="noopener noreferrer">&gt; source</a>
              </li>}
              {props.demo_link && <li>
                  <a href={props.demo_link}
                    style={{backgroundColor: 'var(--important-orange)'}}
                    rel="noopener noreferrer">&gt; demo</a>
              </li>}
              {props.article_link && <li>
                  <Link to={props.article_link}
                    style={{backgroundColor: 'var(--important-yellow)'}}
                  >&gt; article</Link>
              </li>}
          </ul>
      </div>
  )
}

export function Projects(){
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.grid}>
        
        { 
          projects.map((project) =>
            <ProjectCard
              title={project.title}
              year={project.year}
              description={project.description}
              source_link={project.source_link}
              demo_link={project.demo_link}
              article_link={project.article_link}
              key={project.title}
            />
          )
        }
      </div>
    </div>
  )
}