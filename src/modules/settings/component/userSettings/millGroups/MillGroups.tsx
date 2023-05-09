import Grid from '@mui/material/Grid';
import { MillGroupsHeader, MillGroupsGrid } from './index';

export function MillGroups() {
	return (
		<Grid className="w100">
			<MillGroupsHeader />
			<MillGroupsGrid />
		</Grid>
	);
}
