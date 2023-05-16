/*Component Name :Notification 
 Utility : This componenet is used to display the Toast Meesage.
 Author Ananya Dhar 06-03-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { SavePermissions } from '../../component/siteSettings/managePermissions';
import { GridRowModesModel, GridValidRowModel } from '@mui/x-data-grid/models';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const wrapper = render(
		<SavePermissions
			filterRows={[]}
			rowModesModel={{}}
			setRowModesModel={function (
				newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
			): void {
				throw new Error('Function not implemented.');
			}}
			add={undefined}
			permissionRows={undefined}
			setPermissionRows={function (
				newRows: (
					oldRows: readonly GridValidRowModel[],
				) => readonly GridValidRowModel[],
			): void {
				throw new Error('Function not implemented.');
			}}
		/>,
	);

	test('PLP search Page to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
