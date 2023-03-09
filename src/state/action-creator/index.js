export const loginData = (amount) => {

  return (dispatch) => {

    dispatch({
        type: 'login',
        payload : amount
    })
  };
};



