// WD_NewContract
// Component Utility : The Component is created to display the New Contracts page on the app and has child components
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from 'react';
import Grid from '@mui/material/Grid';
import WD_NewContractHeader from './WD_NewContractHeader';
import WD_NewContractMainSection from './WD_NewContractMainSection';
import WD_Footer from '../WD_Footer/WD_Footer';

export default function NewContract() {

  return (
    <Grid sx={{width:"100%"}}>
      {/* the header component */}
      <WD_NewContractHeader />

      {/* main section component */}
      <WD_NewContractMainSection />

    </Grid>
  );
}