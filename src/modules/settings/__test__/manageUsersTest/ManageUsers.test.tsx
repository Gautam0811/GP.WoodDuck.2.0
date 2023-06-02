/*Component Name : ManageUsers Test file
 Utility : This component is used to test the Manage Users Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { ManageUsers } from '../../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const wrapper = render(<ManageUsers />);

	test.only('Manage Users to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
