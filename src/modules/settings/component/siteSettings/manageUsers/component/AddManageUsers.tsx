import LoadingButton from '@mui/lab/LoadingButton';
import { Grid, Modal, Box, Button, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from 'react';
import {
	GridRowsProp,
	GridRowModesModel,
	GridRowModes,
} from '@mui/x-data-grid';

interface AddProps {
	rows: any;
	setRows: (newRows: (oldRows: GridRowsProp) => any) => void;
	setRowModesModel: (
		newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
	) => void;
}

export function AddManageUsers(props: AddProps) {
	const { rows, setRows, setRowModesModel } = props;

	const handleClick = () => {
		// const id = randomId();
		// setRows((oldRows) => [
		// 	...oldRows,
		// 	{ id, businessLine: '', isNew: true },
		// ]);

		let id: number = rows[rows.length - 1].id + 1;
		setRows((oldRows) => [...oldRows, { id }]);
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit, fieldToFocus: 'businessLine' },
		}));

		console.log(id);
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);

	return (
		<Box>
			<LoadingButton className="buttontype4" onClick={handleOpen}>
				<div>
					<div>
						<AddOutlinedIcon className="icontype1" />
					</div>
					<div>
						<span>ADD</span>
					</div>
				</div>
			</LoadingButton>
			<Modal open={open}>
				<Box className="edit-permissions-modal">
					<Grid className="p-8 pr-32 ">
						<Typography className="fs-24 text-align-center col-005fa8">
							Add User
						</Typography>
						<Grid>
							<Grid className="flexrow">
								<Grid>Email:</Grid>
								<Grid>
									<input type="email"></input>
								</Grid>
								<Grid>
									<button>Search</button>
								</Grid>
							</Grid>
							<br />
							<Grid className="flexrow">
								<Grid>Permission Set:</Grid>
								<select>
									<option>Admin</option>
									<option>Manager</option>
									<option>Advisor</option>
								</select>
							</Grid>
							<br />
							<Grid>
								<Typography>Division:</Typography>
							</Grid>
							<br />
							<Grid>
								<Typography>Sub Division:</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid className="flexrow pt-16 justify-space-evenly">
						<Button variant="contained">Save</Button>
						<Button
							// onClick={handleCancel}
							className="bg-grey col-white"
						>
							Cancel
						</Button>
					</Grid>
				</Box>
			</Modal>
		</Box>
	);
}
