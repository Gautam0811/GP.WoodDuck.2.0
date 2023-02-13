import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Switch from '@mui/material/Switch';

export default function ProductGroupsMainSection() {

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    //the main product groups component
      <Grid sx={{ px: 4, py: 2 }}>
        <Typography fontSize="large">Selected Product Groups</Typography>
        <Grid sx={{ pt: 2, display: "flex", flexDirection: "column" }}>
          <div style={{ pr: 3 }}>
            <Typography fontSize="small" style={{ color: "#005fa8" }}>
              NAME
            </Typography>
          </div>
          <div>
            <input placeholder="New" style={{ padding: "5px" }}></input>
          </div>
        </Grid>
        <Grid sx={{ pt: 2, display: "flex", flexDirection: "column" }}>
          <div>
            <Typography fontSize="small" style={{ color: "#005fa8" }}>
              DEFAULT
            </Typography>
          </div>
          <div>
            <Switch {...label} />
          </div>
        </Grid>
        <Grid sx={{ pt: 2, display: "flex", flexDirection: "column" }}>
          <Grid sx={{ pr: 3 }}>
            <Typography fontSize="small" style={{ color: "#005fa8" }}>
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
      </Grid>
  );
}

