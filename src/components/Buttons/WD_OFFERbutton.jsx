// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

export default function WD_QuoteButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  

  return (
    <Box >
      {/* <Box sx={{ "& > button": { mt: -46,mr:31,p:0.2} }}> */}
      <Box>
      <LoadingButton
          size="small"
          onClick={handleClick}
          // loading={loading}
          startIcon={<AddOutlinedIcon />}
          loadingIndicator="Loading…"
          variant="outlined"
          className="buttontype5"
          // style={{ border: '2px solid', borderColor: '#005FA8', color: '#005FA8' }}
        >
          <span>OFFER</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}