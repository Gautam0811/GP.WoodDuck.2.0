/*Component Name : Permission Set Dropdown
 Utility : This component is used to display permission set dropdown in modal component
 Author Ananya Dhar 04-05-2023-------------------------   */
import { Grid } from '@mui/material';
import { permissionSets } from '../../../services/AddUserData';
import { useSelector } from 'react-redux';

interface PermissionSetProps {
	setSelectedPermissionSet: any;
}

export function PermissionSetDropdown(props: PermissionSetProps) {
	const division = useSelector((state: any) => state.divisionInfo);

	return (
		<Grid>
			<Grid>
				{division === 'SP' ? (
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
									<option
										key={item.id}
										value={item.permission}
									>
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
									<option
										key={item.id}
										value={item.permission}
									>
										{item.permission}
									</option>
								))}
						</select>
					</Grid>
				)}
			</Grid>
			<br />
		</Grid>
	);
}
