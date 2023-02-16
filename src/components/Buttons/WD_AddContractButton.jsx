import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';

export default function ClearAllButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <Box sx={{ "& > button": { m: 1 } }}>
        <LoadingButton
          size='small'
          checked={loading}
          onClick={handleClick}
          // loading={loading}
          loadingPosition="end"
          variant="contained"
          style={{ backgroundColor: 'gray'}}
          
        >
          <span>ADD CONTRACT</span>
        </LoadingButton>  
      </Box>
    </Box>
  );
}