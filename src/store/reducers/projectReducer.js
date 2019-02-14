const initState = {
  // You can access this property on the 
  projects: [
    {id: '1', title: 'Book Shelves', content: 'Search for books and categorize them.'},
    {id: '2', title: 'Cat Clicker',  content: 'Click a set of well-known lovable cats.'},
    {id: '3', title: 'Circles',      content: 'Hover over circles and enjoy the effict.'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log(action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log(action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer;