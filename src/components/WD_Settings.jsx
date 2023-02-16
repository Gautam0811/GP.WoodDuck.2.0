import * as React from "react";
import Grid from "@mui/material/Grid";
import WD_SettingsHeader from './WD_SettingsHeader';
import WD_SettingsMainSection from './WD_SettingsMainSection';
import WD_Footer from './WD_Footer';
import Box from '@mui/material/Box';


export default function Settings() {
  return (
    <Grid sx={{width:"100%"}}>
        {/* settings header part */}
        <WD_SettingsHeader />
        
        {/* settings main section */}
        <WD_SettingsMainSection />

        {/* Footer Part */}
        <WD_Footer />
    </Grid>
  );
}
