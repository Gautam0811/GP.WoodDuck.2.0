// WD_ProductGroupsPage
// Component Utility : The Component is created to render the product groups header and table on the app
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from 'react';
import Grid from '@mui/material/Grid';
import WD_ProductGroupsHeader from './WD_ProductGroupsHeader';
import WD_ProductGroupsMainSection from './WD_ProductGroupsMainSection';
import WD_Footer from '../WD_Footer/WD_Footer';

export default function ProductGroupsPage() {

  return (
    <Grid sx={{width:"100%"}}>

      {/* the header component */}
      <WD_ProductGroupsHeader />

      {/* the main section component */}
      <WD_ProductGroupsMainSection />

    </Grid>
  );
}

