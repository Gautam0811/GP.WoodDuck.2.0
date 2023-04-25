// Subdivision
// Component Utility : The Component created for displaying subdivision in the right header section
// Author Ananya Dhar on 29-03-2023
// -------------------------

import * as React from 'react';
import Typography from '@mui/material/Typography';
import '../../../../../styles/StyleMain.css';
import {
	Grid,
	Modal,
	Button,
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material';

export function Subdivision() {
	const [name, setName]: any = React.useState({});
	const [subdivision, setSubdivision] = React.useState('');
	React.useEffect(() => {
		function fetchName() {
			let nameFetch = JSON.parse(localStorage.getItem('status') || '{}');
			setName(nameFetch);
			setSubdivision(nameFetch.subdivision);
			//on first time load
			window.localStorage.setItem(
				'subdivisionValue',
				nameFetch.subdivision,
			);
		}
		fetchName();
	}, []);

	const handleChange = (event: SelectChangeEvent) => {
		setSubdivision(event.target.value);
		//on select of subdivision load
		window.localStorage.setItem('subdivisionValue', event.target.value);
	};
	return (
		// View for Subdivision section
		<Grid className="flex-end col-005fa8">
			<Grid>
				<FormControl variant="standard" className="col-005fa8">
					{/* <InputLabel id="demo-simple-select-standard-label">{name.subdivision}</InputLabel> */}
					<Select
						id="demo-simple-select-standard"
						value={subdivision}
						onChange={handleChange}
						className="col-005fa8"
					>
						<MenuItem value={'SL'} className="col-005fa8">
							SL
						</MenuItem>
						<MenuItem value={'SP'} className="col-005fa8">
							SP
						</MenuItem>
					</Select>
				</FormControl>
			</Grid>
		</Grid>
	);
}
