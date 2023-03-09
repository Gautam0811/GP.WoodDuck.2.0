/*Component Name : Action-Creator
 Utility : This action creator helps us to intialize the type and payload of action.
 Author Krishna Choudharyn 06-03-2023-------------------------   */

export const loginData = (amount) => {

  return (dispatch) => {

    dispatch({
        type: 'login',
        payload : amount
    })
  };
};



