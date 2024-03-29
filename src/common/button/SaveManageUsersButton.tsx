// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import Modal from '@mui/material/Modal';
import { Typography, Button, Grid, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { GridRowId, GridRowModesModel, GridRowModes } from '@mui/x-data-grid';

// interface SaveButtonProps {
//   onClick: () => void;
// }

interface SelectedRowParams {
	id: GridRowId;
}

interface EditToolbarProps {
	selectedRowParams?: SelectedRowParams;
	rowModesModel: GridRowModesModel;
	setRowModesModel: (value: GridRowModesModel) => void;
	rowMode: 'view' | 'edit';
}

export function SaveManageUsersButton(props: EditToolbarProps) {
	const { selectedRowParams, rowMode, rowModesModel, setRowModesModel } =
		props;

	const handleCancel = () => {
		if (!selectedRowParams) {
			return;
		}
		const { id } = selectedRowParams;
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.View, ignoreModifications: true },
		});
	};

	const handleSaveOrEdit = () => {
		if (!selectedRowParams) {
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

		// if (rowMode === "view"){
		//   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
		// }
	};

	const [post, setPost]: any = useState({});
	const [name, setName]: any = useState({});

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	// const handleClose = () => setOpen(false);

	const [user, setUser] = useState('Select User');

	const handleUserChange = (event: SelectChangeEvent) => {
		setUser(event.target.value as string);
	};

	const handlePermissionSetChange = (event: SelectChangeEvent) => {
		setUser(event.target.value as string);
	};

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
				disabled={!selectedRowParams}
				className="buttontype6"
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
					<Typography className="fs-24 text-align-center col-005fa8">
						Edit Users
					</Typography>
					<Grid className="pt-8 flex-row-center">
						<Typography>User(s) Selected:</Typography>
						<input value={100} disabled></input>
					</Grid>
					<Grid className="pt-8 flex-row-center">
						<Typography>Permissions Set:</Typography>
						<Select
							onChange={handlePermissionSetChange}
							value={user}
						>
							<MenuItem value={10}>Admin</MenuItem>
							<MenuItem value={20}>Advisor</MenuItem>
							<MenuItem value={30}>Sales Manager</MenuItem>
						</Select>
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
