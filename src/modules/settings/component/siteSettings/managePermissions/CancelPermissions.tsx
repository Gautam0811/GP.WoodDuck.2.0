/*Component Name : CancelPermissions 
 Utility : This componenet is used cancel the event for permission set and control.
 Author Gautam Malhotra 06-05-2023-------------------------   */

import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import UndoIcon from '@mui/icons-material/Undo';
import {
	GridRowModesModel,
	GridRowModes,
	GridRowsProp,
} from '@mui/x-data-grid';
import { Notification } from '../../../../../common/Alert/Notification';
import { SnackbarOrigin } from '@mui/material/Snackbar';

interface CancelProps {
	filterRows: GridRowsProp;
	rowModesModel: GridRowModesModel;
	setRowModesModel: (
		newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
	) => void;
}
export interface State extends SnackbarOrigin {
	openSnack: boolean;
}
export function CancelPermissions(props: CancelProps) {
	const [notify, setNotify] = useState({
		isOpen: false,
		message: '',
		type: '',
	});
	const [state, setState] = useState<State>({
		openSnack: false,
		vertical: 'top',
		horizontal: 'right',
	});

	const [apiResponse, setApiResponse] = useState(false);
	const handleClickSnack = (newState: SnackbarOrigin) => () => {
		setState({ openSnack: true, ...newState });
		handleCancel();
	};
	const { filterRows, rowModesModel, setRowModesModel } = props;

	const isInEditMode = Object.keys(rowModesModel).some((rowId) => {
		return rowModesModel[rowId].mode === GridRowModes.Edit;
	});
	const handleCancel = () => {
		console.log('handleclick');
		console.log(filterRows);
		const newModel = filterRows.reduce<any>((acc, row: any) => {
			console.log(row.id);
			console.log(acc);
			acc[row.id] = {
				mode: GridRowModes.View,
				ignoreModifications: true,
			};
			return acc;
		}, {});

		setRowModesModel(newModel);
		setApiResponse(false);
		setNotify({
			isOpen: true,
			message: 'Changes are cancelled',
			type: 'error',
		});
	};

	return (
		<div>
			{apiResponse ? (
				<Notification notify={notify} setNotify={setNotify} />
			) : (
				<Notification notify={notify} setNotify={setNotify} />
			)}
			<LoadingButton
				className="buttontype6"
				onClick={handleClickSnack({
					vertical: 'top',
					horizontal: 'right',
				})}
				disabled={!isInEditMode || !filterRows.length}
			>
				<div>
					<div>
						<UndoIcon className="icontype1" />
					</div>
					<div>
						<span>Cancel</span>
					</div>
				</div>
			</LoadingButton>
		</div>
	);
}
