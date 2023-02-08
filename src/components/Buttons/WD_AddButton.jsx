import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function AddButton() {
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
              <AddOutlinedIcon fontSize='7px'/>
            </div>
            <div>
              <span style={{fontSize:'7px'}}>ADD</span>
            </div>
          </div>
          </LoadingButton>
      </Box>
    </Box>
  );
}