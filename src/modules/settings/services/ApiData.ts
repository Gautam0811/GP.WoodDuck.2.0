import { useState, useEffect } from 'react';
import { getPermissionSet } from './Api';
import { BindPermissionGrid } from '../index';
import { GridRowsProp } from '@mui/x-data-grid';

export function ApiSetData() {
	const [permissionRows, setPermissionRows] = useState([]);

	useEffect(() => {
		getPermissionSet().then((permissionset) => {
			setPermissionRows(BindPermissionGrid(permissionset));
		});
	}, []);
	return { permissionRows };
}

export const ApiPermissionData: GridRowsProp = [ApiSetData()];
console.log(ApiPermissionData);
