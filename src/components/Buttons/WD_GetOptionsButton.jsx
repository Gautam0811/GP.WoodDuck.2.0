import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';


export default function GetOptionsButton() {
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
        >
          <span>GET OPTIONS </span>
        </LoadingButton>  
      </Box>
    </Box>
  );
}