/* With Thunk, we'll return a function instead that:
1- takes the (dispatch) function as a parameter.
2- Pauses the dispatch and finishes the async work.
3- carry on by calling the dispatch function.
*/
export const createProject = project => {
	return (dispatch, getState, {getFirestore}) => { // Destructuring
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;

		// (1) Initialize getFirestore function and store the result in a variable
		const firestore = getFirestore();
		// (2) Access "projects" collection and add a document (project) to it
		firestore.collection('projects').add({
			...project,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type: 'CREATE_PROJECT', project });
		}).catch(err => {
			dispatch({ type: 'CREATE_PROJECT_ERROR', err });
		})
		// Make async call to the database
	}
}