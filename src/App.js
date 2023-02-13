import "./App.css";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";

import WD_headerMiddleSection from "./components/WD_header-middle-section";
import WD_LeftSideBar from "./components/WD_LeftSideBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import WD_ProductGroupsPage from "./components/WD_ProductGroupsPage";
import WD_SalesGridHeader from "./components/WD_SalesGridHeader";
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
            <Route path="/" element={<WD_SalesGridHeader />}></Route>
            <Route path="/salesgrid" element={<WD_SalesGridHeader />}></Route>
            <Route path="/productgroups" element={<WD_ProductGroupsPage />}></Route>            
          </Routes>
        </Grid>
      </Router>
    </Grid>
  );
}

export default App;
