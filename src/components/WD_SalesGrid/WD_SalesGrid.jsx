// WD_SalesGrid
// Component Utility : The Component is created to render the Sales grid page on woodDuck
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import WD_SalesGridHeader from "./WD_SalesGridHeader";
import WD_SalesGridMainSection from "./WD_SalesGridMainSection";
import Grid from "@mui/material/Grid";
import WD_Tabs from '../Tabs_Comp/WD_Tabs';

export default function SalesGrid() {
  return (
    <Grid sx={{ width: "100%" }}>
      {/* sales grid header part */}
      <WD_SalesGridHeader />
      {/* <WD_Tabs /> */}
      <Grid
        sx={{ width: "100%", flexDirection: "column", px: "5px", py: "5px" }}
      >
        {/* sales grid main section */}
        <WD_SalesGridMainSection />
      </Grid>
    </Grid>
  );
}
