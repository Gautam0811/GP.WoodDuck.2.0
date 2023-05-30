// ManageUserHeader
// Component Utility : The Component is created display the header part of the manage users page
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CloseButton, ImportButton } from '../../../../../common/button/index';

export function MillGroupsHeader() {
	const [value, setValue] = React.useState('Active');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		//This is the header for Manage Users

		<Box>
			<Grid className="bg-grey-white py-16 pl-16 w100 align-items-center">
				<Grid className="flexrow justify-space-between">
					<Typography className="pl-16 font-bold">
						My Mill Groups
					</Typography>
					<Grid className="flexrow pr-16">
						<ImportButton />
						<CloseButton />
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
