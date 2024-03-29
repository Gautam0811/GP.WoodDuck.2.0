/*Component Name : Reducers 
 Utility : This Component is used for Redux implementation and helps to process the request based on action and payload. 
 Author Krishna Choudharyn 06-03-2023-------------------------   */

//This is the reducer for Permission
const permissionReducer = (state = [], action: any) => {
	if (action.type === 'permissionSet') {
		return action.payload;
	} else {
		return state;
	}
};
export default permissionReducer;
