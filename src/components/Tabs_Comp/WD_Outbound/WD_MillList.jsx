import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BasicTextFields from './WD_Mill';
import { Grid } from '@mui/material';

export default function SwitchListSecondary() {
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
      <ListItem>
        <ListItemText sx={{ml:5}} id="switch-list-label-wifi" secondary="GURDON" secondaryTypographyProps={{fontSize: '11px', fontWeight:'Bold'}} />
        <Grid><p>-----------------------------------</p></Grid>
        <Switch
        size='small'
          edge="end"
          onChange={handleToggle('wifi')}
          checked={checked.indexOf('wifi') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
        />
      </ListItem>
      <ListItem sx={{mt:-5}}>
        <ListItemText sx={{ml:5}} id="switch-list-label-bluetooth" secondary="ROCKY CREEK" secondaryTypographyProps={{fontSize: '11px', fontWeight:'Bold'}} />
        <Grid ><p>-----------------------------</p></Grid>
        <Switch
        size='small'
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>
      <ListItem sx={{mt:-5}}>
        <ListItemText sx={{ml:5}} id="switch-list-label-bluetooth" secondary="GP SL WARRENTON ll" secondaryTypographyProps={{fontSize: '11px', fontWeight:'Bold'}} />
        <Grid ><p>---------------------</p></Grid>
        <Switch
        size='small'
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>
      <ListItem sx={{mt:-5}}>
        <ListItemText sx={{ml:5}} id="switch-list-label-bluetooth" secondary="DUDLEY STUD" secondaryTypographyProps={{fontSize: '11px', fontWeight:'Bold'}} />
        <Grid ><p>-----------------------------</p></Grid>
        <Switch
        size='small'
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>
      <ListItem sx={{mt:-5}}>
        <ListItemText sx={{ml:5}} id="switch-list-label-bluetooth" secondary="PROSPERITY STUD" secondaryTypographyProps={{fontSize: '11px', fontWeight:'Bold'}} />
        <Grid ><p>------------------------</p></Grid>
        <Switch
        size='small'
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>
      <ListItem sx={{mt:-5}}>
        <ListItemText sx={{ml:5}} id="switch-list-label-bluetooth" secondary="THOMSO-R" secondaryTypographyProps={{fontSize: '11px', fontWeight:'Bold'}} />
        <Grid ><p>--------------------------------</p></Grid>
        <Switch
        size='small'
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>
      <ListItem sx={{mt:-5}}>
        <ListItemText sx={{ml:5}} id="switch-list-label-bluetooth" secondary="CHICAGO-R" secondaryTypographyProps={{fontSize: '11px', fontWeight:'Bold'}} />
        <Grid ><p>--------------------------------</p></Grid>
        <Switch
        size='small'
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>
      <ListItem sx={{mt:-5}}>
        <ListItemText sx={{ml:5}} id="switch-list-label-bluetooth" secondary="CAMDEN" secondaryTypographyProps={{fontSize: '11px', fontWeight:'Bold'}} />
        <Grid ><p>-----------------------------------</p></Grid>
        <Switch
        size='small'
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>
    </List>
  );
}