import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { GridRowId, GridRowModesModel, GridRowModes } from '@mui/x-data-grid';
import { SaveButton } from '../../../../../common/button';

interface SelectedRowParams {
	id: GridRowId;
}

interface EditProps {
	setSelectedRowParams: any;
	selectedRowParams: SelectedRowParams;
	rowModesModel: GridRowModesModel;
	setRowModesModel: (value: GridRowModesModel) => void;
	rowMode: 'view' | 'edit';
}

export function EditPermissions(props: EditProps) {
	const {
		setSelectedRowParams,
		selectedRowParams,
		rowMode,
		rowModesModel,
		setRowModesModel,
	} = props;

	const handleSaveOrEdit = () => {
		if (selectedRowParams.id === 0 || selectedRowParams.id === 1) {
			return;
		}
		const { id } = selectedRowParams;
		// if (rowMode === "edit") {
		//   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
		// } else {
		//   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
		// }

		if (rowMode === 'view') {
			setRowModesModel({
				...rowModesModel,
				[id]: { mode: GridRowModes.Edit },
			});
		}
	};

	return (
		<Box>
			{rowMode === 'edit' ? (
				<SaveButton
					setSelectedRowParams={setSelectedRowParams}
					selectedRowParams={selectedRowParams}
					rowMode={rowMode}
					rowModesModel={rowModesModel}
					setRowModesModel={setRowModesModel}
				/>
			) : (
				<Button
					className="flexcolumn fs-10"
					onClick={handleSaveOrEdit}
					disabled={
						selectedRowParams.id === 0 || selectedRowParams.id === 1
					}
				>
					<EditIcon className="fs-14" />
					<p>Edit Permissions</p>
				</Button>
			)}
		</Box>
	);
}
