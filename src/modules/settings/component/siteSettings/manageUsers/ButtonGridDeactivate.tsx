/*Component Name :ButtonGridDeactivate
 Utility : This component is used for Buttons in the Deactivate Manage users modal component
 Author Ananya Dhar 15-05-2023-------------------------   */
import { Button, Grid } from '@mui/material';
interface ButtonGridDeactivateProps {
	handleCancel: () => void;
	handleClickSave: () => void;
}

export function ButtonGridDeactivate(props: ButtonGridDeactivateProps) {
	const { handleCancel, handleClickSave } = props;
	return (
		<Grid className="flexrow pt-16 justify-space-evenly">
			<Button onClick={handleClickSave} variant="contained">
				Yes
			</Button>
			<Button onClick={handleCancel} className="bg-grey col-white">
				No
			</Button>
		</Grid>
	);
}
