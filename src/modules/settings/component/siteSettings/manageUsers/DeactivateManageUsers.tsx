/*Component Name :DeactivateManageUsers 
 Utility : This component is used to Deactivate the users
 Author Ananya Dhar 04-05-2023-------------------------   */

import { Box } from '@mui/material';
import { useState } from 'react';
import { GridRowsProp } from '@mui/x-data-grid';
import { DeactivateButton } from '../../../../../common/button';
import { DeactivateManageUsersModal } from './index';

interface DeactivateManageUsersProps {
	filterRows: GridRowsProp;
	setRows: (newRows: (oldRows: GridRowsProp) => any) => void;
	rows: any;
}

export function DeactivateManageUsers(props: DeactivateManageUsersProps) {
	const { filterRows, setRows } = props;

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
	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<>
			<Box>
				<DeactivateButton
					onClick={handleOpen}
					filterRows={filterRows}
				/>
			</Box>
			<DeactivateManageUsersModal
				open={open}
				setOpen={setOpen}
				setRows={setRows}
				filterRows={filterRows}
			/>
		</>
	);
}
