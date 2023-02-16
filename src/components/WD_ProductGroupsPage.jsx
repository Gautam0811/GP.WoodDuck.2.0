import * as React from 'react';
import Grid from '@mui/material/Grid';
import WD_ProductGroupsHeader from './WD_ProductGroupsHeader';
import WD_ProductGroupsMainSection from './WD_ProductGroupsMainSection';
import WD_Footer from './WD_Footer';

export default function ProductGroupsPage() {

  return (
    <Grid>

      {/* the header component */}
      <WD_ProductGroupsHeader />

      {/* the main section component */}
      <WD_ProductGroupsMainSection />
      
      {/* footer comes here */}
      <WD_Footer />
    </Grid>
  );
}

