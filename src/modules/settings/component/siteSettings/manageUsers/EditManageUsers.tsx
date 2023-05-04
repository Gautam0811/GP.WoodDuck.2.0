import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { GridRowId, GridRowModesModel, GridRowModes } from '@mui/x-data-grid';
import { SaveManageUsersButton } from '../../../../../common/button';

interface SelectedRowParams {
	id: GridRowId;
}

interface EditToolbarProps {
	selectedRowParams?: SelectedRowParams;
	rowModesModel: GridRowModesModel;
	setRowModesModel: (value: GridRowModesModel) => void;
	rowMode: 'view' | 'edit';
}

export function EditManageUsers(props: EditToolbarProps) {
	const { selectedRowParams, rowMode, rowModesModel, setRowModesModel } =
		props;

	const handleSaveOrEdit = () => {
		if (!selectedRowParams) {
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
				<SaveManageUsersButton
					selectedRowParams={selectedRowParams}
					rowMode={rowMode}
					rowModesModel={rowModesModel}
					setRowModesModel={setRowModesModel}
				/>
			) : (
				<Button
					className="flexcolumn fs-10"
					onClick={handleSaveOrEdit}
					disabled={!selectedRowParams}
				>
					<EditIcon className="fs-14" />
					<p>Edit Users</p>
				</Button>
			)}
		</Box>
	);
}
