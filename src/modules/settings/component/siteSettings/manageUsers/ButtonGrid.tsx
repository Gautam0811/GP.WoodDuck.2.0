import { Button, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

export default function ButtonGrid(props: any) {
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
		<Grid className="flexrow pt-16 justify-space-evenly">
			{division.subdivision === 'SP' ? (
				<Button
					disabled={
						props.empty ||
						!props.isFound ||
						props.emailExists ||
						!props.emailId
					}
					onClick={props.handleClickSnack({
						vertical: 'top',
						horizontal: 'right',
					})}
					variant="contained"
				>
					Add
				</Button>
			) : (
				<Button
					disabled={
						!props.isFound || props.emailExists || !props.emailId
					}
					onClick={props.handleClickSnack({
						vertical: 'top',
						horizontal: 'right',
					})}
					variant="contained"
				>
					Add
				</Button>
			)}
			<Button onClick={props.handleCancel} className="bg-grey col-white">
				Cancel
			</Button>
		</Grid>
	);
}
