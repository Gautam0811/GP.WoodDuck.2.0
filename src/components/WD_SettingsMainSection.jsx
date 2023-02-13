import * as React from "react";
import Grid from "@mui/material/Grid";

export default function SettingsMainSection() {
  return (
    <Grid
      sx={{
        paddingTop: "50px",
        justifyContent: "space-evenly",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <table border="1" style={{ color: "#1357a6", paddingRight: "200px" }}>
        <th style={{ color: "black", backgroundColor: "#f1f4fb" }}>
          USER SETTINGS
        </th>
        <tr>Mill Groups</tr>
        <tr>Product Groups</tr>
        <tr>Buyer Groups</tr>
        <tr>Custom Settings</tr>
        <tr></tr>
        <tr></tr>
      </table>
      <table border="1" style={{ color: "#1357a6", paddingRight: "200px" }}>
        <th style={{ color: "black", backgroundColor: "#f1f4fb" }}>
          SITE SETTINGS
        </th>
        <tr>Mass Price Updates</tr>
        <tr>Mass Price Mill Groups</tr>
        <tr>Mass Price Product Groups</tr>
        <tr>Mill Threat Levels</tr>
        <tr>Sales Persons</tr>
        <tr>Tweaker</tr>
      </table>
    </Grid>
  );
}
