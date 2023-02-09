import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

export default function ImportButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
          <LoadingButton style={{ color:'#005FA8' }}>
          <div style={{padding: '10px',}}>
            <div>
              <CachedOutlinedIcon fontSize='7px'/>

            </div>
            <div>
              <span style={{fontSize:'7px'}}>IMPORT</span>
            </div>
          </div>
          </LoadingButton>
    </Box>
  );
}