import Grid from "@mui/material/Grid";
import { PermissionsHeader, ViewPermissions } from "./index";


export  function Permissions() {
  return (
    <Grid className="w100">
      <PermissionsHeader />
      <br />
      <br />
      <ViewPermissions />
    </Grid>
  )
}
