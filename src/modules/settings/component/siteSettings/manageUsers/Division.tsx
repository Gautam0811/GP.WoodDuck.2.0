// Component: Division
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
import { useSelector } from 'react-redux';

export function Division() {
	const division = useSelector((state: any) => state.divisionInfo);

	return (
		<Grid className="flexrow">
			<Typography className="pr-8">Division:</Typography>
			<Grid className="border-grey-1">
				{division === 'SL' ? (
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
