import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import WestIcon from '@mui/icons-material/West';

export default function ExitButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
          <LoadingButton style={{ color:'#005FA8'}}>
          <div>
            <div>
              <WestIcon fontSize='7px'/>
            </div>
            <div>
              <span style={{fontSize:'7px'}}>EXIT</span>
            </div>
          </div>
          </LoadingButton>
    </Box>
  );
}