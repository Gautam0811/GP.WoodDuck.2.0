import Grid from "@mui/material/Grid";
import { PermissionsHeader, ViewPermissions } from "./index";


export  function Permissions() {
  return (
    <Grid className="w85">
      <PermissionsHeader />
      <br />
      <br />
      <ViewPermissions />
    </Grid>
  )
}
