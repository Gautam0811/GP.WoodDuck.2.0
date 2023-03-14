// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#39ac8f',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
//   '& .MuiSwitch-track': {
//     borderRadius: 16 / 2,
//     opacity: 1,
//     backgroundColor:
//       theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
//     boxSizing: 'border-box',
//   },
}));

export default function WD_ToggleSwitchButton(props) {
  return (
    <FormGroup style={{padding:'1px'}}>
      <Stack direction="row" spacing={1} alignItems="center">
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography style={{color:'#005fa8'}}>{props.Text}</Typography>
      </Stack>
    </FormGroup>
  );
}