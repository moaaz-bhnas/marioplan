export const signIn = credentials => {
  return (dispatch, getStatus, {getFirebase} /* This gives access to Firebase API, so we can interact with it */) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'LOGIN_ERROR', err })
    })
  } 
}