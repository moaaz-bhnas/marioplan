import React from 'react';

const ProjectSummary = ({project}) => (
  <li className="card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <h4 className="card-title">{project.title}</h4>
      <p>Posted by the great developer Moaaz Bhnas.</p>
      <time className="grey-text">3rd september, 2am</time>
    </div>
  </li>
);

export default ProjectSummary;