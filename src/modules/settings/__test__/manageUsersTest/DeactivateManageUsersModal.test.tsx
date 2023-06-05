/*Component Name : DeactivateManageUsersModal Test file
 Utility : This component is used to test the ActivateManageUsersModal Component
 Author Ananya Dhar 02-06-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { DeactivateManageUsersModal } from '../../component/siteSettings/manageUsers';
import { GridRowsProp } from '@mui/x-data-grid';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('DeactivateManageUsersModal Component', () => {
	const initialState = {};
	const mockStore = configureStore();
	let store;

	afterEach(cleanup);
	store = mockStore(initialState);
	const wrapper = render(
		<Provider store={store}>
			<DeactivateManageUsersModal
				open={true}
				setOpen={undefined}
				rows={undefined}
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

	test.only('Deactivate Manage Users Modal Component to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
