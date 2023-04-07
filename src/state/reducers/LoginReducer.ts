/*Component Name : Reducers 
 Utility : This Component is used for Redux implementation and helps to process the request based on action and payload. 
 Author Krishna Choudharyn 06-03-2023-------------------------   */

const LoginReducer = (state = [], action:any) => {

  if (action.type === "login") {
    return action.payload;
  } 
  else{
    return state;
  }
};
export default loginReducer;
