/*Component Name :ActivateManageUsers 
 Utility : This component is used to Activate the users
 Author Ananya Dhar 04-05-2023-------------------------   */

import { Box } from '@mui/material';
import { useState } from 'react';
import { GridRowsProp } from '@mui/x-data-grid';
import { ActivateButton } from '../../../../../common/button';
import { ActivateManageUsersModal } from './index';

interface ActivateManageUsersProps {
	filterRows: GridRowsProp;
	setRows: (newRows: (oldRows: GridRowsProp) => any) => void;
	rows: any;
}

export function ActivateManageUsers(props: ActivateManageUsersProps) {
	const { filterRows, setRows, rows } = props;

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
		console.log('FilterRows===>', filterRows);
	};

	return (
		<>
			<Box>
				<ActivateButton onClick={handleOpen} filterRows={filterRows} />
			</Box>
			<ActivateManageUsersModal
				open={open}
				setOpen={setOpen}
				setRows={setRows}
				filterRows={filterRows}
				rows={rows}
			/>
		</>
	);
}
