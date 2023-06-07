// EditManageUsersModal
// Component Utility : The Component is created display the modal pop up when clicked on edit button
// Author Ananya Dhar on 18-05-2023
// -------------------------
import { Modal, Box, Grid, Typography } from '@mui/material';
import {
	PermissionSetDropdown,
	SubDivisionCheckBox,
	EmailsSelected,
	ButtonGridEdit,
} from './index';
import { GridRowsProp } from '@mui/x-data-grid';
import { useState } from 'react';
import { Notification } from '../../../../../common/Alert/Notification';
import * as EditManageUsersConstant from '../../../../../common/constant/EditManageUsersConstant';
interface EditManageUsersModalProps {
	open: boolean;
	setOpen: any;
	fullNames: string[];
	filterRows: GridRowsProp;
	setRows: (newRows: (oldRows: GridRowsProp) => any) => void;
	setSelectedPermissionSet: any;
	selectedPermissionSet: any;
	selectedOptions: any;
	handleCheckBoxChange: (value: string) => void;
}

export function EditManageUsersModal(props: EditManageUsersModalProps) {
	const {
		open,
		setOpen,
		fullNames,
		filterRows,
		setRows,
		selectedPermissionSet,
		selectedOptions,
		setSelectedPermissionSet,
		handleCheckBoxChange,
	} = props;

	const closeEditModal = () => {
		setOpen(false);
	};

	const [notify, setNotify] = useState({
		isOpen: false,
		message: '',
		message2: '',
		type: '',
	});
	const [apiResponse, setApiResponse] = useState(false);

	const updatePermissionSubDivision = () => {
		// let id: number = rows[rows.length - 1].id + 1;
		let index = 0;
		for (let entry of filterRows) {
			filterRows[index].permissionSet = selectedPermissionSet;
			if (selectedOptions.length !== 0) {
				filterRows[index].subDivision = selectedOptions;
			}
			index = index + 1;
		}
		setRows((rows) => [...rows]);
		setApiResponse(true);
		setNotify({
			isOpen: true,
			message: String(EditManageUsersConstant.FIRST_SAVE_MESSAGE),
			message2: String(EditManageUsersConstant.SECOND_SAVE_MESSAGE),
			type: 'success',
		});
		closeEditModal();
	};

	const cancelEditModal = () => {
		setApiResponse(false);
		setNotify({
			isOpen: true,
			message: String(EditManageUsersConstant.FIRST_CANCEL_MESSAGE),
			message2: String(EditManageUsersConstant.SECOND_CANCEL_MESSAGE),
			type: 'error',
		});
		closeEditModal();
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
						<Typography className="fs-24 text-align-center col-005fa8">
							Edit User
						</Typography>
						<Grid>
							<EmailsSelected fullNames={fullNames} />
							<PermissionSetDropdown
								setSelectedPermissionSet={
									setSelectedPermissionSet
								}
							/>
							<SubDivisionCheckBox
								selectedOptions={selectedOptions}
								handleCheckBoxChange={handleCheckBoxChange}
							/>
							<ButtonGridEdit
								handleCancel={cancelEditModal}
								handleClickSave={updatePermissionSubDivision}
							/>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</>
	);
}
