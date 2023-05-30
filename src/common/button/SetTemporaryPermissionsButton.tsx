// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import RocketIcon from '@mui/icons-material/Rocket';
import { GridRowsProp } from '@mui/x-data-grid';

interface SetTemporaryPermissionsProps {
	isActive: boolean;
	filterRows: GridRowsProp;
}

export function SetTemporaryPermissionsButton(
	props: SetTemporaryPermissionsProps,
) {
	const { filterRows } = props;

	return (
		<Box>
			<LoadingButton
				disabled={!filterRows.length || filterRows.length > 5}
				className="buttontype6"
			>
				<div>
					<div>
						<RocketIcon className="icontype1" />
					</div>
					<div>
						<span>Set Temporary Permissions</span>
					</div>
				</div>
			</LoadingButton>
		</Box>
	);
}
