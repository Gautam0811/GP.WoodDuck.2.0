// division
// Component Utility : This Component is created to display the selected division
// Author Ananya Dhar on 15-05-2023
// -------------------------
import {
	Typography,
	Grid,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import { useState, useEffect } from 'react';

export default function Division() {
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
		<Grid className="flexrow">
			<Typography className="pr-8">Division:</Typography>
			<Grid className="border-grey-1">
				{division.subdivision === 'SL' ? (
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="SL"
							disabled
						/>
					</FormGroup>
				) : (
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="SP"
							disabled
						/>
					</FormGroup>
				)}
			</Grid>
		</Grid>
	);
}
