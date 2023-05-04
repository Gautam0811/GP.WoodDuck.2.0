import './App.css';
import { Home } from './modules/home/index';
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
