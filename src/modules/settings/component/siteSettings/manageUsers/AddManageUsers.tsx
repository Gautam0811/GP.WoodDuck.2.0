/*Component Name :AddManageUsers 
 Utility : This component is used to add new users.
 Author Ananya Dhar 04-05-2023-------------------------   */
import { Grid, Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { GridRowsProp } from '@mui/x-data-grid';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import {
	UsersData,
	permissionSets,
} from '../../../../settings/services/AddUserData';
import '../../../../../styles/StyleMain.css';
import { AddButton } from '../../../../../common/button';
import {
	Division,
	EmailInput,
	PermissionSetDropdown,
	ButtonGrid,
	SubDivisionCheckBox,
} from './index';
import { Notification } from '../../../../../common/Alert/Notification';
import { useSelector } from 'react-redux';

interface AddProps {
	rows: any;
	setRows: (newRows: (oldRows: GridRowsProp) => any) => void;
	filterRows: GridRowsProp;
}
export interface State extends SnackbarOrigin {
	openSnack: boolean;
}

export function AddManageUsers(props: AddProps) {
	const { rows, setRows, filterRows } = props;
	const division = useSelector((state: any) => state.divisionInfo);
	const [user, setUser] = useState(UsersData);
	const [notify, setNotify] = useState({
		isOpen: false,
		message: '',
		type: '',
	});
	const [apiResponse, setApiResponse] = useState(false);
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setValue('');
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
	const [searchValue, setSearchValue] = useState('');
	const handleOnChange = (event: any) => {
		setValue(event.target.value);
	};
	const handleOnSelect = (emailId: string) => {
		setValue(emailId);
	};
	const handleOnSearch = (emailId: string) => {
		setSearchValue(emailId);
	};
	const [selectedPermissionSet, setSelectedPermissionSet] = useState(
		permissionSets[0].permission,
	);
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
	const handleClickSave = () => {
		let id: number = rows[rows.length - 1].id + 1;
		var data = UsersData.filter(({ email }) => email === emailId);
		const firstName = data[0].first_name;
		const lastName = data[0].last_name;
		const temporaryPermission = data[0].temporaryPermission;
		const temporaryPermissionStartDate =
			data[0].temporaryPermissionStartDate;
		const temporaryPermissionEndDate = data[0].temporaryPermissionEndDate;
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
				temporaryPermissionStartDate: temporaryPermissionStartDate,
				temporaryPermissionEndDate: temporaryPermissionEndDate,
			},
		]);
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
		if (element.email === searchValue) {
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
			<AddButton onClick={handleOpen} filterRows={filterRows} />
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
							{searchValue ? null : (
								<div className="col-red">Required *</div>
							)}
							{isFound || !searchValue ? null : (
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
								handleOnSelect={handleOnSelect}
								handleIsEmailExists={handleIsEmailExists}
								handleOnChange={handleOnChange}
							/>
							<PermissionSetDropdown
								setSelectedPermissionSet={
									setSelectedPermissionSet
								}
							/>
							<Division />
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
						handleClickSave={handleClickSave}
						handleCancel={handleCancel}
					/>
				</Box>
			</Modal>
		</>
	);
}
