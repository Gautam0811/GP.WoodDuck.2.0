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

  return (<Grid sx={{pt:5,mt:-28,ml:5,display:"flex",flexDirection:"row",fontSize:12,fontWeight:"Bold"}}>
    
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
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl></ListItemText>
    </Box></Grid></Grid>
  );
}