export const signIn = credentials => {
  return (dispatch, getState, {getFirebase} /* This gives access to Firebase API, so we can interact with it */) => {
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

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    })
  }
}

export const signUp = newUser => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword( // (1) New user 
      newUser.email,
      newUser.password
    ).then(response => { // (2) Document for that user in Firestore
      // response.user => info about the signed up user
      /* Notes
      - Here I want to add custom properties to the user in firestore.
      - '.collection()' creats a collection if it doesn't already exist.
      - Firebase automatically creates an ID for each new document. We don't want that.
      - We want the ID to be the one in auth service.
      - '.doc()' creates a new document with the ID passed as an argument.
      */
      return firestore.collection('users').doc(response.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' })
      }).then(err => {
        dispatch({ type: 'SIGNUP_error', err })
      })
    })
  }
}