import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { GridRowId, GridRowModesModel } from '@mui/x-data-grid';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

interface SelectedRowParams {
	id: GridRowId;
}

interface EditToolbarProps {
	selectedRowParams?: SelectedRowParams;
	rowModesModel: GridRowModesModel;
	setRowModesModel: (value: GridRowModesModel) => void;
	rowMode: 'view' | 'edit';
}

export function ActivateButton(props: EditToolbarProps) {
	const { selectedRowParams } = props;

	return (
		<Box>
			<LoadingButton disabled={!selectedRowParams} className="fs-10">
				<div>
					<div>
						<AddOutlinedIcon className="icontype1" />
					</div>
					<div>
						<span>Activate</span>
					</div>
				</div>
			</LoadingButton>
		</Box>
	);
}
