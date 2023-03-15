// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

export default function NextButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  

  return (
    <Box>
      {/* <Box sx={{ "& > button": { mt: -51.9,mr:5,p:0.2 } }}> */}
        <Box>
        <LoadingButton
          size="small"
          onClick={handleClick}
          endIcon={ <ChevronRightOutlinedIcon /> }
          // loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
          className="buttontype5"
        >
          <span> NEXT</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}