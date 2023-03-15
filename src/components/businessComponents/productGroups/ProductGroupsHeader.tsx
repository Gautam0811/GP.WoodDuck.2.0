// WD_ProductGroupsHeader
// Component Utility : The Component is created to for the displaying the header of the Products group page
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SaveButton from "../../buttons/SaveButton";
import DeleteButton from "../../buttons/DeleteButton";
import BackButton from "../../buttons/BackButton";

export default function ProductGroupsHeader() {
  return (
    
      <Grid
        className="product-page-grid"
      >
        <div className="product-typography">
          <Typography className="font-bold">
            My Product Groups
          </Typography>
        </div>
        <div className="flexrow">
          <SaveButton />
          <DeleteButton />
          <BackButton />
        </div>
      </Grid>
  );
}
