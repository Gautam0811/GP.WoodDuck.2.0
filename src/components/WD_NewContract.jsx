import * as React from 'react';
import Grid from '@mui/material/Grid';
import WD_NewContractHeader from './WD_NewContractHeader';


export default function NewContract() {

  return (
    <Grid>
      {/* the header component */}
      <WD_NewContractHeader />
    </Grid>
  );
}