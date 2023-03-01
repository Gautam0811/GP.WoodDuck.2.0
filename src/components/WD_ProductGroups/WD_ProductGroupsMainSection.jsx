// WD_ProductGroupsMainSection
// Component Utility : The Component is created to render the different product groups in WoodDuck
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Switch from '@mui/material/Switch';

export default function WD_ProductGroupsMainSection() {

  //for the
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    //the main product groups component
      <div className="product-main-grid">
        <Typography fontSize="large">Selected Product Groups</Typography>
        <Grid className="product-grid">
          <div>
            <Typography fontSize="small" className="product-text-color">
              NAME
            </Typography>
          </div>
          <div>
            <input placeholder="New" style={{ padding: "5px" }}></input>
          </div>
        </Grid>
        <Grid className="product-grid">
          <div>
            <Typography fontSize="small" className="product-text-color">
              DEFAULT
            </Typography>
          </div>
          <div>
            <Switch {...label} />
          </div>
        </Grid>
        <Grid className="product-grid">
          <Grid>
            <Typography fontSize="small" className="product-text-color">
              PRODUCTS
            </Typography>
          </Grid>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={10}
            style={{ width: 500 }}
          />
        </Grid>
      </div>
  );
}

