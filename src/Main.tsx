// WD2.0
// Component Utility : The Component is created as a parent component for all the children components and is used to
//                     render all the components on app.js
// Author Gautam Malhotra on 1-3-2023
// -------------------------

import Grid from "@mui/material/Grid";
import HeaderMiddleSection from "./components/header/Header";
import LeftSideBar from "./components/leftSideBar/LeftSideBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductGroupsPage from "./components/businessComponents/productGroups/ProductGroupsPage";
import SalesGrid from "./components/businessComponents/salesGrid/SalesGrid";
import Settings from "./components/settings/Settings";
import NewContract from "./components/businessComponents/newContracts/NewContract";
import Dashboard from "./components/businessComponents/dashboard/Dashboard";
import Orders from "./components/businessComponents/orders/Orders";
import Login from "./components/admin/Login";
import UseToken from "./components/admin/UseToken";
import Footer from "./components/footer/Footer";
import Permissions from "./components/settings/Permissions";
import {PermissionsData} from "./services/Data";


export default function WD_App() {
    const {token, setToken} = UseToken();
  
    if (!token) {
      return <Login setToken={setToken} />;
    }
  
    console.log(token);
    return (
      <Grid>
        <Router>
          <Grid>
            <HeaderMiddleSection />
          </Grid>
          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <LeftSideBar />
            
            <Grid sx={{ width: '100%'}}>
              <Routes>
                <Route path="/" element={<Dashboard/>}> </Route>
                <Route path="/salesgrid" element={<SalesGrid />}></Route>
                <Route path="/productgroups" element={<ProductGroupsPage />}></Route>
                <Route path="/settings" element={<Settings/>} > </Route>   
                <Route path="/orders" element={<Orders/>} > </Route> 
                <Route path="/contracts" element={<NewContract/>} > </Route>
                <Route path="/Adminpermissions" element={<Permissions data={PermissionsData}/>} > </Route>
              </Routes>
              <Footer />
            </Grid>
          </Grid>
          <Grid>
            
          </Grid>
        </Router>
      </Grid>
    );
  }
