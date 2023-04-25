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
