const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('Login success');
      return {
        ...state,
        authError: null
      }
    case 'LOGIN_ERROR':
      console.log('Login error');
      return {
        ...state,
        authError: action.err.message
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;
    case 'SIGNUP-SUCCESS':
      console.log('Signup success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
}

export default authReducer;