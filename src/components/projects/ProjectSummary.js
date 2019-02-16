import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
  return (
    <li className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <h4 className="card-title">{project.title}</h4>
        <p>{`Posted by ${project.authorFirstName} ${project.authorLastName}.`}</p>
        <time className="grey-text">{moment(project.createdAt.toDate()).calendar()}</time>
      </div>
    </li>
  )
};

export default ProjectSummary;