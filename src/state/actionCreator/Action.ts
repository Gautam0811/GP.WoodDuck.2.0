/*Component Name : Action-Creator
 Utility : This componenet is used for redux implementation and help to intialize the type and payload of action.
 Author Krishna Choudharyn 06-03-2023-------------------------   */

export const loginData = (amount: any) => {

  return (dispatch: (arg0: { type: string; payload: any; }) => void) => {

    dispatch({
        type: 'login',
        payload : amount
    })
  };
};



