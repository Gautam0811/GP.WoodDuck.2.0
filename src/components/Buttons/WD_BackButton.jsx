import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function BackButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <Box>
          <LoadingButton style={{ color:'#005FA8' }}>
          <div>
            <div>
              <ArrowBackOutlinedIcon fontSize='7px'/>
            </div>
            <div>
              <span style={{fontSize:'7px'}}>BACK</span>
            </div>
          </div>
          </LoadingButton>
      </Box>
    </Box>
  );
}