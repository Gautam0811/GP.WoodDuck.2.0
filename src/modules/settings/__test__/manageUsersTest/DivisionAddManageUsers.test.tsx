/*Component Name :DivisionAddManageUsers Test file
 Utility : This component is used to test the DivisionAddManageUsers Component
 Author Ananya Dhar 02-06-2023-------------------------   */
 
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { DivisionAddManageUsers } from '../../component/siteSettings/manageUsers';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('DivisionAddManageUsers component', () => {
	const initialState = {};
	const mockStore = configureStore();
	let store;

	afterEach(cleanup);
	store = mockStore(initialState);
	const wrapper = render(
		<Provider store={store}>
			<DivisionAddManageUsers />
		</Provider>,
	);

	test.only('DivisionAddManageUsers Component to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
