import * as React from 'react';
import Grid from '@mui/material/Grid';
import WD_ProductGroupsHeader from './WD_ProductGroupsHeader';
import WD_ProductGroupsMainSection from './WD_ProductGroupsMainSection';

//this is the products page
export default function WD_ProductGroupsPage() {

  return (
    <Grid sx={{width:"100%"}}>

      {/* the header component */}
      <WD_ProductGroupsHeader />

      {/* the main section component */}
      <WD_ProductGroupsMainSection />

    </Grid>
  );
}

