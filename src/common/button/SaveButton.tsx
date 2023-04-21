// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import Modal from '@mui/material/Modal';
import {
	Typography,
	Button,
	Grid,
	MenuItem,
	AlertTitle,
	Alert,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from 'react-router-dom';
import { EditPermissions } from '../../modules/settings/component/adminSettings/adminPermissions/EditPermissions';
import { GridRowId, GridRowModesModel, GridRowModes } from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';

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

export function SaveButton(props: EditToolbarProps) {
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

	const handleAlertOpen = () => {
		return (
			<Alert severity="info" className="w100">
				<AlertTitle>
					{/* <CheckCircleOutlineIcon fontSize="large" /> */}
					<span>
						<Typography variant="h6">
							{/* <CheckIcon fontSize="large" /> */}
							Success
						</Typography>
					</span>
				</AlertTitle>
			</Alert>
		);
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

	const [post, setPost]: any = React.useState({});
	const [name, setName]: any = React.useState({});

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	// const handleClose = () => setOpen(false);

	React.useEffect(() => {
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
				<Box className="edit-permissions-modal">
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
