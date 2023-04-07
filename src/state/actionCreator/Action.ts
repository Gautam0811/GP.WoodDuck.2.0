/*Component Name : Action-Creator
 Utility : This componenet is used for redux implementation and help to intialize the type and payload of action.
 Author Krishna Choudharyn 06-03-2023-------------------------   */

export const loginData = (userDetails:any) => {

  return (dispatch:any) => {

    dispatch({
        type: 'login',
        payload : userDetails
    })
  };
};
export const permissionData = (permissionSet:any) => {

  return (dispatch:any) => {

    dispatch({
        type: 'permissionSet',
        payload : permissionSet
    })
  };
};



