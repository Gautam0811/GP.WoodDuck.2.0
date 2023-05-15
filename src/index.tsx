import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './state/store/Store';
import { Provider } from 'react-redux';
import {
	axiosRequest,
	axiosResponse,
} from './common/interceptors/Interceptors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

axiosRequest();
axiosResponse();
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: 'segoe UI',
			textTransform: 'none',
		},
	},
});

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
);
