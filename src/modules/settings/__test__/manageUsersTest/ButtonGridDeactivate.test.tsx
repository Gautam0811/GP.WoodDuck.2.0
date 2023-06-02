/*Component Name : ButtonGridDeactivate Test file
 Utility : This component is used to test the ButtonGridDeactivate Component
 Author Ananya Dhar 02-06-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { ButtonGridDeactivate } from '../../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const mockFunction = jest.fn();

	const wrapper = render(
		<ButtonGridDeactivate
			handleCancel={mockFunction}
			handleClickSave={mockFunction}
		/>,
	);

	test.only('ButtonGridDeactivate to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
