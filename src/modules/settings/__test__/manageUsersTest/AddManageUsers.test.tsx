/*Component Name :AddManageUsers Test file
 Utility : This component is used to test the AddManageUSers Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { AddManageUsers } from '../../component/siteSettings/manageUsers';
import { GridRowsProp } from '@mui/x-data-grid';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const wrapper = render(
		<AddManageUsers
			rows={undefined}
			setRows={function (newRows: (oldRows: GridRowsProp) => any): void {
				throw new Error('Function not implemented');
			}}
			filterRows={[]}
		/>,
	);

	test.only('Add Manage Users to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
