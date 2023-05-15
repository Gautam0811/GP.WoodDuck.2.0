/*Component Name :PermissionService 
 Utility : This componenet is used to fetch the permission set details from backend services.
 Author Krishna Choudharyn 06-05-2023-------------------------   */

import axios from 'axios';

export async function getPermissionSet() {
	const baseURL: string = String(
		process.env.REACT_APP_MANAGE_PERMISSION_SET_VIEW,
	);
	console.log('baseURL :' + baseURL);

	return await axios.get(baseURL).then((response) => {
		const permissionset = response.data;
		return permissionset;
	});
}
