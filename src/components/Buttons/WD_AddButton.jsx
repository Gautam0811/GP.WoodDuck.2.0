import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


export default function WD_AddButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
          <LoadingButton className="buttontype4">
          <div>
            <div>
              <AddOutlinedIcon className="icontype1"/>
            </div>
            <div>
              <span>ADD</span>
            </div>
          </div>
          </LoadingButton>
    </Box>
  );
}