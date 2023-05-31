/*Component Name :EditManageUsers 
 Utility : This component is used to edit users permission set.
 Author Ananya Dhar 04-05-2023-------------------------   */

import Box from '@mui/material/Box';
import { useState } from 'react';
import { GridRowsProp } from '@mui/x-data-grid';
import { EditButton } from '../../../../../common/button';
import { useSelector } from 'react-redux';
import { permissionSets } from '../../../../settings/services/AddUserData';
import { EditManageUsersModal } from './EditManageUsersModal';

interface EditToolbarProps {
	filterRows: GridRowsProp;
	setRows: (newRows: (oldRows: GridRowsProp) => any) => void;
}

export function EditManageUsers(props: EditToolbarProps) {
	const { filterRows, setRows } = props;
	const division = useSelector((state: any) => state.divisionInfo);

	const [selectedPermissionSet, setSelectedPermissionSet] = useState('');

	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	//if value is in selectedOptions, it is removed. Otherwise its added
	const handleCheckBoxChangeSubDivision = (value: string) => {
		if (selectedOptions.includes(value)) {
			setSelectedOptions(
				selectedOptions.filter((option) => option !== value),
			);
		} else {
			setSelectedOptions([...selectedOptions, value]);
		}
	};

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

	const [open, setOpen] = useState(false);
	const openEditModal = () => {
		setOpen(true);
		setSelectedOptions([]);
		setSelectedPermissionSet(
			permissionSets.filter(
				(permission) => permission.division === division,
			)[0].permission,
		);
	};

	return (
		<>
			<Box>
				<EditButton onClick={openEditModal} filterRows={filterRows} />
			</Box>
			<EditManageUsersModal
				open={open}
				setOpen={setOpen}
				fullNames={fullNames}
				filterRows={filterRows}
				setRows={setRows}
				selectedOptions={selectedOptions}
				selectedPermissionSet={selectedPermissionSet}
				handleCheckBoxChange={handleCheckBoxChangeSubDivision}
				setSelectedPermissionSet={setSelectedPermissionSet}
			/>
		</>
	);
}
