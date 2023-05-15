// ManageUsersTabs.test.tsx
// Component Utility : The Component is used to test the ManageUsers Component
// Author Ananya Dhar on 1-3-2023
// -------------------------
import { cleanup, render, screen } from '@testing-library/react';

import { ManageUsersTabs } from '../component/siteSettings/manageUsers';

afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
});

describe('Clp Page', () => {
	afterEach(cleanup);
	// const MyContext = createContext(null);
	// const context = useContext(MyContext);

	const wrapper = render(<ManageUsersTabs />);
	// const wrapper = render(<ManageUsersTabs />, { wrapper: BrowserRouter });
	// const welcome = <h1>Display Active Users Account Details</h1>;

	// test('renders the landing page', () => {
	// 	render(<App />);
	// 	expect(screen.getByRole('heading')).toHaveTextContent(
	// 		/Doggy Directory/,
	// 	);
	// 	expect(screen.getByRole('combobox')).toHaveDisplayValue(
	// 		'Select a breed',
	// 	);
	// 	expect(screen.getByRole('button', { name: 'Search' })).toBeDisabled();
	// 	expect(screen.getByRole('img')).toBeInTheDocument();
	// });

	test.only('ManageUsersTabs to be loaded', () => {
		expect(wrapper).toBeDefined();
		// expect(wrapper.contains(welcome)).toEqual(true);
		// expect(wrapper).toBeInTheDocument();
	});
});
