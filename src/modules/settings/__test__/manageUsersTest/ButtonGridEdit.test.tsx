/*Component Name : ButtonGridEdit Test file
 Utility : This component is used to test the ButtonGridEdit Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { ButtonGridEdit } from '../../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const mockFunction = jest.fn();

	const wrapper = render(
		<ButtonGridEdit
			handleCancel={mockFunction}
			handleClickSave={mockFunction}
		/>,
	);

	test.only('ButtonGridEdit to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
