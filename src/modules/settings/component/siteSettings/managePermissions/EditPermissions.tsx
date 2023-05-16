/*Component Name :Notification 
 Utility : This componenet is used to edit the permission set.
 Author Krishna Choudhary 06-05-2023-------------------------   */

import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import EditIcon from '@mui/icons-material/Edit';

import {
	GridRowModesModel,
	GridRowModes,
	GridRowsProp,
} from '@mui/x-data-grid';

interface EditProps {
	filterRows: GridRowsProp;
	rowModesModel: GridRowModesModel;
	setRowModesModel: (
		newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
	) => void;
	setAdd: any;
}

export function EditPermissions(props: EditProps) {
	const { filterRows, rowModesModel, setRowModesModel, setAdd } = props;

	const isInEditMode = Object.keys(rowModesModel).some((rowId) => {
		return rowModesModel[rowId].mode === GridRowModes.Edit;
	});
	const handleClick = () => {
		console.log('handleclick');
		console.log(filterRows);
		const newModel = filterRows.reduce<any>((acc, row: any) => {
			console.log(row.id);
			console.log(acc);
			acc[row.id] = { mode: GridRowModes.Edit };
			return acc;
		}, {});

		setRowModesModel(newModel);
		setAdd(false);
	};

	return (
		<Box>
			<LoadingButton
				className="buttontype4"
				onClick={handleClick}
				disabled={isInEditMode || !filterRows.length}
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
