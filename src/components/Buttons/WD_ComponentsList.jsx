import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

export default function QuoteButton() {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <FormControlLabel
        sx={{
          display: "block",
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      <Box sx={{ "& > button": { m: 1 } }}>
        <LoadingButton
          size="small"
          onClick={handleClick}
          //uncomment this to make toggle button work
          //   loading={loading}
          variant="outlined"
          disabled
        >
          <span>disabled</span>
        </LoadingButton>
        <LoadingButton
          size="small"
          onClick={handleClick}
          //   loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          <span> + QUOTE</span>
        </LoadingButton><LoadingButton
          size="small"
          onClick={handleClick}
          endIcon={<ChevronRightOutlinedIcon />}
          //   loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          <span>NEXT</span>
        </LoadingButton>
        <LoadingButton
          size="small"
          onClick={handleClick}
          endIcon={<ArrowForwardOutlinedIcon />}
          //   loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>GET OPTIONS </span>
        </LoadingButton>
        <LoadingButton
          size="small"
          color="secondary"
          onClick={handleClick}
          //   loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
        <div style={{display: 'flex', flexDirection: 'row', paddingLeft: '20px'}}>
          <div style={{padding: '10px',}}>
            <div>
              <SaveIcon fontSize='7px'/>
            </div>
            <div>
              <span style={{fontSize:'7px'}}>SAVE</span>
            </div>
          </div>
          <div style={{padding: '10px',}}>
            <div>
              <CloseOutlinedIcon fontSize='7px'/>
            </div>
            <div>
              <span style={{fontSize:'7px'}}>DELETE</span>
            </div>
          </div>
          <div style={{padding: '10px',}}>
            <div>
              <ArrowBackOutlinedIcon fontSize='7px'/>
            </div>
            <div>
              <span style={{fontSize:'7px'}}>BACK</span>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', paddingLeft: '20px' }}>
          <div style={{padding: '10px',}}>
            <div>
              <AddOutlinedIcon fontSize='7px'/>
            </div>
            <div>
              <span style={{fontSize:'7px'}}>ADD</span>
            </div>
          </div>
          <div style={{padding: '10px',}}>
            <div>
              <CachedOutlinedIcon fontSize='7px'/>
            </div>
            <div>
              <span style={{fontSize:'7px'}}>IMPORT</span>
            </div>
          </div>
          <div style={{padding: '10px',}}>
            <div>
              <CloseOutlinedIcon fontSize='7px'/>
            </div>
            <div>
              <span style={{fontSize:'7px'}}>CLOSE</span>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}