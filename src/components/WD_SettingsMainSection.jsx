import * as React from "react";
import Grid from "@mui/material/Grid";

export default function WD_SettingsMainSection() {
  return (
    <Grid className="settings-mainsection-grid">
      <div className="box-shad">
        <table className="settings-table">
          <th>USER SETTINGS</th>
          <tr>Mill Groups</tr>
          <tr>Product Groups</tr>
          <tr>Buyer Groups</tr>
          <tr>Custom Settings</tr>
        </table>
      </div>
      <div className="box-shad">
        <table className="settings-table">
          <th>SITE SETTINGS</th>
          <tr>Mass Price Updates</tr>
          <tr>Mass Price Mill Groups</tr>
          <tr>Mass Price Product Groups</tr>
          <tr>Mill Threat Levels</tr>
          <tr>Sales Persons</tr>
          <tr>Tweaker</tr>
        </table>
      </div>
    </Grid>
  );
}
