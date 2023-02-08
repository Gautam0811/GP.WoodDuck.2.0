import './App.css';
import WD_LeftSideBar from './components/WD_LeftSideBar';
import WD_headerMiddleSection from './components/WD_header-middle-section';
import React from 'react'; 
import WD_SalesGridHeader from './components/WD_SalesGridHeader';

function App() {
  return (
    <div>
      <WD_headerMiddleSection/>
      <WD_SalesGridHeader></WD_SalesGridHeader>
      <WD_LeftSideBar />
    </div>
  );
}

export default App;
