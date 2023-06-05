/*Component Name : PermissionSetDropdown Test file
 Utility : This component is used to test the PermissionSetDropdown Component
 Author Ananya Dhar 15-05-2023-------------------------   */
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { PermissionSetDropdown } from '../../component/siteSettings/manageUsers';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('PermissionSetDropdown Component', () => {
	const initialState = {};
	const mockStore = configureStore();
	let store;

	afterEach(cleanup);
	store = mockStore(initialState);
	const wrapper = render(
		<Provider store={store}>
			<PermissionSetDropdown setSelectedPermissionSet={undefined} />, ,
		</Provider>,
	);

	test.only('PermissionSetDropdown Component to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
