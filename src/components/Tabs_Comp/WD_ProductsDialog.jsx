import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';


export default function BasicSelectP() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (<Grid sx={{display:"flex",flexDirection:"row",fontSize:12,fontWeight:"Bold"}}>
    <Grid sx={{pr:2,mt:1}}>PRODUCTS</Grid>
    <Box sx={{minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label" sx={{fontSize:13,opacity:0.5}}>Quick Entry</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box></Grid>
  );
}