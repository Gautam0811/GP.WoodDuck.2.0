import * as React from "react";
import WD_SalesGridHeader from "./WD_SalesGridHeader";
import WD_SalesGridMainSection from "./WD_SalesGridMainSection";
import Grid from "@mui/material/Grid";
import WD_Footer from './WD_Footer';

export default function SalesGrid() {
  return (
    <Grid>
      {/* sales grid header part */}
      <WD_SalesGridHeader />

      {/* sales grid main section */}
      <WD_SalesGridMainSection />

      {/* footer comes here */}
      <WD_Footer />
    </Grid>
  );
}
