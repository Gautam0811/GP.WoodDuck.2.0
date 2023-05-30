/*Component Name :DeactivateManageUsers Modal component 
 Utility : This component is used to display the modal component for deactivating users
 Author Ananya Dhar 04-05-2023-------------------------   */

import { Modal, Grid, Box, Typography } from '@mui/material';
import { ButtonGridDeactivate } from './index';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useState, useEffect } from 'react';
import { Notification } from '../../../../../common/Alert/Notification';
import { GridRowsProp } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

interface DeactivateManageUsersModalProps {
	open: boolean;
	setOpen: any;
	filterRows: GridRowsProp;
	setRows: (newRows: (oldRows: GridRowsProp) => any) => void;
	rows: any;
}

export function DeactivateManageUsersModal(
	props: DeactivateManageUsersModalProps,
) {
	const { open, setOpen, filterRows, setRows, rows } = props;
	const active = useSelector((state: any) => state.activeInfo);

	const [notify, setNotify] = useState({
		isOpen: false,
		message: '',
		message2: '',
		type: '',
	});
	const [apiResponse, setApiResponse] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickSaveDeactivate = () => {
		let index = 0;
		for (let entry of filterRows) {
			filterRows[index].permissionSet = '';
			console.log('active=>', active);
			filterRows[index].activeUser = !active;
			filterRows[index].temporaryPermission = '';
			filterRows[index].temporaryPermissionStartDate = '';
			filterRows[index].temporaryPermissionEndDate = '';
			console.log('index', index);
			console.log('entry', entry);
			index = index + 1;
		}
		setRows(rows.filter((row: any) => !filterRows.includes(row)));
		setApiResponse(true);
		setNotify({
			isOpen: true,
			message: 'Successfully Deactivated User.',
			message2: 'User has been successfully deactivated.',
			type: 'success',
		});
		handleClose();
	};

	const handleCancel = () => {
		setApiResponse(true);
		setNotify({
			isOpen: true,
			message: 'Deactivation of User Unsuccessful.',
			message2:
				'Deactivation of the selected user(s) failed. Please contact your IT Admin.',
			type: 'error',
		});
		handleClose();
	};

	return (
		<>
			{apiResponse ? (
				<Notification notify={notify} setNotify={setNotify} />
			) : (
				<Notification notify={notify} setNotify={setNotify} />
			)}
			<Modal open={open}>
				<Box className="modal-add-class">
					<Grid className="p-8 pr-32 ">
						<Grid className="text-align-center">
							{' '}
							<ErrorOutlineIcon />
						</Grid>
						<Typography className="fs-24 text-align-center col-005fa8">
							Deactivate User(s)?
						</Typography>
						<Typography className="text-align-center">
							Are you sure you want to deactivate the users?
						</Typography>
						<Grid>
							<ButtonGridDeactivate
								handleCancel={handleCancel}
								handleClickSave={handleClickSaveDeactivate}
							/>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</>
	);
}
