/*Component Name : EmailsSelected Test file
 Utility : This component is used to test the EmailsSelectedComponent
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { EmailsSelected } from '../../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('EmailsSelected Component', () => {
	afterEach(cleanup);

	const wrapper = render(<EmailsSelected fullNames={[]} />);

	test.only('Emails selected component to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
