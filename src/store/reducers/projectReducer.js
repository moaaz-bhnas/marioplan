const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Project created.', action.project);
      break;
    case 'CREATE_PROJECT_ERROR':
      console.log('Project error!', action.err);
  }
  return state;
}

export default projectReducer;