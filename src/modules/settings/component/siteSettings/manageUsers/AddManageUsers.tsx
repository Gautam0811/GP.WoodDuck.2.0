/*Component Name :AddManageUsers 
 Utility : This componenet is used to add new users.
 Author Krishna Choudharyn 04-05-2023-------------------------   */

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
} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState, useEffect } from 'react';
import {
	GridRowsProp,
	GridRowModesModel,
	GridRowModes,
} from '@mui/x-data-grid';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import {
	UsersData,
	permissionSets,
} from '../../../../settings/services/AddUserData';
import '../../../../../styles/StyleMain.css';
import { Notification } from '../../../../../common/Alert/Notification';

interface AddProps {
	rows: any;
	setRows: (newRows: (oldRows: GridRowsProp) => any) => void;
	setRowModesModel: (
		newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
	) => void;
	isActive: boolean;
}

export interface State extends SnackbarOrigin {
	openSnack: boolean;
}

interface CheckBoxOptions {
	label: string;
	value: string;
}

const options: CheckBoxOptions[] = [
	{ label: 'OSB', value: 'OSB' },
	{ label: 'PLY', value: 'PLY' },
];

export interface State extends SnackbarOrigin {
	openSnack: boolean;
}

export function AddManageUsers(props: AddProps) {
	const [state, setState] = useState<State>({
		openSnack: false,
		vertical: 'top',
		horizontal: 'right',
	});

	const handleClickSnack = (newState: SnackbarOrigin) => () => {
		setState({ openSnack: true, ...newState });
		handleClickSave();
	};
	const { rows, setRows, setRowModesModel, isActive } = props;
	const [user, setUser] = useState(UsersData);
	const [notify, setNotify] = useState({
		isOpen: false,
		message: '',
		type: '',
	});

	const [apiResponse, setApiResponse] = useState(false);

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleCancel = () => {
		setOpen(false);
		setApiResponse(false);
		setNotify({
			isOpen: true,
			message:
				'User added unsuccessful.  Added user(s) have not been saved, please contact IT Admin.',
			type: 'error',
		});
	};
	const [value, setValue] = useState('');

	const onChange = (event: any) => {
		console.log('onchange', emailId);
		setValue(event.target.value);
	};

	const onSearch = (emailId: string) => {
		console.log(emailId);
		setValue(emailId);
		console.log('search', emailId);
	};

	const [selectedPermissionSet, setSelectedPermissionSet] = useState(
		permissionSets[0].permission,
	);

	const [name, setName]: any = useState({});
	const [businessLine, setBusinessLine] = useState('');
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	//if value is in selectedOptions, it is removed. Otherwise its added
	const handleCheckBoxChange = (value: string) => {
		if (selectedOptions.includes(value)) {
			setSelectedOptions(
				selectedOptions.filter((option) => option !== value),
			);
		} else {
			setSelectedOptions([...selectedOptions, value]);
		}
	};

	useEffect(() => {
		function fetchName() {
			let nameFetch = JSON.parse(localStorage.getItem('status') || '{}');
			setName(nameFetch);
			setBusinessLine(nameFetch.subdivision);
		}
		fetchName();
	}, []);

	const handleClickSave = () => {
		let id: number = rows[rows.length - 1].id + 1;
		var data = UsersData.filter(({ email }) => email === emailId);
		const firstName = data[0].first_name;
		const lastName = data[0].last_name;
		const temporaryPermission = data[0].temporaryPermission;
		const temporaryPermissionDate = data[0].temporaryPermissionDate;

		console.log(data);
		setRows((oldRows) => [
			...oldRows,
			{
				id,
				businessLine: businessLine,
				subDivision: selectedOptions,
				firstName: firstName,
				lastName: lastName,
				permissionSet: selectedPermissionSet,
				email: emailId,
				activeUser: true,
				temporaryPermission: temporaryPermission,
				temporaryPermissionDate: temporaryPermissionDate,
			},
		]);
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.View, fieldToFocus: 'businessLine' },
		}));
		handleClose();
		setApiResponse(true);
		setNotify({
			isOpen: true,
			message: 'User added Successful, User has been successfully added!',
			type: 'success',
		});
	};

	let empty;

	if (selectedOptions.length < 1) {
		empty = true;
	} else {
		empty = false;
	}

	console.log('Empty', empty);

	const emailId = value.toLowerCase();

	// check if array contains the entered emailId
	const isFound = user.some((element: any) => {
		if (element.email === emailId) {
			return true;
		}
		return false;
	});

	if (isFound) {
		console.log('Email Id exists');
	} else {
		console.log('EmailId does not exist');
	}

	const [emailExists, setEmailExists] = useState(false);

	// check if entered email is already present in the datagrid list
	const isEmailExists = (emailId: any) => {
		for (const row of rows) {
			if (row.email === emailId) {
				setEmailExists(true);
			} else {
				setEmailExists(false);
			}
		}
	};

	console.log('emailecistts', emailExists);

	return (
		<>
			<LoadingButton
				className="fs-10"
				disabled={!isActive}
				onClick={handleOpen}
			>
				<div>
					<div>
						<AddOutlinedIcon className="icontype1" />
					</div>
					<div>
						<span>ADD</span>
					</div>
				</div>
			</LoadingButton>
			{apiResponse ? (
				<Notification notify={notify} setNotify={setNotify} />
			) : (
				<Notification notify={notify} setNotify={setNotify} />
			)}
			<Modal open={open}>
				<Box className="modal-add-class">
					<Grid className="p-8 pr-32 ">
						<Typography className="fs-24 text-align-center col-005fa8">
							Add User
						</Typography>
						<Grid>
							{emailId ? null : (
								<div className="col-red">Required *</div>
							)}
							{isFound || !emailId ? null : (
								<div className="col-red">
									User does not exist
								</div>
							)}
							{emailExists ? (
								<div className="col-red">
									User already entered in the list
								</div>
							) : null}
							<Grid className="flexrow">
								<Grid>Email:</Grid>
								<Grid>
									<input
										onChange={onChange}
										type="text"
										value={emailId}
										required
									></input>
									{/* ToDo: Waiting for backend API */}
									<div onChange={onChange} className="z-5">
										{UsersData.filter((item) => {
											const email =
												item.email.toLowerCase();
											return (
												emailId &&
												email.startsWith(emailId) &&
												email !== emailId
											);
										})
											.slice(0, 10)
											.map((item) => (
												<div
													onClick={() => {
														onSearch(item.email);
														isEmailExists(
															item.email,
														);
													}}
													className="email-drop-down-container"
													key={item.id}
												>
													<ul>
														<li>
															{item.first_name}(
															{item.role})
														</li>
													</ul>
												</div>
											))}
									</div>
								</Grid>
								{/* Put check email null and email present in array wala logic */}
								<Grid>
									<button onClick={() => onSearch(emailId)}>
										Search
									</button>
								</Grid>
							</Grid>
							<br />
							{name.subdivision === 'SP' ? (
								<Grid className="flexrow">
									<Grid>Permission Set: </Grid>
									<select
										onChange={(e) =>
											setSelectedPermissionSet(
												e.target.value,
											)
										}
									>
										{permissionSets
											.filter(
												(a) => a.subdivision === 'SP',
											)
											.map((item) => (
												<option
													key={item.id}
													value={item.permission}
												>
													{item.permission}
												</option>
											))}
									</select>
								</Grid>
							) : (
								<Grid className="flexrow">
									<Grid>Permission Set: </Grid>
									<select
										onChange={(e) =>
											setSelectedPermissionSet(
												e.target.value,
											)
										}
									>
										{permissionSets
											.filter(
												(a) => a.subdivision === 'SL',
											)
											.map((item) => (
												<option
													key={item.id}
													value={item.permission}
												>
													{item.permission}
												</option>
											))}
									</select>
								</Grid>
							)}
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
										{options.map((option) => (
											<div key={option.value}>
												<label>
													<input
														type="checkbox"
														value={option.value}
														checked={selectedOptions.includes(
															option.value,
														)}
														onChange={(e) =>
															handleCheckBoxChange(
																e.target.value,
															)
														}
													/>
													{option.label}
												</label>
											</div>
										))}
									</Grid>
								</Grid>
							)}
						</Grid>
					</Grid>
					<Grid className="flexrow pt-16 justify-space-evenly">
						{name.subdivision === 'SP' ? (
							<Button
								disabled={
									empty || !isFound || emailExists || !emailId
								}
								onClick={handleClickSnack({
									vertical: 'top',
									horizontal: 'right',
								})}
								variant="contained"
							>
								Add
							</Button>
						) : (
							<Button
								disabled={!isFound || emailExists || !emailId}
								onClick={handleClickSnack({
									vertical: 'top',
									horizontal: 'right',
								})}
								variant="contained"
							>
								Add
							</Button>
						)}
						<Button
							onClick={handleCancel}
							className="bg-grey col-white"
						>
							Cancel
						</Button>
					</Grid>
				</Box>
			</Modal>
		</>
	);
}
