/*Component Name :ManageUsers Tabs Test file
 Utility : This component is used to test the ManageUsers Tabs Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { ManageUsersTabs } from '../../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const wrapper = render(<ManageUsersTabs />);

	test.only('Manage Users Tabs to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
