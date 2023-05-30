/*Component Name :ButtonGrid 
 Utility : This component is used for Buttons in the modal component
 Author Ananya Dhar 15-05-2023-------------------------   */
import { Button, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
interface ButtonGridProps {
	empty: boolean;
	isFound: boolean;
	emailExists: boolean;
	emailId: string;
	handleCancel: () => void;
	handleClickSave: () => void;
}

export function ButtonGrid(props: ButtonGridProps) {
	const division = useSelector((state: any) => state.divisionInfo);
	return (
		<Grid className="flexrow pt-16 justify-space-evenly">
			{division === 'SP' ? (
				<Button
					disabled={
						props.empty ||
						!props.isFound ||
						props.emailExists ||
						!props.emailId
					}
					onClick={props.handleClickSave}
					variant="contained"
				>
					Add
				</Button>
			) : (
				<Button
					disabled={
						!props.isFound || props.emailExists || !props.emailId
					}
					onClick={props.handleClickSave}
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
