// WD_CPU
// Component Utility : The Component created to provide dropdown in tabs
// Author Manas Dixit on 1-3-2023
// -------------------------



import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid, ListItemText} from '@mui/material';




export default function BasicSelect(props) {
  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (<div className='dropdownbox'>
    
    <Grid sx={{pr:6,ml:-2}}>{props.message}</Grid>
    <Grid>
    <Box sx={{ width: 200,bgcolor: '#fff'}}>
    <ListItemText sx={{marginBlock:-1,}}>
      {/* <InputLabel id="demo-simple-select-label" sx={{justifyContent:'start'}} >Age</InputLabel> */}
      <FormControl  fullWidth size="small"  >
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          // label="Age"
          onChange={handleChange}
        >{props.data.map((row) => (
          <MenuItem value={row.value}>{row.value}</MenuItem>))}
          
        </Select>
      </FormControl></ListItemText>
    </Box></Grid></div>
  );
}