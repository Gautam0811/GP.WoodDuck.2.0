import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';

export default function WD_ClearAllButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      {/* <Box sx={{ "& > button": { m: 1 } }}> */}
      <Box>
        <LoadingButton
          size='small'
          checked={loading}
          onClick={handleClick}
          // loading={loading}
          loadingPosition="end"
          variant="contained"
          className="buttontype1"
        >
          <span>CLEAR ALL </span>
        </LoadingButton>  
      </Box>
    </Box>
  );
}