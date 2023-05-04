// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import Modal from '@mui/material/Modal';
import { Typography, Button, Grid } from '@mui/material';
import { GridRowId, GridRowModesModel, GridRowModes } from '@mui/x-data-grid';

// interface SaveButtonProps {
//   onClick: () => void;
// }

interface SelectedRowParams {
	id: GridRowId;
}

interface EditToolbarProps {
	setSelectedRowParams: any;
	selectedRowParams: SelectedRowParams;
	rowModesModel: GridRowModesModel;
	setRowModesModel: (value: GridRowModesModel) => void;
	rowMode: 'view' | 'edit';
}

export function SaveButton(props: EditToolbarProps) {
	const {
		setSelectedRowParams,
		selectedRowParams,
		rowMode,
		rowModesModel,
		setRowModesModel,
	} = props;

	const handleCancel = () => {
		if (selectedRowParams.id === 0 || selectedRowParams.id === 1) {
			return;
		}
		const { id } = selectedRowParams;
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.View, ignoreModifications: true },
		});
		setSelectedRowParams({ id: 0 });
	};

	const handleSaveOrEdit = () => {
		if (selectedRowParams.id === 0 || selectedRowParams.id === 1) {
			return;
		}
		const { id } = selectedRowParams;
		if (rowMode === 'edit') {
			setRowModesModel({
				...rowModesModel,
				[id]: { mode: GridRowModes.View },
			});
		} else {
			setRowModesModel({
				...rowModesModel,
				[id]: { mode: GridRowModes.Edit },
			});
		}
		setSelectedRowParams({ id: 0 });
		// if (rowMode === "view"){
		//   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
		// }
	};

	const [name, setName]: any = useState({});

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	// const handleClose = () => setOpen(false);

	useEffect(() => {
		function fetchName() {
			let nameFetch = JSON.parse(localStorage.getItem('status') || '{}');
			setName(nameFetch);
		}
		fetchName();
	}, []);

	return (
		<Box>
			<LoadingButton
				onClick={handleOpen}
				disabled={
					selectedRowParams.id === 0 || selectedRowParams.id === 1
				}
				className="fs-10 col-005fa8"
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
			<Modal open={open}>
				<Box className="modal-class">
					<Grid className="p-8 pr-32">
						<Typography className="fs-24 text-align-center col-005fa8">
							Save Permissions Set Edits?
						</Typography>
						<p>
							Are you sure you want to save the permission sets?
						</p>
					</Grid>
					<Grid className="flexrow pt-16 justify-space-evenly">
						<Button onClick={handleSaveOrEdit} variant="contained">
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
		</Box>
	);
}
