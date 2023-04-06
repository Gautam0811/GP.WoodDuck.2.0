import * as React from "react";
import Grid from "@mui/material/Grid";
import { AddButton, CloseButton } from "../../../../../common/button";

export function PermissionsHeader() {
  return (
    <Grid className="settings-header">
      <span className="settings-header-text">Manage Permission Sets</span>
      <div className="flexrow">
        <AddButton/>
        <CloseButton />
      </div>
    </Grid>
  );
}
