import * as React from 'react'
import Grid from "@mui/material/Grid";
import AddButton from "../../../common/AddButton"
import CloseButton from "../../../common/CloseButton"


export default function PermissionsHeader() {
  return (
    <Grid className="settings-header">
        <span className="settings-header-text">Manage Permission Sets</span>
        <div className="flexrow">
          <AddButton/>
          <CloseButton/>
        </div>
    </Grid>
  )
}
