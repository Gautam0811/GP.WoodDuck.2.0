// WD_UserSettings
// Component Utility : The Component is created to render user settings tab in the Settings page
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { SettingsRoute } from '../../routes';
export function UserSettings() {
	return (
		<Box className="border-radius-5 box-shad-125grey w30 bg-white mx-32 my-8">
			<Grid>
				<Grid item xs>
					<Typography
						className="font-bold p-4 pl-16 fs-16 bg-grey-white"
						component="div"
					>
						USER SETTINGS
					</Typography>
				</Grid>
			</Grid>
			<Stack spacing={0.2} className="p-8">
				<Link to="/millGroups" className="text-dec-none">
					<Typography className="col-005fa8">Mill Groups</Typography>
				</Link>
				<Link to="#" className="text-dec-none">
					<Typography className="col-005fa8">
						Product Groups
					</Typography>
				</Link>
				<Link to="#" className="text-dec-none">
					<Typography className="col-005fa8">Buyer Groups</Typography>
				</Link>
				<Link to="customSetting" className="text-dec-none">
					<Typography className="col-005fa8">
						Custom Settings
					</Typography>
					<SettingsRoute />
				</Link>
			</Stack>
			<br />
		</Box>
	);
}
