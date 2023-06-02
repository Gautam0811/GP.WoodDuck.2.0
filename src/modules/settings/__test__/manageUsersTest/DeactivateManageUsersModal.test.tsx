/*Component Name : DeactivateManageUsersModal Test file
 Utility : This component is used to test the DeactivateManageUsersModal Component
 Author Ananya Dhar 02-06-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { DeactivateManageUsersModal } from '../../component/siteSettings/manageUsers';
import { GridRowsProp } from '@mui/x-data-grid';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const wrapper = render(
		<DeactivateManageUsersModal
			open={true}
			setOpen={undefined}
			rows={undefined}
			setRows={function (newRows: (oldRows: GridRowsProp) => any): void {
				throw new Error('Function not implemented');
			}}
			filterRows={[]}
		/>,
	);

	test.only('DeactivateManageUsersModal to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
