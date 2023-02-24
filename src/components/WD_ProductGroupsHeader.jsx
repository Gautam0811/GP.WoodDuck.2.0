import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import WD_SaveButton from "../components/Buttons/WD_SaveButton";
import WD_DeleteButton from "../components/Buttons/WD_DeleteButton";
import WD_BackButton from "../components/Buttons/WD_BackButton";

export default function WD_ProductGroupsHeader() {
  return (
    //for header
      <Grid
        className="product-page-grid"
      >
        <div className="product-typography">
          <Typography className="font-bold">
            My Product Groups
          </Typography>
        </div>
        <div className="flexrow">
          <WD_SaveButton />
          <WD_DeleteButton />
          <WD_BackButton />
        </div>
      </Grid>
  );
}
