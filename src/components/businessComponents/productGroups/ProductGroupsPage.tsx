// WD_ProductGroupsPage
// Component Utility : The Component is created to render the product groups header and table on the app
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductGroupsHeader from './ProductGroupsHeader';
import ProductGroupsMainSection from './ProductGroupsMainSection';

export default function ProductGroupsPage() {

  return (
    <Grid sx={{width:"100%"}}>

      {/* the header component */}
      <ProductGroupsHeader />

      {/* the main section component */}
      <ProductGroupsMainSection />

    </Grid>
  );
}

