// Subdivision
// Component Utility : The Component created for displaying subdivision in the right header section
// Author Ananya Dhar on 29-03-2023
// -------------------------

import { useState, useEffect } from 'react';
import '../../../../../styles/StyleMain.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../../state';

import '../../styles/Header.css';
import {
	Grid,
	FormControl,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material';

export function Division() {
	const dispatch = useDispatch();
	const { divisionData } = bindActionCreators(actionCreators, dispatch);
	const divisionInfo = useSelector((state: any) => state.divisionInfo);

	const [name, setName]: any = useState({});
	useEffect(() => {
		function fetchName() {
			let nameFetch = JSON.parse(localStorage.getItem('status') || '{}');
			setName(nameFetch);
		}
		fetchName();
	}, []);

	const handleChange = (event: SelectChangeEvent) => {
		divisionData(event.target.value);
	};
	return (
		// View for Subdivision section
		<Grid className="flex-end col-005fa8">
			<Grid>
				<FormControl variant="standard" className="col-005fa8">
					{/* <InputLabel id="demo-simple-select-standard-label">{name.subdivision}</InputLabel> */}
					<Select
						id="demo-simple-select-standard"
						value={divisionInfo}
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
