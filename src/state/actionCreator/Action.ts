/*Component Name : Action-Creator
 Utility : This componenet is used for redux implementation and help to intialize the type and payload of action.
 Author Krishna Choudharyn 06-03-2023-------------------------   */

//This is the Action creater for loginData
export const loginData = (userDetails: any) => {
	return (dispatch: any) => {
		dispatch({
			type: 'login',
			payload: userDetails,
		});
	};
};

//This is the Action creater for permissionData
export const permissionData = (permissionSet: any) => {
	return (dispatch: any) => {
		dispatch({
			type: 'permissionSet',
			payload: permissionSet,
		});
	};
};

export const divisionData = (division: any) => {
	return (dispatch: any) => {
		dispatch({
			type: 'division',
			payload: division,
		});
	};
};
