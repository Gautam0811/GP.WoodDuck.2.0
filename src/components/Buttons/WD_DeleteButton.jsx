import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function WD_DeleteButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <Box >
          <LoadingButton className="buttontype4">
          <div >
            <div>
              <CloseOutlinedIcon className="icontype1"/>
            </div>
            <div>
              <span>DELETE</span>
            </div>
          </div>
          </LoadingButton>
      </Box>
    </Box>
  );
}