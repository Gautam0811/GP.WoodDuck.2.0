const reducer = (state = 0, action) => {

  if (action.type === "login") {
    return state + action.payload;
  } 
  else {
    return state;
  }
};
export default reducer;