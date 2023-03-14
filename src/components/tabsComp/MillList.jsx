// WD_CPU
// Component Utility : The Component created to provide list of mills
// Author Manas Dixit on 1-3-2023
// -------------------------



import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BasicTextFields from './Mill';
import { Grid } from '@mui/material';

export default function SwitchListSecondary(props) {
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      subheader={<ListSubheader></ListSubheader>}
    > 
    <ListItem >
        <ListItemText sx={{ml:1}} id="switch-list-label-wifi" secondary="GURDON" secondaryTypographyProps={{fontSize: '11px', fontWeight:'Bold'}} />
        <Grid><p>----------------------------</p></Grid>
        <Switch
        size='small'
          edge="end"
          onChange={handleToggle('GURDON')}
          checked={checked.indexOf('GURDON') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
          />
          </ListItem >
    
    
    {props.data.map((row) => (
      <ListItem sx={{mt:-5}}>
        <ListItemText sx={{ml:1}} id="switch-list-label-wifi" secondary={row.value} secondaryTypographyProps={{fontSize: '11px', fontWeight:'Bold'}} />
        <Grid><p>----------------------------</p></Grid>
        <Switch
        size='small'
          edge="end"
          onChange={handleToggle(row.value)}
          checked={checked.indexOf(row.value) !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
        />
      </ListItem>))}
      
      {props.List.length > 0 ? (
      <ListItem sx={{mt:-5}}>
        <ListItemText sx={{ml:1}} id="switch-list-label-wifi" secondary={props.List} secondaryTypographyProps={{fontSize: '11px', fontWeight:'Bold'}} />
        <Grid><p>----------------------------</p></Grid>
        <Switch
        size='small'
          edge="end"
          onChange={handleToggle(props.List)}
          checked={checked.indexOf(props.List) !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
          />
          </ListItem >) : ""}
      

       
    </List>
  );
}