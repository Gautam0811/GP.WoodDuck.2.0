import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function WD_BackButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <Box>
          <LoadingButton className="buttontype4">
          <div>
            <div>
              <ArrowBackOutlinedIcon className="icontype1" />
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