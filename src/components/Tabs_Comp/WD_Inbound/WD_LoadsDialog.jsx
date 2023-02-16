import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';


export default function BasicTextFields() {
  return (<Grid sx={{display:"flex",flexDirection:"row",fontSize:12,fontWeight:"Bold"}}>
  <Grid sx={{mt:1}}>LOADS</Grid>
    <Box
      component="form"
      sx={{
        '& > :not(style)': {  width: '8ch',ml:3,mt:-0.5 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="1" variant="outlined" size='small'/>
    </Box>
    
    </Grid>
  );
}