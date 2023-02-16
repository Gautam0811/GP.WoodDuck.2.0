import * as React from "react";
import Typography from "@mui/material/Typography";

export default function SettingsSectionHeader() {
  return (
    //This is the header for settings in components_2.png
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#f1f4fb",
        paddingTop: "15px",
        paddingBottom: "15px",
        width: '100%'
      }}
    >
      <Typography style={{paddingLeft:"25px", fontWeight: "bold" }}>Settings</Typography>
    </div>
  );
}
