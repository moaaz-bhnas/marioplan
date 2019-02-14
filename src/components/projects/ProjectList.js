import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => (
  <section className="project-list section">
    <ul>
      {
        projects.length && 
        projects.map(project => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <ProjectSummary project={project} />
          </Link>
        ))
      }
    </ul>
  </section>
);

export default ProjectList;