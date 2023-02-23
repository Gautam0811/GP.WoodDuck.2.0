import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

export default function QuoteButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <div>
      <LoadingButton
          size="small"
          onClick={handleClick}
          // loading={loading}
          startIcon={<AddOutlinedIcon />}
          loadingIndicator="Loading…"
          variant="outlined"
          style={{ border: '2px solid', borderColor: '#005FA8', color: '#005FA8' }}
        >
          <span>PRODUCT</span>
        </LoadingButton>
    </div>
  );
}