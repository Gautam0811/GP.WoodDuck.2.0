/*Component Name :Division Test file
 Utility : This component is used to test the Division Component
 Author Ananya Dhar 02-06-2023-------------------------   */
 
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { Division } from '../../component/siteSettings/manageUsers';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Division component', () => {
	const initialState = {};
	const mockStore = configureStore();
	let store;

	afterEach(cleanup);
	store = mockStore(initialState);
	const wrapper = render(
		<Provider store={store}>
			<Division />
		</Provider>,
	);

	test.only('Division Component to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
