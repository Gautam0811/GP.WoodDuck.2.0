import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function WD_CollapseRightButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  

  return (
    <Box>
      {/* <Box sx={{ "& > button": { m: 1 } }}> */}
        <Box>
        <LoadingButton
          size="small"
          onClick={handleClick}
          endIcon={ <ArrowForwardIcon /> }
          // loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
          className="buttontype5"
        />
      </Box>
    </Box>
  );
}