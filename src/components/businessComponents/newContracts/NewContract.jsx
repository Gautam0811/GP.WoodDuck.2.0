// WD_NewContract
// Component Utility : The Component is created to display the New Contracts page on the app and has child components
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from 'react';
import Grid from '@mui/material/Grid';
import NewContractHeader from './NewContractHeader';
import NewContractMainSection from './NewContractMainSection';
import Footer from '../footer/Footer';

export default function NewContract() {

  return (
    <Grid sx={{width:"100%"}}>
      {/* the header component */}
      <NewContractHeader />

      {/* main section component */}
      <NewContractMainSection />

    </Grid>
  );
}