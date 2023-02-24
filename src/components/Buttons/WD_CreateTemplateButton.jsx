import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function WD_CreateTemplateButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  

  return (
    <Box>
      {/* <Box sx={{ "& > button": { m: 1 ,mr:20,mt:3} }}> */}
        <Box>
        <LoadingButton
          size='small'
          startIcon={<ContentCopyIcon />}
          onClick={handleClick}
          // loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
          className="buttontype5"
          >
          <span>CREATE TEMPLATE</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}