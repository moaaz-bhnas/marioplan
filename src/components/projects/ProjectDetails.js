import React from 'react';

const ProjectDetails = ({match}) => {
  const id = match.params.id;
  return(
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <p>Posted by the big writer, Moaaz Bhnas.</p>
          <time>2nd september, 2am</time>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;