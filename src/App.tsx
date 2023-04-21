import * as React from 'react';
import './App.css';
import { Home } from './globalPages/home/index';
import { ClaimContextProvider } from './context/claim/Claims';

function App() {
	return (
		<div>
			<ClaimContextProvider>
				<Home />
			</ClaimContextProvider>
		</div>
	);
}

export default App;
