import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
  state = { 
    title: '',
    content: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value 
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    // console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  }
}

/* What happens when createProject gets called in the component?
1- createProject (action craetor) gets called.
2- Returns a function.
3- The function stops the dispatching, async and carry on the dispatching again.
*/

export default connect(null, mapDispatchToProps)(CreateProject);