import Grid from "@mui/material/Grid";
import { ManageUserHeader, ManageUsersGrid, ManageUsersTabs } from "./index";


export  function ManageUsers() {
  return (
    <Grid className="w100">
      <ManageUserHeader />
      <ManageUsersTabs />
    </Grid>
  )
}
