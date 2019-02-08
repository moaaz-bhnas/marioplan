import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
// A function that, when called, returns a higher order component.
// It gives the component super powers (the ability to connect to redux store)
import { connect } from 'react-redux'; 

class Dashboard extends Component {
  state = {  }
  render() {
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

// Let's map the store state to the component's props
// This function has acssess to the store's state
const mapStateToProps = state => {
  // This object tells which props we need from the store
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);