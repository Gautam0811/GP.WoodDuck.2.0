/*Component Name : ButtonGrid Test file
 Utility : This component is used to test the ButtonGrid Component
 Author Ananya Dhar 02-06-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { ButtonGrid } from '../../component/siteSettings/manageUsers';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('ButtonGrid Component', () => {
	const initialState = {};
	const mockStore = configureStore();
	let store;

	afterEach(cleanup);
	const mockFunction = jest.fn();
	store = mockStore(initialState);
	const wrapper = render(
		<Provider store={store}>
			<ButtonGrid
				handleCancel={mockFunction}
				handleClickSave={mockFunction}
				empty={true}
				isFound={true}
				emailExists={true}
				emailId={''}
			/>
			,
		</Provider>,
	);

	test.only('ButtonGrid Component to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
