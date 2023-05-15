/*Component Name :AddPermissions 
 Utility : This componenet is used to add the permission set to users.
 Author Gautam Malhotra 06-05-2023-------------------------   */

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {
	GridRowsProp,
	GridRowModes,
	GridRowModesModel,
} from '@mui/x-data-grid';

interface AddProps {
	permissionRows: any;
	rowModesModel: GridRowModesModel;
	setRowModesModel: (
		newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
	) => void;
	setPermissionRows: (
		newRows: (oldRows: GridRowsProp) => GridRowsProp,
	) => void;
	filterRows: any;
	setAdd: any;
}

export function AddPermissions(props: AddProps) {
	const {
		permissionRows,
		setPermissionRows,
		setRowModesModel,
		rowModesModel,
		filterRows,
		setAdd,
	} = props;

	const isInEditMode = Object.keys(rowModesModel).some((rowId) => {
		return rowModesModel[rowId].mode === GridRowModes.Edit;
	});

	const handleAdd = () => {
		let id: number = permissionRows[permissionRows.length - 1].id + 1;
		setPermissionRows((oldRows) => [...oldRows, { id }]);
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit },
		}));
		setAdd(true);
	};

	return (
		<Box>
			<LoadingButton
				className="buttontype4"
				onClick={handleAdd}
				disabled={isInEditMode || filterRows.length}
			>
				<div>
					<div>
						<AddOutlinedIcon className="icontype1" />
					</div>
					<div>
						<span>ADD</span>
					</div>
				</div>
			</LoadingButton>
		</Box>
	);
}
