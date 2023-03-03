import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

export default function BasicSelectC(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (<div className='Coverall'>
    <Grid sx={{pr:props.space,mt:1}}>{props.message}</Grid>
    <Box sx={{minWidth: 70 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label" sx={{fontSize:13,opacity:1}}>CPU</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          // label="Age"
          onChange={handleChange}
        > {props.data.map((row) => (
          <MenuItem value={row.value} key={row.key}>{row.value}</MenuItem>))}
        </Select>
      </FormControl>
    </Box></div>
  );
}