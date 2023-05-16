/*Component Name :ButtonGrid 
 Utility : This component is used for Buttons in the modal component
 Author Ananya Dhar 15-05-2023-------------------------   */
import { Button, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { SnackbarOrigin } from '@mui/material/Snackbar';

interface ButtonGridProps {
	empty: boolean;
	isFound: boolean;
	emailExists: boolean;
	emailId: string;
	handleCancel: () => void;
	handleClickSnack: (newState: SnackbarOrigin) => () => void;
}

export function ButtonGrid(props: ButtonGridProps) {
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
