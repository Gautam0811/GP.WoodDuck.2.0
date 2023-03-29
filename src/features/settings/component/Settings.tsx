// WD_Settings
// Component Utility : The Component is created to render settings page
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from "react";
import Grid from "@mui/material/Grid";
import {UserSettings, SiteSettings, AdminSettings} from "./index";


export function Settings() {
  const [data, setData]: any = React.useState({});
  React.useEffect(() => {
    setData(JSON.parse(localStorage.getItem("status")!));
  }, []);
  return (
    
    <Grid className="w100">
      {/* settings header part */}
      <div className="bg-grey-white p-16 w100">
      <span className="settings-header-text">Settings</span>
      <br/>
      <br/>
    </div>

      {/* settings main section */}
      <Grid className="w100 flexrow justify-space-evenly">
        <UserSettings />
        {data.isAdmin ? <AdminSettings /> : <div></div>}
        <SiteSettings />
      </Grid>
    </Grid>
  );
}
