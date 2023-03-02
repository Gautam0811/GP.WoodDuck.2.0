// WD_Settings
// Component Utility : The Component is created to render settings page
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from "react";
import Grid from "@mui/material/Grid";
import WD_SettingsHeader from "./WD_SettingsHeader";
import WD_UserSettings from "./WD_UserSettings";
import WD_SiteSettings from "./WD_SiteSettings";
import WD_AdminSettings from "./WD_AdminSettings";

export default function WD_Settings() {
  const [data,setData] = React.useState({});
  React.useEffect(() => {
    setData(JSON.parse(localStorage.getItem("status")));
  }, []);
  console.log(data);
  return (
    <Grid sx={{ width: "100%" }}>
      {/* settings header part */}
      <WD_SettingsHeader />

      {/* settings main section */}
      <Grid sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <WD_UserSettings />
        {(data.isAdmin)?
          (<WD_AdminSettings/>):(<div></div>)
        } 
        <WD_SiteSettings />
      </Grid>
    </Grid>
  );
}
