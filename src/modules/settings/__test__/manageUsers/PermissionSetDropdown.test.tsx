/*Component Name : PermissionSetDropdown Test file
 Utility : This component is used to test the PermissionSetDropdown Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { PermissionSetDropdown } from '../../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const wrapper = render(
		<PermissionSetDropdown setSelectedPermissionSet={undefined} />,
	);

	test.only('Permission Set Dropdown to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
