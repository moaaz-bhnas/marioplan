import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => (
  <section className="project-list section">
    <ul>
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </ul>
  </section>
);

export default ProjectList;