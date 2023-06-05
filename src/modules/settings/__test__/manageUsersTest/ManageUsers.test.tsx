/*Component Name : ManageUsers Test file
 Utility : This component is used to test the Manage Users Component
 Author Ananya Dhar 15-05-2023-------------------------   */
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { ManageUsers } from '../../component/siteSettings/manageUsers';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('ManageUsers Component', () => {
	afterEach(cleanup);
	const initialState = {};
	const mockStore = configureStore();
	let store;

	store = mockStore(initialState);

	const wrapper = render(
		<Provider store={store}>
			<BrowserRouter basename="/">
				<ManageUsers />
			</BrowserRouter>
		</Provider>,
	);

	test.only('Manage Users to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
