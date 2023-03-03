import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

export default function WD_NextButton() {
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