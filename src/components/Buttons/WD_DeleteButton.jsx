import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function DeleteButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <Box >
          <LoadingButton style={{color:'#005FA8'}}>
          <div >
            <div>
              <CloseOutlinedIcon fontSize='7px'/>
            </div>
            <div>
              <span style={{fontSize:'7px'}}>DELETE</span>
            </div>
          </div>
          </LoadingButton>
      </Box>
    </Box>
  );
}