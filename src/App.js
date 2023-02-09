import "./App.css";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";

import WD_headerMiddleSection from "./components/WD_header-middle-section";
import WD_LeftSideBar from "./components/WD_LeftSideBar";
import React from "react";
import WD_ProductsGroupHeader from "./components/WD_ProductGroupsHeader";
import WD_ProductGroupsPage from "./components/WD_ProductGroupsPage";
import WD_SalesGridHeader from "./components/WD_SalesGridHeader";
function App() {
  return (
    <Grid>
      <Grid>
        <WD_headerMiddleSection />
      </Grid>
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <WD_LeftSideBar />
        <WD_SalesGridHeader />
      </Grid>
    </Grid>
  );
}

export default App;
