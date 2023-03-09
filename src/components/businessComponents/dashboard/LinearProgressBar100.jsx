// WD_LinearProgressBar100
// Component Utility : The Component created to display the linear progress bar on the Mills Forecast in the Dashboard 
// Author Manas Dixit on 1-3-2023
// -------------------------
import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

 

function LinearProgressWithLabel100(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center',width:"10%",ml:3 }}>
      <Box sx={{ width: '821%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 15 }}>
        <Typography variant="body2" sx={{fontSize:10}} color="black">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}



export default function LinearWithValueLabel100(propst) {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel100 color="error" sx={{width:70,height:10,bgcolor:'error.main'}} value={propst.Values} />
    </Box>
  );
}