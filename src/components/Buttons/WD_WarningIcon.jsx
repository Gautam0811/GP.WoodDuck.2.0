import * as React from 'react';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function WarningIcon() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <Box sx={{ "& > button": { m: 1 } }}>
        <ErrorOutlineIcon style={{ color: '#ffc04d', fontSize: '80px'}}/>
      </Box>
    </Box>
  );
}