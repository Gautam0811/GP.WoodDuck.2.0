/*Component Name :EmailInputAdd Test file
 Utility : This component is used to test the EmailInputAdd Component
 Author Ananya Dhar 15-05-2023-------------------------   */

import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { EmailInputAdd } from '../../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('EmailInputAdd Component', () => {
	afterEach(cleanup);

	const wrapper = render(
		<EmailInputAdd
			emailId={'emcclune0@gp.com'}
			handleOnSearch={function (emailId: string): void {
				throw new Error('Function not implemented');
			}}
			handleIsEmailExists={function (emailId: string): void {
				throw new Error('Function not implemented');
			}}
			handleOnChange={function (event: any): void {
				throw new Error('Function not implemented');
			}}
			handleOnSelect={function (emailId: any): void {
				throw new Error('Function not implemented');
			}}

		/>,
	);

	test.only('EmailInputAdd to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
