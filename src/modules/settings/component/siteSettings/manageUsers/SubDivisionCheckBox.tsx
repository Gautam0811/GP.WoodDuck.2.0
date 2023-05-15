import { Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

interface CheckBoxOptions {
	label: string;
	value: string;
}
const options: CheckBoxOptions[] = [
	{ label: 'OSB', value: 'OSB' },
	{ label: 'PLY', value: 'PLY' },
];

export default function SubDivisionCheckBox(props: any) {
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
		<Grid>
			{division.subdivision === 'SP' && (
				<Grid className="flexrow">
					<Typography className="pr-8">Sub Division:</Typography>
					<Grid>
						{options.map((option) => (
							<div key={option.value}>
								<label>
									<input
										type="checkbox"
										value={option.value}
										checked={props.selectedOptions.includes(
											option.value,
										)}
										onChange={(e) =>
											props.handleCheckBoxChange(
												e.target.value,
											)
										}
									/>
									{option.label}
								</label>
							</div>
						))}
					</Grid>
				</Grid>
			)}
		</Grid>
	);
}
