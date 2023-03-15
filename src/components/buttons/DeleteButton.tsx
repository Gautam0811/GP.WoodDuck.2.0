// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
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