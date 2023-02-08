import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';

export default function SaveButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <Box sx={{ "& > button": { m: 1 } }}>
          <LoadingButton style={{ color:'#005FA8'}}>
          <div style={{padding: '10px',}}>
            <div>
              <SaveIcon fontSize='7px'/>
            </div>
            <div>
              <span style={{fontSize:'7px'}}>SAVE</span>
            </div>
          </div>
          </LoadingButton>
      </Box>
    </Box>
  );
}