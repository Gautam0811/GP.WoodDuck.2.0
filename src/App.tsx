import "./App.css";
import * as React from 'react';
import MainApp from "./Main";
import Context from "./context/State";

function App() {
  return (
    <div>
      <Context>
        <MainApp />
      </Context>
    </div>
  );
}

export default App;