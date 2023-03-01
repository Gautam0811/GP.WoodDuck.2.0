import { Divider, Grid, Typography } from "@mui/material";
import * as React from "react";

export default function FBox(props) {
  return (
    <Grid>
      <Grid className='Coverall'
        sx={{
          pl: 1,
          pt: props.space,
        }}
      >
        FOOTAGE {props.data.map((row) => (
        <Grid sx={{ pl: 2, pt: 0, pb: -2, fontWeight: "light" }}>{row.value} MBF</Grid>))}
        <Grid sx={{ pl: 9, pt: 0, pb: -2, fontWeight: "Bold",
          fontSize: 12, }}>{props.message}</Grid>
      </Grid>
    </Grid>
  );
}
