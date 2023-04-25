import * as React from 'react';
import { getPermissionSet } from './Api';
import { BindPermissionGrid } from '../index';
import { GridRowsProp } from '@mui/x-data-grid';

export function ApiSetData() {
	const [permissionRows, setPermissionRows] = React.useState([]);

	React.useEffect(() => {
		getPermissionSet().then((permissionset) => {
			setPermissionRows(BindPermissionGrid(permissionset));
		});
	}, []);
	return { permissionRows };
}

export const ApiPermissionData: GridRowsProp = [ApiSetData()];
console.log(ApiPermissionData);
