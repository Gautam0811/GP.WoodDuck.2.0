import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { permissionSets } from '../manageUsers/services/AddUserData';

export default function PermissionSetDropdown(props: any) {
	const [division, setDivision]: any = useState({});

	useEffect(() => {
		function fetchName() {
			let fetchDivision = JSON.parse(
				localStorage.getItem('status') || '{}',
			);
			setDivision(fetchDivision);
		}
		fetchName();
	}, []);

	return (
		<Grid>
			{division.subdivision === 'SP' ? (
				<Grid className="flexrow">
					<Grid>Permission Set: </Grid>
					<select
						onChange={(e) =>
							props.setSelectedPermissionSet(e.target.value)
						}
					>
						{permissionSets
							.filter((a) => a.subdivision === 'SP')
							.map((item) => (
								<option key={item.id} value={item.permission}>
									{item.permission}
								</option>
							))}
					</select>
				</Grid>
			) : (
				<Grid className="flexrow">
					<Grid>Permission Set: </Grid>
					<select
						onChange={(e) =>
							props.setSelectedPermissionSet(e.target.value)
						}
					>
						{permissionSets
							.filter((a) => a.subdivision === 'SL')
							.map((item) => (
								<option key={item.id} value={item.permission}>
									{item.permission}
								</option>
							))}
					</select>
				</Grid>
			)}
		</Grid>
	);
}
