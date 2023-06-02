/*Component Name : EditManageUsers Test file
 Utility : This component is used to test the EditManageUsers Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { EditManageUsers } from '../../component/siteSettings/manageUsers';
import { GridRowsProp } from '@mui/x-data-grid';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const wrapper = render(
		<EditManageUsers
			setRows={function (newRows: (oldRows: GridRowsProp) => any): void {
				throw new Error('Function not implemented');
			}}
			filterRows={[]}
		/>,
	);

	test.only('Edit Manage Users to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
