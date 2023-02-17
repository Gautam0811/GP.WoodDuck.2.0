import "./App.css";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";

import WD_headerMiddleSection from "./components/WD_header-middle-section";
import WD_LeftSideBar from "./components/WD_LeftSideBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import WD_ProductGroupsPage from "./components/WD_ProductGroupsPage";
import WD_SalesGridHeader from "./components/WD_SalesGridHeader";
import WD_SalesGrid from "./components/WD_SalesGrid";
import CustomizedTabs from "./components/WD_Tabs";
import WD_Settings from "./components/WD_Settings";
import WD_NewContract from './components/WD_NewContract';
import WD_Dashboard from './components/WD_Dashboard';
import WD_Orders from './components/WD_Orders';


function App() {
  return (
    <Grid>
      <Router>
        <Grid>
          <WD_headerMiddleSection />
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "row" }}>
          <WD_LeftSideBar />
          
          <Routes>
            <Route path="/" element={<WD_Dashboard/>}> </Route>
            <Route path="/salesgrid" element={<WD_SalesGrid />}></Route>
            <Route path="/productgroups" element={<WD_ProductGroupsPage />}></Route>
            <Route path="/settings" element={<WD_Settings/>} > </Route>   
            <Route path="/orders" element={<WD_Orders/>} > </Route> 
            <Route path="/contracts" element={<WD_NewContract/>} > </Route>        
          </Routes>
        </Grid>
      </Router>
    </Grid>
    
  );
}

export default App;
