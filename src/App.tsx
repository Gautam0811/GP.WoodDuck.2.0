import * as React from 'react';
import './App.css';
import MainApp from "./Main";
import { ClaimContextProvider } from "./context/Claims";

function App() {
  return (
    <div>
      <ClaimContextProvider>
        <MainApp />
      </ClaimContextProvider>
    </div>
  );
}

export default App;
