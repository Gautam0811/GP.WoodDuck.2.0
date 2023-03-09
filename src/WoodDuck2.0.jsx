// WD2.0
// Component Utility : The Component is created as a parent component for all the children components and is used to
//                     render all the components on app.js
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import WD_headerMiddleSection from "./components/Header/Header";
import WD_LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WD_ProductGroupsPage from "./components/ProductGroups/ProductGroupsPage";
import WD_SalesGrid from "./components/SalesGrid/SalesGrid";
import WD_Settings from "./components/Settings/Settings";
import WD_NewContract from "./components/NewContracts/NewContract";
import WD_Dashboard from "./components/Dashboard/Dashboard";
import WD_Orders from "./components/Orders/Orders";
import WD_Login from "./components/Admin/Login";
import WD_UseToken from "./components/Admin/UseToken";
import WD_Footer from "./components/Footer/Footer";
import WD_Permissions from "./components/Settings/Permissions";
import {PermissionsData} from "./services/data";


export default function WD_App() {
    const {token, setToken} = WD_UseToken();
  
    if (!token) {
      return <WD_Login setToken={setToken} />;
    }
  
    console.log(token);
    return (
      <Grid>
        <Router>
          <Grid>
            <WD_headerMiddleSection />
          </Grid>
          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <WD_LeftSideBar />
            
            <Grid sx={{ width: '100%'}}>
              <Routes>
                <Route path="/" element={<WD_Dashboard/>}> </Route>
                <Route path="/salesgrid" element={<WD_SalesGrid />}></Route>
                <Route path="/productgroups" element={<WD_ProductGroupsPage />}></Route>
                <Route path="/settings" element={<WD_Settings/>} > </Route>   
                <Route path="/orders" element={<WD_Orders/>} > </Route> 
                <Route path="/contracts" element={<WD_NewContract/>} > </Route>
                <Route path="/Adminpermissions" element={<WD_Permissions data={PermissionsData}/>} > </Route>
              </Routes>
              <WD_Footer />
            </Grid>
          </Grid>
          <Grid>
            
          </Grid>
        </Router>
      </Grid>
    );
  }
