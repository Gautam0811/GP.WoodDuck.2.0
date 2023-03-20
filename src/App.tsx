import * as React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import { ClaimContextProvider } from "./context/Claims";

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
