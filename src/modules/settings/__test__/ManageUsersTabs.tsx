import React from 'react';

import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';

import { ManageUsersTabs } from '../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);

	const wrapper = render(<ManageUsersTabs />);

	test('PLP search Page to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});

