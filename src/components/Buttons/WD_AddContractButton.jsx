import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function ClearAllButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      {/* <Box sx={{ "& > button": { m: 1 } }}> */}
      <Box>
        <Button
          size='small'
          checked={loading}
          onClick={handleClick}
          // loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>ADD CONTRACT</span>
        </Button>  
      </Box>
    </Box>
  );
}