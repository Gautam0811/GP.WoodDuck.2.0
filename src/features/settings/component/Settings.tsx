// WD_Settings
// Component Utility : The Component is created to render settings page
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from "react";
import Grid from "@mui/material/Grid";
import {SettingsHeader, UserSettings, SiteSettings, AdminSettings} from "./index";
import { Route, Routes} from "react-router-dom";
import { SettingsRoute } from "../routes";
import { PermissionsData } from "../services/Data";
import Permissions from "./adminPermissions/Permissions";


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
        <Routes>
        <Route
            path="/settings/adminpermissions"
            element={<Permissions data={PermissionsData} />}
          ></Route>
          </Routes>
        <SiteSettings />
      </Grid>
    </Grid>
  );
}
