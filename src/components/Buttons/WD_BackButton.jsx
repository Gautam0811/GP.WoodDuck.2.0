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
          <LoadingButton>
          <div>
            <div>
              <ArrowBackOutlinedIcon />
            </div>
            <div>
              <span>BACK</span>
            </div>
          </div>
          </LoadingButton>
      </Box>
    </Box>
  );
}