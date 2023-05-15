// LeftHeaderSection
// Component Utility : The Component created for rendering a header navigation bar for all the pages in the app
// Author Krishna Choudhary on 3-23-2023
// -------------------------
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import '../../../../styles/StyleMain.css';
import '../styles/Header.css';
import { LeftSideBar_Small_Screen } from '../../leftSideBar/LeftSideBar_Small_Screen';

export function LeftHeader() {
	return (
		// View for Left header section section

		<Box className="flex-grow">
			<AppBar className="bg-ffb74d position-static">
				<Toolbar className="leftHeader">
					<div className="mr-64 left-header-button-no-show">
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
						></IconButton>
					</div>
					<LeftSideBar_Small_Screen />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
