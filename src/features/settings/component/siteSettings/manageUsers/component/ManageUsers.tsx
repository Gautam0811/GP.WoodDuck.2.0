import Grid from "@mui/material/Grid";
import { ManageUserHeader, ManageUsersGrid } from "./index";


export  function ManageUsers() {
  return (
    <Grid className="w100">
      <ManageUserHeader />
      <br />
      <br />
      <ManageUsersGrid />
    </Grid>
  )
}
