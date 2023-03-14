// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';


export default function WD_GetOptionsButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      {/* <Box sx={{ "& > button": { mt: -52,mr:1,p:0.2  } }}> */}
      <Box>
        <LoadingButton
          size='small'
          checked={loading}
          onClick={handleClick}
          endIcon={<ArrowForwardOutlinedIcon />}
          // loading={loading}
          loadingPosition="end"
          variant="contained"
          className="buttontype1"
        >
          <span>GET OPTIONS </span>
        </LoadingButton>  
      </Box>
    </Box>
  );
}