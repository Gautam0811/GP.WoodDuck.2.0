import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import WestIcon from '@mui/icons-material/West';

export default function WD_ExitButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
          <LoadingButton className="buttontype4">
          <div>
            <div>
              <WestIcon className="icontype1" />
            </div>
            <div>
              <span>EXIT</span>
            </div>
          </div>
          </LoadingButton>
    </Box>
  );
}