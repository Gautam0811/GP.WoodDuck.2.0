/*Component Name : EditManageUsersModal Test file
 Utility : This component is used to test the EditManageUsersModal Component
 Author Ananya Dhar 02-06-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { EditManageUsersModal } from '../../component/siteSettings/manageUsers';
import { GridRowsProp } from '@mui/x-data-grid';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('EditManageUsersModal Component', () => {
	const initialState = {};
	const mockFunction = jest.fn();
	const mockStore = configureStore();
	let store;

	afterEach(cleanup);
	store = mockStore(initialState);
	const wrapper = render(
		<Provider store={store}>
			<EditManageUsersModal
				open={true}
				setOpen={undefined}
				fullNames={[]}
				selectedOptions={undefined}
				selectedPermissionSet={undefined}
				handleCheckBoxChange={mockFunction}
				setSelectedPermissionSet={undefined}
				setRows={function (
					newRows: (oldRows: GridRowsProp) => any,
				): void {
					throw new Error('Function not implemented');
				}}
				filterRows={[]}
			/>
			,
		</Provider>,
	);

	test.only('EditManageUsersModal Component to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
