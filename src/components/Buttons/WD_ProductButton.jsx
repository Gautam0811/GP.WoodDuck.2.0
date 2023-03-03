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
    <div>
      <LoadingButton
          size="small"
          onClick={handleClick}
          // loading={loading}
          startIcon={<AddOutlinedIcon />}
          loadingIndicator="Loading…"
          variant="outlined"
          className="buttontype5"
        >
          <span>PRODUCT</span>
        </LoadingButton>
    </div>
  );
}