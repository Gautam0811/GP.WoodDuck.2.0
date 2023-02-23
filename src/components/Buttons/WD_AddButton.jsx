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
          <LoadingButton>
          <div>
            <div>
              <AddOutlinedIcon />
            </div>
            <div>
              <span>ADD</span>
            </div>
          </div>
          </LoadingButton>
    </Box>
  );
}