// header-section
// Component Utility : The Component created for rendering a header navigation bar for all the pages in the app
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import Grid from '@mui/material/Grid';
import '../../../../styles/StyleMain.css';
import { LeftHeader, MiddleHeader, RightHeader } from '../index';

export function Header() {
	return (
		// View for header section
		<Grid container spacing={0.25}>
			<Grid item xs={2}>
				<LeftHeader />
			</Grid>
			<Grid item xs={7}>
				<MiddleHeader />
			</Grid>
			<Grid item xs={3}>
				<RightHeader />
			</Grid>
		</Grid>
	);
}
