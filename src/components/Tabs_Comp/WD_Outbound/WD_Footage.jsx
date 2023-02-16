import { Divider, Grid, Typography } from "@mui/material";
import * as React from "react";

export default function FBox() {
  return (
    <Grid>
      <Grid
        sx={{
          fontWeight: "Bold",
          fontSize: 12,
          display: "flex",
          flexDirection: "row",
          pl: 1,
          pt: 3,
        }}
      >
        FOOTAGE{" "}
        <Grid sx={{ pl: 2, pt: 0, pb: -2, fontWeight: "light" }}>0 MBF</Grid>
        <Grid sx={{ pl: 9, pt: 0, pb: -2, fontWeight: "Bold",
          fontSize: 12, }}>LINEAL</Grid>
      </Grid>
    </Grid>
  );
}
