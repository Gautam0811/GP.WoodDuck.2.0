import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

export default function WD_QuoteButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  

  return (
    <Box>
      {/* <Box sx={{ "& > button": { m: 1 } }}> */}
      <Box>
        <IconButton
          style={{ color: '#005fa8'}}
          aria-label="search"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
}