/*Component Name :AddManageUsers 
 Utility : This componenet is used to add new users.
 Author Krishna Choudharyn 04-05-2023-------------------------   */

import LoadingButton from '@mui/lab/LoadingButton';
import { Grid, Modal, Box, Button, Typography } from '@mui/material';
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
import Division from './Division';
import { AddButton } from '../../../../../common/button';
import ButtonGrid from './ButtonGrid';
import EmailInput from './EmailInput';
import PermissionSetDropdown from './PermissionSetDropdown';
import SubDivisionCheckBox from './SubDivisionCheckBox';
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
		setSelectedOptions([]);
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
	const handleOnChange = (event: any) => {
		setValue(event.target.value);
	};

	const handleOnSearch = (emailId: string) => {
		setValue(emailId);
	};

	const [selectedPermissionSet, setSelectedPermissionSet] = useState(
		permissionSets[0].permission,
	);
	const [name, setName]: any = useState({});
	const [division, setDivision] = useState('');
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
			setDivision(nameFetch.subdivision);
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
		setRows((oldRows) => [
			...oldRows,
			{
				id,
				division: division,
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
			[id]: { mode: GridRowModes.View, fieldToFocus: 'division' },
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

	const emailId = value.toLowerCase();
	// check if array contains the entered emailId
	const isFound = user.some((element: any) => {
		if (element.email === emailId) {
			return true;
		}
		return false;
	});
	const [emailExists, setEmailExists] = useState(false);

	// check if entered email is already present in the datagrid list
	const handleIsEmailExists = (emailId: any) => {
		for (const row of rows) {
			if (row.email === emailId) {
				setEmailExists(true);
			} else {
				setEmailExists(false);
			}
		}
	};

	return (
		<>
			<AddButton onClick={handleOpen} />
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
							<EmailInput
								emailId={emailId}
								handleOnSearch={handleOnSearch}
								handleIsEmailExists={handleIsEmailExists}
								handleOnChange={handleOnChange}
							/>
							<br />
							<PermissionSetDropdown
								setSelectedPermissionSet={
									setSelectedPermissionSet
								}
							/>
							<br />
							<Division />
							<br />
							<SubDivisionCheckBox
								selectedOptions={selectedOptions}
								handleCheckBoxChange={handleCheckBoxChange}
							/>
						</Grid>
					</Grid>
					<ButtonGrid
						emailExists={emailExists}
						emailId={emailId}
						empty={empty}
						isFound={isFound}
						handleClickSnack={handleClickSnack}
						handleCancel={handleCancel}
					/>
				</Box>
			</Modal>
		</>
	);
}
