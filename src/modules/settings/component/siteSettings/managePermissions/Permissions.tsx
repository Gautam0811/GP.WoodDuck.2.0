/*Component Name :Notification 
 Utility : This componenet is the parent component of permission set and control.
 Author Gautam Malhotra 06-05-2023-------------------------   */

import Grid from '@mui/material/Grid';
import { ViewPermissions } from './index';

export function Permissions() {
	return (
		<Grid className="w100">
			<ViewPermissions />
		</Grid>
	);
}
