// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import BlockIcon from '@mui/icons-material/Block';
import { GridRowId, GridRowModesModel } from '@mui/x-data-grid';

interface SelectedRowParams {
	id: GridRowId;
}

interface EditToolbarProps {
	selectedRowParams?: SelectedRowParams;
	rowModesModel: GridRowModesModel;
	setRowModesModel: (value: GridRowModesModel) => void;
	rowMode: 'view' | 'edit';
}

export function DeactivateButton(props: EditToolbarProps) {
	const { selectedRowParams, rowModesModel, rowMode, setRowModesModel } =
		props;

	return (
		<Box>
			<LoadingButton
				disabled={!selectedRowParams}
				className="buttontype6"
			>
				<div>
					<div>
						<BlockIcon className="icontype1" />
					</div>
					<div>
						<span>Deactivate</span>
					</div>
				</div>
			</LoadingButton>
		</Box>
	);
}
