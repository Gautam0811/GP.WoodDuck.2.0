/*Component Name : SubDivisionCheckBox Test file
 Utility : This component is used to test the SubDivisionCheckBox Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { SubDivisionCheckBox } from '../../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const wrapper = render(
		<SubDivisionCheckBox
			selectedOptions={undefined}
			handleCheckBoxChange={undefined}
		/>,
	);

	test.only('SubDivisionCheckBox to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
