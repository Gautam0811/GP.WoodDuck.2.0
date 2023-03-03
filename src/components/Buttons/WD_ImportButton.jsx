import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

export default function WD_ImportButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
          <LoadingButton className="buttontype4">
          <div >
            <div>
              <CachedOutlinedIcon className="icontype1"/>
            </div>
            <div>
              <span>IMPORT</span>
            </div>
          </div>
          </LoadingButton>
    </Box>
  );
}