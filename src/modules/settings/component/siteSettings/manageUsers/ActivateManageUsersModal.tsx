/*Component Name :ActivateManageUsers Modal component 
 Utility : This component is used to display the modal component for Activating users
 Author Ananya Dhar 04-05-2023-------------------------   */

import { Modal, Grid, Box, Typography } from '@mui/material';
import { ButtonGridDeactivate } from './index';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useState } from 'react';
import { Notification } from '../../../../../common/Alert/Notification';
import { GridRowsProp } from '@mui/x-data-grid';
import { EmailsSelected, PermissionSetDropdown } from './index';
import { permissionSets } from '../../../../settings/services/AddUserData';
import { useSelector } from 'react-redux';

interface ActivateManageUsersModalProps {
	open: boolean;
	setOpen: any;
	filterRows: GridRowsProp;
	setRows: (newRows: (oldRows: GridRowsProp) => any) => void;
	rows: any;
}

export function ActivateManageUsersModal(props: ActivateManageUsersModalProps) {
	const { open, setOpen, filterRows, setRows, rows } = props;
	const active = useSelector((state: any) => state.activeInfo);
	const [notifyActivate, setNotifyActivate] = useState({
		isOpen: false,
		message: '',
		message2: '',
		type: '',
	});
	const [apiResponse, setApiResponse] = useState(false);

	const closeActivateModal = () => {
		setOpen(false);
	};

	const [selectedPermissionSet, setSelectedPermissionSet] = useState(
		permissionSets[0].permission,
	);

	let fullNames: string[] = filterRows.map(
		(person) => person.firstName + ' ' + person.lastName,
	);

	if (fullNames.length > 1) {
		fullNames = filterRows.map(
			(person) => person.firstName + ' ' + person.lastName + ',' + ' ',
		);
	} else {
		fullNames = filterRows.map(
			(person) => person.firstName + ' ' + person.lastName + ' ',
		);
	}

	const handleClickSaveActivate = () => {
		let index = 0;
		for (let entry of filterRows) {
			filterRows[index].permissionSet = selectedPermissionSet;
			filterRows[index].activeUser = !active;
			filterRows[index].temporaryPermission = '';
			filterRows[index].temporaryPermissionStartDate = '';
			filterRows[index].temporaryPermissionEndDate = '';
			console.log('entry', entry);
			index = index + 1;
		}
		setRows(rows.filter((row: any) => !filterRows.includes(row)));
		setApiResponse(true);
		setNotifyActivate({
			isOpen: true,
			message: 'Successfully Activated User(s).',
			message2: 'User(s) have been successfully Activated.',
			type: 'success',
		});
		closeActivateModal();
	};

	const cancelActivateModal = () => {
		setApiResponse(true);
		setNotifyActivate({
			isOpen: true,
			message: 'Activation of User(s) Unsuccessful.',
			message2:
				'Activation of the selected user(s) failed. Please contact your IT Admin.',
			type: 'error',
		});
		closeActivateModal();
	};

	return (
		<>
			{apiResponse ? (
				<Notification
					notify={notifyActivate}
					setNotify={setNotifyActivate}
				/>
			) : (
				<Notification
					notify={notifyActivate}
					setNotify={setNotifyActivate}
				/>
			)}
			<Modal open={open}>
				<Box className="modal-add-class">
					<Grid className="p-8 pr-32 ">
						<Grid className="text-align-center">
							{' '}
							<ErrorOutlineIcon />
						</Grid>
						<Typography className="fs-24 text-align-center col-005fa8">
							Activate User(s)?
						</Typography>
						<EmailsSelected fullNames={fullNames} />
						<PermissionSetDropdown
							setSelectedPermissionSet={setSelectedPermissionSet}
						/>
						<Grid>
							<ButtonGridDeactivate
								handleCancel={cancelActivateModal}
								handleClickSave={handleClickSaveActivate}
							/>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</>
	);
}
