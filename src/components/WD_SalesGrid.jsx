import * as React from "react";
import WD_SalesGridHeader from "./WD_SalesGridHeader";
import WD_SalesGridMainSection from "./WD_SalesGridMainSection";
import WD_Tabs from "./WD_Tabs";
import Grid from "@mui/material/Grid";
import WD_Footer from "./WD_Footer";

export default function SalesGrid() {
  return (
    <Grid sx={{ width: "100%" }}>
      {/* sales grid header part */}
      <WD_SalesGridHeader />
      <WD_Tabs />
      <Grid
        sx={{ width: "100%", flexDirection: "column", px: "5px", py: "5px" }}
      >
        {/* sales grid main section */}
        <WD_SalesGridMainSection />
      </Grid>
      {/* footer comes here */}
      <WD_Footer />
    </Grid>
  );
}
