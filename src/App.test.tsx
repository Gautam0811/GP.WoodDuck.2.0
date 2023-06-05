import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
	const initialState = {};
	const mockStore = configureStore();
	let store;

	it('Renders App', () => {
		store = mockStore(initialState);
		const getByComponent = render(
			<Provider store={store}>
				<App />
			</Provider>,
		);

		expect(getByComponent).toBeDefined();
	});
});
