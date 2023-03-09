/*Component Name : Reducers 
 Utility : This Component is used for Redux implementation and helps to process the request based on action and payload. 
 Author Krishna Choudharyn 06-03-2023-------------------------   */

const reducer = (state = 0, action) => {

  if (action.type === "login") {
    return state + action.payload;
  } 
  else {
    return state;
  }
};
export default reducer;
