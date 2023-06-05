/*Component Name :ManageUsers Tabs Test file
 Utility : This component is used to test the ManageUsers Tabs Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { ManageUsersTabs } from '../../component/siteSettings/manageUsers';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Manage Users Tabs Component', () => {
	const initialState = {};
	const mockStore = configureStore();
	let store;

	afterEach(cleanup);
	store = mockStore(initialState);
	const wrapper = render(
		<Provider store={store}>
			<BrowserRouter basename="/">
				<ManageUsersTabs />
			</BrowserRouter>
		</Provider>,
	);

	test.only('Manage Users Tabs to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
