import Grid from "@mui/material/Grid";
import {  ViewManageUsers, ManageUsersTabs } from "./index";
import * as React from "react";

export  function ManageUsers() {
  return (
    <Grid className="w100">
      {/* <ManageUserHeader /> */}
      <ManageUsersTabs />
    </Grid>
  )
}
