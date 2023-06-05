/*Component Name : ViewManageUsers Test file
 Utility : This component is used to test the ViewManageUsers Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { ViewManageUsers } from '../../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('ViewManageUsers Component Page', () => {
	afterEach(cleanup);

	const wrapper = render(<ViewManageUsers />);

	test.only('View Manage Users to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
