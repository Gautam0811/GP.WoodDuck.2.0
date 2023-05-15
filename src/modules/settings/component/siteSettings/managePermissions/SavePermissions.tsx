/*Component Name :Notification 
 Utility : This componenet is used to save the event for permission set and control.
 Author Gautam Malhotra 06-05-2023-------------------------   */

import { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import {
	GridRowModesModel,
	GridRowModes,
	GridRowsProp,
} from '@mui/x-data-grid';
import { Notification } from '../../../../../common/Alert/Notification';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import Modal from '@mui/material/Modal';

interface SaveProps {
	filterRows: GridRowsProp;
	rowModesModel: GridRowModesModel;
	setRowModesModel: (
		newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
	) => void;
	add: any;
	permissionRows: any;
	setPermissionRows: (
		newRows: (oldRows: GridRowsProp) => GridRowsProp,
	) => void;
}
export interface State extends SnackbarOrigin {
	openSnack: boolean;
}
export function SavePermissions(props: SaveProps) {
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
		handleSave();
		setOpen(false);
	};
	const {
		filterRows,
		rowModesModel,
		setRowModesModel,
		add,
		permissionRows,
		setPermissionRows,
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
		if (add) {
			handleDelete();
		}
		setApiResponse(false);
		setOpen(false);
		setNotify({
			isOpen: true,
			message: 'Permission sets not updated!',
			type: 'error',
		});
	};
	const handleSave = () => {
		console.log('handleclick');
		console.log(filterRows);
		const newModel = filterRows.reduce<any>((acc, row: any) => {
			console.log(row.id);
			console.log(acc);
			acc[row.id] = { mode: GridRowModes.View };
			return acc;
		}, {});

		setRowModesModel(newModel);
		setApiResponse(true);

		setNotify({
			isOpen: true,
			message: 'Permission sets updated, new values added!',
			type: 'success',
		});
	};
	const handleDelete = () => {
		const difference = setPermissionRows(
			permissionRows.filter((row: any) => !filterRows.includes(row)),
		);
		console.log(difference);
		setApiResponse(true);
		setOpen(false);
		setNotify({
			isOpen: true,
			message: 'Permission set not Added!',
			type: 'error',
		});
	};

	return (
		<div>
			<Modal open={open}>
				<Box className="modal-class">
					{add ? (
						<Grid className="p-8 pr-32">
							<Typography className="fs-24 text-align-center col-005fa8">
								Save Permissions Sets?
							</Typography>
							<p>
								Are you sure you want to Add new permission set?
							</p>
						</Grid>
					) : (
						<Grid className="p-8 pr-32">
							<Typography className="fs-24 text-align-center col-005fa8">
								Save Permissions Sets?
							</Typography>
							<p>
								Are you sure you want to Edit the permission
								sets?
							</p>
						</Grid>
					)}
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
				disabled={!isInEditMode}
			>
				<div>
					<div>
						<SaveIcon className="icontype1" />
					</div>
					<div>
						<span>Save</span>
					</div>
				</div>
			</LoadingButton>
		</div>
	);
}
