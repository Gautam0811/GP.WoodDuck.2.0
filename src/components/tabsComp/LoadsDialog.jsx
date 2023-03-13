// WD_CPU
// Component Utility : The Component created to provide dropdown in tabs
// Author Manas Dixit on 1-3-2023
// -------------------------


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';


export default function BasicTextFields() {
  return (<Grid className='Coverall'>
  <Grid sx={{mt:1}}>LOADS</Grid>
    <Box
      component="form"
      sx={{
        '& > :not(style)': {  width: '8ch',ml:3,mt:-0.5 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" defaultValue="1" variant="outlined" size='small'/>
    </Box>
    
    </Grid>
  );
}