import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

export default function WD_QuoteButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  

  return (
    <Box >
      {/* <Box sx={{ "& > button": { mt: -46,mr:31,p:0.2} }}> */}
      <Box>
      <LoadingButton
          size="small"
          onClick={handleClick}
          // loading={loading}
          startIcon={<AddOutlinedIcon />}
          loadingIndicator="Loading…"
          variant="outlined"
          className="buttontype5"
        >
          <span>QUOTE</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}