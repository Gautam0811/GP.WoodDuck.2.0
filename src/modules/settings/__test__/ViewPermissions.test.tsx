import React from 'react';

import '@testing-library/jest-dom';

import { cleanup, render, screen } from '@testing-library/react';

import { ViewPermissions } from '../component/siteSettings/managePermissions';

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
