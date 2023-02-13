import './App.css';
import {Fragment } from 'react';

import WD_headerMiddleSection from './components/WD_header-middle-section';
import WD_LeftSideBar from './components/WD_LeftSideBar';
import React from 'react'; 
import WD_SalesGridHeader from './components/WD_SalesGridHeader';
import WD_SalesGrid from './components/WD_SalesGrid';

function App() {
  return (
    <div>
      <div>
      <WD_headerMiddleSection/>
      
    </div>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <WD_LeftSideBar />
      <WD_SalesGridHeader />
      
    </div>
    <WD_SalesGrid/>
    </div>
    
  );
}

export default App;
