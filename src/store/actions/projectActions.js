/* With Thunk, we'll return a function instead that:
1- takes the (dispatch) function as a parameter.
2- Pauses the dispatch and finishes the async work.
3- carry on by calling the dispatch function.
*/
export const createProject = project => {
	return (dispatch, getState) => {
		// Make async call to the databas
		dispatch({ type: 'CREATE_PROJECT', project })
	}
}