import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SwitchListSecondary from './WD_MillList';

export default function BasicTextFields() {
  return (<Grid sx={{display:"flex",flexDirection:"column"}}>
  <Grid sx={{display:"flex",flexDirection:"row",fontSize:12,fontWeight:"Bold"}}>
  <Grid sx={{mt:1}}>MILLS</Grid>
    <Box
      component="form"
      sx={{
        '& > :not(style)': {  width: '23ch',ml:3,mt:-0.5 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Mill Quick Entry" variant="outlined" size='small'/>
    </Box>
    <Grid ><AddCircleRoundedIcon style={{ color: "blue",fontSize:"20px" }} sx={{pl:1,mt:0.5}}/> </Grid>
    </Grid>
   <Grid >
    <SwitchListSecondary />
   </Grid>

    </Grid>
  );
}