import "./App.css";
import WD_App from "./Main";
import WDState from "./context/claim/State";

function App() {
  return (
    <>
<WDState>
    <WD_App/> 
    </WDState>
    </>
  );
}

export default App;

