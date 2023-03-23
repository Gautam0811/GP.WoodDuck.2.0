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
    
    <Grid sx={{ width: "100%" }}>
      {/* settings header part */}
      <div className="settings-header">
      <span className="settings-header-text">Settings</span>
    </div>

      {/* settings main section */}
      <Grid sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <UserSettings />
        {data.isAdmin ? <AdminSettings /> : <div></div>}
        <SiteSettings />
      </Grid>
    </Grid>
  );
}
