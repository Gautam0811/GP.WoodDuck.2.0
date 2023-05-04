import LoadingButton from '@mui/lab/LoadingButton';
import {
	Grid,
	Modal,
	Box,
	Button,
	Typography,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Autocomplete,
	TextField,
} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState, useEffect } from 'react';
import {
	GridRowsProp,
	GridRowModesModel,
	GridRowModes,
} from '@mui/x-data-grid';

import { UsersData, permissionSets } from '../../../services/ManageUserData';
import '../../../../../styles/StyleMain.css';

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
	const handleClose = () => setOpen(false);

	const [value, setValue] = useState('');

	const onChange = (event: any) => {
		setValue(event.target.value);
	};

	console.log(UsersData.filter((user) => user.email.includes('em')));

	const onSearch = (searchTerm: any) => {
		setValue(searchTerm);
		console.log('search', searchTerm);
	};

	const [selectedPermissionSet, setSelectedPermissionSet] = useState(
		permissionSets[0].permission,
	);

	const handleChangePermissionSet = (event: any) => {
		setSelectedPermissionSet(event.target.permission);
	};

	const [name, setName]: any = useState({});
	const [subdivision, setSubdivision] = useState('');

	useEffect(() => {
		function fetchName() {
			let nameFetch = JSON.parse(localStorage.getItem('status') || '{}');
			setName(nameFetch);
			setSubdivision(nameFetch.subdivision);
			//on first time load
			// window.localStorage.setItem(
			// 	'subdivisionValue',
			// 	nameFetch.subdivision,
			// );
		}
		fetchName();
	}, [subdivision, name]);

	const searchTerm = value.toLowerCase();

	console.log(subdivision);
	console.log('Permisionssss', permissionSets[1].permission);

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
				<Box className="modal-class">
					<Grid className="p-8 pr-32 ">
						<Typography className="fs-24 text-align-center col-005fa8">
							Add User
						</Typography>
						<Grid>
							<Grid className="flexrow">
								<Grid>Email:</Grid>
								<Grid>
									<input
										onChange={onChange}
										type="email"
									></input>
									{/* {search
										.filter((user) =>
											user.email
												.toLowerCase()
												.includes(value),
										)
										.map((user) => (
											<li key={user.id}>{user.email}</li>
										))} */}
									<div className="z-5">
										{UsersData.filter((item) => {
											const email =
												item.email.toLowerCase();

											return (
												searchTerm &&
												email.startsWith(searchTerm) &&
												email !== searchTerm
											);
										})
											.slice(0, 10)
											.map((item) => (
												<div
													onClick={() =>
														onSearch(item.email)
													}
													key={item.id}
												>
													{item.first_name}(
													{item.role})
												</div>
											))}
									</div>
									<Autocomplete
										id="free-solo-demo"
										freeSolo
										options={UsersData.map(
											(option: any) => option.email,
										)}
										renderInput={(params) => (
											<TextField {...params} />
										)}
									/>
								</Grid>
								<Grid>
									<button onClick={() => onSearch(value)}>
										Search
									</button>
								</Grid>
							</Grid>
							<br />
							<Grid className="flexrow">
								<Grid>Permission Set:</Grid>
								<select onChange={handleChangePermissionSet}>
									{permissionSets.map((item: any) => (
										<option
											key={item.id}
											value={item.permission}
										>
											{item.permission}
										</option>
									))}
								</select>
							</Grid>
							<br />
							<Grid className="flexrow">
								<Typography className="pr-8">
									Division:
								</Typography>
								<Grid className="border-grey-1">
									{name.subdivision === 'SL' ? (
										<FormGroup>
											<FormControlLabel
												control={
													<Checkbox defaultChecked />
												}
												label="SL"
												disabled
											/>
										</FormGroup>
									) : (
										<FormGroup>
											<FormControlLabel
												control={
													<Checkbox defaultChecked />
												}
												label="SP"
												disabled
											/>
										</FormGroup>
									)}
								</Grid>
							</Grid>
							<br />
							{name.subdivision === 'SP' && (
								<Grid className="flexrow">
									<Typography className="pr-8">
										Sub Division:
									</Typography>
									<Grid>
										<FormGroup>
											<FormControlLabel
												control={<Checkbox />}
												label="OSB"
											/>
										</FormGroup>
										<FormGroup>
											<FormControlLabel
												control={<Checkbox />}
												label="PLY"
											/>
										</FormGroup>
									</Grid>
								</Grid>
							)}
						</Grid>
					</Grid>
					<Grid className="flexrow pt-16 justify-space-evenly">
						<Button disabled={!searchTerm} variant="contained">
							Save
						</Button>
						<Button
							// onClick={handleCancel}
							onClick={handleClose}
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
