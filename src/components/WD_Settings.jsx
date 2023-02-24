import * as React from "react";
import Grid from "@mui/material/Grid";
import WD_SettingsHeader from './WD_SettingsHeader';
import WD_SettingsMainSection from './WD_SettingsMainSection';



export default function WD_Settings() {
  return (
    <Grid sx={{width:"100%"}}>
        {/* settings header part */}
        <WD_SettingsHeader />
        
        {/* settings main section */}
        <WD_SettingsMainSection />

    </Grid>
  );
}
