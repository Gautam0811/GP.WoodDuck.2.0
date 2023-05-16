/*Component Name : DeletePermissions 
 Utility : This componenet is used delete the permission set.
 Author Gautam Malhotra 06-05-2023-------------------------*/

import { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {
	GridRowModesModel,
	GridRowModes,
	GridRowsProp,
} from '@mui/x-data-grid';
import { Notification } from '../../../../../common/Alert/Notification';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import Modal from '@mui/material/Modal';

interface DeleteProps {
	filterRows: GridRowsProp;
	permissionRows: any;
	setPermissionRows: (
		newRows: (oldRows: GridRowsProp) => GridRowsProp,
	) => void;
	rowModesModel: GridRowModesModel;
	setRowModesModel: (
		newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
	) => void;
}
export interface State extends SnackbarOrigin {
	openSnack: boolean;
}
export function DeletePermissions(props: DeleteProps) {
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
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClickSnack = (newState: SnackbarOrigin) => () => {
		setState({ openSnack: true, ...newState });
		handleDelete();
		setOpen(false);
	};
	const {
		filterRows,
		permissionRows,
		setPermissionRows,
		rowModesModel,
		setRowModesModel,
	} = props;

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
		setOpen(false);
		setNotify({
			isOpen: true,
			message: 'Permission sets not deleted!',
			type: 'error',
		});
	};
	const handleDelete = () => {
		const difference = setPermissionRows(
			permissionRows.filter((row: any) => !filterRows.includes(row)),
		);
		console.log(difference);
		setApiResponse(true);
		setNotify({
			isOpen: true,
			message: 'Permission sets deleted!',
			type: 'success',
		});
	};

	return (
		<div>
			<Modal open={open}>
				<Box className="modal-class">
					<Grid className="p-8 pr-32">
						<Typography className="fs-24 text-align-center col-005fa8">
							Delete Permissions Sets?
						</Typography>
						<p>
							Are you sure you want to delete the permission sets?
						</p>
					</Grid>
					<Grid className="flexrow pt-16 justify-space-evenly">
						<Button
							onClick={handleClickSnack({
								vertical: 'top',
								horizontal: 'right',
							})}
							variant="contained"
						>
							Yes
						</Button>
						<Button
							onClick={handleCancel}
							className="bg-grey col-white"
						>
							No
						</Button>
					</Grid>
				</Box>
			</Modal>
			{apiResponse ? (
				<Notification notify={notify} setNotify={setNotify} />
			) : (
				<Notification notify={notify} setNotify={setNotify} />
			)}
			<LoadingButton
				className="buttontype6"
				onClick={handleOpen}
				disabled={isInEditMode || !filterRows.length}
			>
				<div>
					<div>
						<DeleteIcon className="icontype1" />
					</div>
					<div>
						<span>Delete</span>
					</div>
				</div>
			</LoadingButton>
		</div>
	);
}
