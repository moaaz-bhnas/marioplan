/* With Thunk, we'll return a function instead that:
1- takes the (dispatch) function as a parameter.
2- Pauses the dispatch and finishes the async work.
3- carry on by calling the dispatch function.
*/
export const createProject = project => {
	return (dispatch, getState, {getFirestore}) => { // Destructuring
		// (1) Initialize getFirestore function and store the result in a variable
		const firestore = getFirestore();
		// (2) Access "projects" collection and add a document (project) to it
		firestore.collection('projects').add({
			...project,
			authorFirstName: 'Moaaz',
			authorLastName: 'Bhnas',
			authorId: '228',
			createdAt: new Date()
		})
		// Make async call to the database
		dispatch({ type: 'CREATE_PROJECT', project })
	}
}