import "./App.css";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";

import WD_headerMiddleSection from "./components/WD_header-middle-section";
import WD_LeftSideBar from "./components/WD_LeftSideBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import WD_ProductGroupsPage from "./components/WD_ProductGroupsPage";
import WD_SalesGrid from "./components/WD_SalesGrid";
import WD_Settings from "./components/WD_Settings";

import WD_headerMiddleSection from './components/WD_header-middle-section';
import WD_LeftSideBar from './components/WD_LeftSideBar';
import React from 'react'; 
import WD_SalesGridHeader from './components/WD_SalesGridHeader';

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
    </div>
  );
}

export default App;
