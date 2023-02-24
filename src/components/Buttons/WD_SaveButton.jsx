import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';

export default function WD_SaveButton() {
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
              <SaveIcon className="icontype1"/>
            </div>
            <div>
              <span>SAVE</span>
            </div>
          </div>
          </LoadingButton>
      </Box>
    </Box>
  );
}