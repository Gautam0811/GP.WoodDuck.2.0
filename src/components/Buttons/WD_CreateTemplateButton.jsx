import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function QuoteButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  

  return (
    <Box>
      <Box sx={{ "& > button": { m: 1 } }}>
        
        <LoadingButton
          size='small'
          startIcon={<ContentCopyIcon />}
          onClick={handleClick}
          // loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
          style={{ border: '2px solid', borderColor: '#005FA8', color: '#005FA8' }}        >
          <span>CREATE TEMPLATE</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}