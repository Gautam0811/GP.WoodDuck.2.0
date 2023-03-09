// WD_SalesGrid
// Component Utility : The Component is created to render the Sales grid page on woodDuck
// Author Gautam Malhotra on 1-3-2023
// -------------------------

import * as React from "react";
import SalesGridHeader from "./SalesGridHeader";
import SalesGridMainSection from "./SalesGridMainSection";
import Grid from "@mui/material/Grid";

export default function SalesGrid() {
  return (
    <Grid sx={{ width: "100%" }}>
      {/* sales grid header part */}
      <SalesGridHeader />
      {/* <WD_Tabs /> */}
      <Grid
        sx={{ width: "100%", flexDirection: "column", px: "5px", py: "5px" }}
      >
        {/* sales grid main section */}
        <SalesGridMainSection />
      </Grid>
    </Grid>
  );
}
