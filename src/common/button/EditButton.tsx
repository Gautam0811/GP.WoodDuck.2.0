// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography, Button, Grid, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from 'react-router-dom';

export function EditButton(props: any) {
	const [post, setPost]: any = useState({});
	const [name, setName]: any = useState({});

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [user, setUser] = useState('Select User');

	const handleChange = (event: SelectChangeEvent) => {
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
			<LoadingButton onClick={handleOpen} className="fs-10 col-005fa8">
				<div>
					<div>
						<EditIcon className="icontype1" />
					</div>
					<div>
						<span>Edit Permissions</span>
					</div>
				</div>
			</LoadingButton>
			<Modal open={open} onClose={handleClose}>
				<Box className="modal-class">
					<Grid className="p-8 pr-32">
						<Typography className="fs-24 text-align-center col-005fa8">
							Edit Permission Set
						</Typography>
						<Grid className="pt-8 flex-row-center">
							<Typography>User(s) Selected:</Typography>
							<Select onChange={handleChange} value={user}>
								<MenuItem value={10}>Selected User 1</MenuItem>
								<MenuItem value={20}>Selected User 2</MenuItem>
								<MenuItem value={30}>Selected User 3</MenuItem>
							</Select>
						</Grid>
						<Grid className="pt-8 flex-row-center">
							<Typography>Permissions Set:</Typography>
							<Select onChange={handleChange} value={user}>
								<MenuItem value={10}>Admin</MenuItem>
								<MenuItem value={20}>Advisor</MenuItem>
								<MenuItem value={30}>Sales Manager</MenuItem>
							</Select>
						</Grid>
					</Grid>
					<Grid className="flexrow pt-16 justify-space-evenly">
						<Button variant="contained">Add</Button>
						<Link to="/manageUsers" className="text-dec-none">
							<Button className="bg-grey col-white">
								Cancel
							</Button>
						</Link>
					</Grid>
				</Box>
			</Modal>
		</Box>
	);
}
