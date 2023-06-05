/*Component Name : ButtonGridDeactivate Test file
 Utility : This component is used to test the ButtonGridDeactivate Component
 Author Ananya Dhar 02-06-2023-------------------------   */
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { ButtonGridDeactivate } from '../../component/siteSettings/manageUsers';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('ButtonGridDeactivate Component', () => {
	const initialState = {};
	const mockStore = configureStore();
	let store;

	afterEach(cleanup);
	const mockFunction = jest.fn();
	store = mockStore(initialState);
	const wrapper = render(
		<Provider store={store}>
			<ButtonGridDeactivate
				handleCancel={mockFunction}
				handleClickSave={mockFunction}
			/>
			,
		</Provider>,
	);

	test.only('ButtonGridDeactivate Component to be loaded', () => {
		expect(wrapper).toBeDefined();
	});
});
