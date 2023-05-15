/*Component Name :ManageUsers 
 Utility : This componenet is the parent component of manage user.
 Author Ananya Dhar 04-05-2023-------------------------   */

import Grid from '@mui/material/Grid';
import { ManageUsersTabs } from './index';

export function ManageUsers() {
	return (
		<Grid className="w100">
			<ManageUsersTabs />
		</Grid>
	);
}
