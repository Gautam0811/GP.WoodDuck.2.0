/*Component Name : Reducers 
 Utility : This Component is used for Redux implementation and helps to process the request based on action and payload. 
 Author Ananya Dhar 06-03-2023-------------------------   */

//This is the Reducer for active tabs
const activeReducer = (state = [], action: any) => {
	if (action.type === 'active') {
		return action.payload;
	} else {
		return state;
	}
};
export default activeReducer;
