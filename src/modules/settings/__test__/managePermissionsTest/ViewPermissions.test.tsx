/*Component Name :Notification

 Utility : This componenet is used to display the Toast Meesage.

 Author Ananya Dhar 06-03-2023-------------------------   */

import React from 'react';

import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';

import { ViewPermissions } from '../../component/siteSettings/managePermissions';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const wrapper = render(<ViewPermissions />);

	test('PLP search Page to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
