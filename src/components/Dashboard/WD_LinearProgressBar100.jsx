import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { green, grey, lightGreen } from '@mui/material/colors';
 

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
    

  const [progress, setProgress] = React.useState(10);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel100 color="error" sx={{width:70,height:10,bgcolor:'error.main'}} value={propst.Values} />
    </Box>
  );
}