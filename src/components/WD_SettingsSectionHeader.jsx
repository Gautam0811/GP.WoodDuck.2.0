import * as React from "react";
import Typography from "@mui/material/Typography";

export default function SettingsSectionHeader() {
  return (
    //This is the header for settings in components_2.png
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f1f4fb",
        padding: "15px",
        paddingLeft: "25px"
      }}
    >
      <Typography style={{ fontWeight: "bold" }}>Settings</Typography>
    </div>
  );
}
