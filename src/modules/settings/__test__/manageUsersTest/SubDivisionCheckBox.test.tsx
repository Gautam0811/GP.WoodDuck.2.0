/*Component Name : SubDivisionCheckBox Test file
 Utility : This component is used to test the SubDivisionCheckBox Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { SubDivisionCheckBox } from '../../component/siteSettings/manageUsers';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('SubDivisionCheckBox Component', () => {
	const initialState = {};
	const mockStore = configureStore();
	let store;

	afterEach(cleanup);
	store = mockStore(initialState);
	const wrapper = render(
		<Provider store={store}>
			<SubDivisionCheckBox
				selectedOptions={undefined}
				handleCheckBoxChange={undefined}
			/>
			,
		</Provider>,
	);

	test.only('SubDivisionCheckBox Component to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
