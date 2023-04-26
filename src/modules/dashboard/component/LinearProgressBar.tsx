// WD_LinearProgressBar
// Component Utility : The Component created to display the linear progress bar on the Mills Forecast in the Dashboard
// Author Manas Dixit on 1-3-2023
// -------------------------
import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function LinearWithValueLabel(props: any) {
	const [color, setColor] = useState('');
	const [colors, setColors] = useState('');
	const value = props.Values;
	useEffect(() => {
		if (value <= 100) {
			setColors('lightgrey');
		} else {
			setColors('red');
		}
	}, [value]);

	useEffect(() => {
		if (value <= 50) {
			setColor('green');
		} else if (value >= 50 && value <= 100) {
			setColor('yellow');
		} else {
			setColor('red');
		}
	}, [value]);
	return (
		<Box className="flex-row-center pl-24 w100">
			<LinearProgress
				variant="determinate"
				value={props.Values}
				sx={{
					backgroundColor: `${colors}`,
					'& .MuiLinearProgress-bar': {
						backgroundColor: `${color}`,
					},
				}}
				className="w70-h10"
			/>
			<Typography variant="body2" className="fs-11 pl-8" color="black">
				{value}%
			</Typography>
		</Box>
	);
}
