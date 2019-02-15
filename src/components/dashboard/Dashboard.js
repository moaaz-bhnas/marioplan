import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
// A function that, when called, returns a higher order component.
// It gives the component super powers (the ability to connect to redux store)
import { connect } from 'react-redux'; 
// A higher order component that lets us specify which collection is needed
// From 'react-redux-fb' cause we're connecting react now
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  state = {  }
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />

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
  if(state.firestore.ordered.projects) {
    return {
      projects: state.firestore.ordered.projects,
      auth: state.firebase.auth
    }
  } else {
    return {
      projects: [],
      auth: state.firebase.auth
    }
  }
}

// This is how we use two higher order components
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard);