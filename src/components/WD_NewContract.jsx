import * as React from 'react';
import Grid from '@mui/material/Grid';
import WD_NewContractHeader from './WD_NewContractHeader';
import WD_NewContractMainSection from './WD_NewContractMainSection';


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