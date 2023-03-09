import "./App.css";
import MainApp from "./Main";
import Context from "./context/State";

function App() {
  return (
    <>
    <Context>
    <MainApp/> 
    </Context>
    </>
  );
}

export default App;

