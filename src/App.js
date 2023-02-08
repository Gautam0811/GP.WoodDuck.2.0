import './App.css';
import {Fragment } from 'react';

import WD_headerMiddleSection from './components/WD_header-middle-section';
import WD_LeftSideBar from './components/WD_LeftSideBar';
import WD_ProductGroupsHeader from './components/WD_ProductGroupsHeader';
import React from 'react'; 

function App() {
  return (
    <Fragment>
      <WD_headerMiddleSection />
      <WD_LeftSideBar />
    </Fragment>
  );
}

export default App;
