/*Component Name : Permission Set Dropdown
 Utility : This component is used to display permission set dropdown in modal component
 Author Ananya Dhar 04-05-2023-------------------------   */
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { permissionSets } from '../../../services/AddUserData';

interface PermissionSetProps {
	setSelectedPermissionSet: any;
}

export function PermissionSetDropdown(props: PermissionSetProps) {
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
