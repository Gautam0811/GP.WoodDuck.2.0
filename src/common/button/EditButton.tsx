// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export function EditButton(props: any) {
	return (
		<Box>
			<LoadingButton
				onClick={props.onClick}
				disabled={
					!props.filterRows.length || props.filterRows.length > 5
				}
				className="buttontype6"
			>
				<div>
					<div>
						<EditIcon className="icontype1" />
					</div>
					<div>
						<span>Edit</span>
					</div>
				</div>
			</LoadingButton>
		</Box>
	);
}
