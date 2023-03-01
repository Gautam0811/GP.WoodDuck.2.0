// WD_LinearProgressBar
// Component Utility : The Component created to display the linear progress bar on the Mills Forecast in the Dashboard 
// Author Manas Dixit on 1-3-2023
// -------------------------
import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { green, grey, lightGreen } from '@mui/material/colors';
import { FormLabel } from '@mui/material';
 


export default function LinearWithValueLabel(propst) {
   

  const [color, setColor] = React.useState(0);
  const [colors, setColors] = React.useState(0);
  const value = propst.Values
  React.useEffect(() => {
    if (value <= 100) {
      setColors("lightgrey");
    } else {
      setColors("red");
    } }, [value]);


  React.useEffect(() => {
    if (value <= 50) {
      setColor("green");
    } else if (value >= 50 && value <=100) {
      setColor("yellow");
    }  else {
      setColor("red");
    } }, [value]);
  return (
    <Box sx={{ width: '100%',pl:3,display:'flex',flexDirection:'row' , alignItems: 'center'}}>
      
      <LinearProgress
  variant="determinate"
  value={propst.Values}
  sx={{height:10,width:70,
    backgroundColor: `${colors}`,
    "& .MuiLinearProgress-bar": {
      backgroundColor: `${color}`
    }
  }}
/><Typography variant="body2" sx={{fontSize:10,pl:1}} color="black">{value}%</Typography>
    </Box>
  );
}
