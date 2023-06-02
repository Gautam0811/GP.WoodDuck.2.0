/*Component Name : ButtonGrid Test file
 Utility : This component is used to test the ButtonGrid Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { ButtonGrid } from '../../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const mockFunction = jest.fn();

	const wrapper = render(
		<ButtonGrid
			handleCancel={mockFunction}
			handleClickSave={mockFunction}
			empty={true}
			isFound={true}
			emailExists={true}
			emailId={''}
		/>,
	);

	test.only('ButtonGrid to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
