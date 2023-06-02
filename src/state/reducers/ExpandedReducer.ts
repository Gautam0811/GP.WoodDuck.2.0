/*Component Name : Reducers 
 Utility : This Component is used for Redux implementation and helps to process the request based on action and payload. 
 Author Ananya Dhar 06-03-2023-------------------------   */

//This is the Reducer for expanded leftside navbar
const expandedReducer = (state = false, action: any) => {
	if (action.type === 'expanded') {
		return action.payload;
	} else {
		return state;
	}
};
export default expandedReducer;
