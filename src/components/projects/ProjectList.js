import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => (
  <section className="project-list section">
    <ul>
      {
        projects.length && 
        projects.map(project => (
          <ProjectSummary key={project.id} project={project} />
        ))
      }
    </ul>
  </section>
);

export default ProjectList;