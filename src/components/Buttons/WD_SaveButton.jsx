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
      <Box>
          <LoadingButton style={{ color:'#005FA8'}}>
          <div >
            <div>
              <SaveIcon  fontSize='7px'/>
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