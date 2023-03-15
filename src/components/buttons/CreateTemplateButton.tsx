// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function CreateTemplateButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  

  return (
    <Box>
      {/* <Box sx={{ "& > button": { m: 1 ,mr:20,mt:3} }}> */}
        <Box>
        <LoadingButton
          size='small'
          startIcon={<ContentCopyIcon />}
          onClick={handleClick}
          // loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
          className="buttontype5"
          >
          <span>CREATE TEMPLATE</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}