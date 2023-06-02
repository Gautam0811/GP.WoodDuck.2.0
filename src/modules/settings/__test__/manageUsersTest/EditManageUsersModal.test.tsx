/*Component Name : EditManageUsersModal Test file
 Utility : This component is used to test the EditManageUsersModal Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { EditManageUsersModal } from '../../component/siteSettings/manageUsers';
import { GridRowsProp } from '@mui/x-data-grid';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);
	const mockFunction = jest.fn();

	const wrapper = render(
		<EditManageUsersModal
			open={true}
			setOpen={undefined}
			fullNames={[]}
			selectedOptions={undefined}
			selectedPermissionSet={undefined}
			handleCheckBoxChange={mockFunction}
			setSelectedPermissionSet={undefined}
			setRows={function (newRows: (oldRows: GridRowsProp) => any): void {
				throw new Error('Function not implemented');
			}}
			filterRows={[]}
		/>,
	);

	//   expect(mockFunction).toHaveBeenCalledTimes(1);

	test.only('Edit Manage Users Modal to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
