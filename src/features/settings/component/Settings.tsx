// WD_Settings
// Component Utility : The Component is created to render settings page
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from "react";
import Grid from "@mui/material/Grid";
import SettingsHeader from "./SettingsHeader";
import UserSettings from "./UserSettings";
import SiteSettings from "./SiteSettings";
import AdminSettings from "./AdminSettings";
import { BrowserRouter as Router } from "react-router-dom";
import { SettingsRoute } from "../routes/SettingsRoute";

export function Settings() {
  const [data, setData]: any = React.useState({});
  React.useEffect(() => {
    setData(JSON.parse(localStorage.getItem("status")!));
  }, []);
  return (
    <Grid sx={{ width: "100%" }}>
      {/* settings header part */}
      <SettingsHeader />

      {/* settings main section */}
      <Grid sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <UserSettings />
        {data.isAdmin ? <AdminSettings /> : <div></div>}
          <SettingsRoute />
        <SiteSettings />
      </Grid>
    </Grid>
  );
}
