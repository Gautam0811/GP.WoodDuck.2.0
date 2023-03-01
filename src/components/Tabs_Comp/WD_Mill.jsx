// WD_CPU
// Component Utility : The Component created to provide Mill box to entry mills
// Author Manas Dixit on 1-3-2023
// -------------------------



import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, IconButton } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SwitchListSecondary from './WD_MillList';
import {WD_Millrows} from "../../services/Tab";

export default function BasicTextFields() {
  const [enteredList, setEnteredList] = React.useState('');

  const ListChangeHandler = (event) => {
    setEnteredList(event.target.value);
   
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const List = {
      List: enteredList,
    };

    // props.onSaveExpenseData(ListData);
    setEnteredList('');
  };




  return (<Grid sx={{display:"flex",flexDirection:"column"}}>
  <Grid className='Coverall'>
  <Grid sx={{mt:1}}>MILLS</Grid>
    <Box
      
      sx={{
        '& > :not(style)': {  width: '23ch',ml:3,mt:-0.5 },
      }}
      noValidate
      autoComplete="off"
      
    ><form onSubmit={submitHandler} style={{display:'flex',flexDirection:'row',width:'200px'}}>
      <TextField id="outlined-basic" label="Mill Quick Entry" variant="outlined" size='small' value={enteredList} onChange={ListChangeHandler}/>
      <Grid ><IconButton type='submit'><AddCircleRoundedIcon style={{ color: "blue",fontSize:"20px" }} sx={{pl:1,mt:0.5}}/> </IconButton></Grid>
      </form></Box></Grid> 
    
   <Grid >
    <SwitchListSecondary data={WD_Millrows} List={enteredList}/>
   </Grid>

    </Grid>
  );
}