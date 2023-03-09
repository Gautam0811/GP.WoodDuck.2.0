import "./App.css";
import WD_App from "./WoodDuck2.0";
import WDState from "./context/claim/WD_State";

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

