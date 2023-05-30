/*Component Name :ButtonGridEdit
 Utility : This component is used for Buttons in the Edit Permissions for users modal component
 Author Ananya Dhar 15-05-2023-------------------------   */
import { Button, Grid } from '@mui/material';

interface ButtonGridProps {
	handleCancel: () => void;
	handleClickSave: () => void;
}

export function ButtonGridEdit(props: ButtonGridProps) {
	const { handleCancel, handleClickSave } = props;
	return (
		<Grid className="flexrow pt-16 justify-space-evenly">
			<Button onClick={handleClickSave} variant="contained">
				Save
			</Button>
			<Button onClick={handleCancel} className="bg-grey col-white">
				Cancel
			</Button>
		</Grid>
	);
}
