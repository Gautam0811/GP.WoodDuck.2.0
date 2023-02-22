import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import { green, red } from "@mui/material/colors";
import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';

function createData(weekvalue, week,change,pricingpower) {
  return { weekvalue, week,change,pricingpower,key:Math.random()};
}

const rows = [
  createData (60,'WEEK 1','decrease',4.4),
  createData (60,'WEEK 2','increase',4.4),
  createData (60,'WEEK 3','increase',4.4)];

  
  

export default function WD_DashboardMarketPOV() {
  return (
    <Box sx={{ mx: 4,my: 4, width: "90%", bgcolor: "white", boxShadow: '1px 2px 5px grey'}}>
      <Box sx={{ my: 2.5, mx: 4}}>
        <Grid container alignItems="center" >
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              Market POV
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <br />
        <Stack direction="row" spacing={9}>

        {rows.map((row) => ( row.change === 'decrease'?

              <Typography variant="h7" color={"black"} sx={{ml:4}} key={row.key}>
              {row.week}
              
              <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}}>
                
              <SouthIcon sx={{fontSize:"28px",color: red [400]}}/>
              
              
               {row.weekvalue}<Typography sx={{lineHeight:1}}>%</Typography>
              </Typography>
            </Typography>
            :
            
            <Typography variant="h7" color={"black"} sx={{ml:4}} key={row.key}>
              {row.week}
              
              <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}}>
                
              <NorthIcon sx={{fontSize:"28px",color: green[400]}}/>
              
              
               {row.weekvalue}<Typography sx={{lineHeight:1}}>%</Typography>
              </Typography>
            </Typography>))};
          
         
          
          <Divider orientation="vertical"  flexItem  />
          
          <Typography variant="h7" color={"BLACK"}>
            Pricing Power
           
            <Typography variant="caption" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}}>
                <SignalCellular4BarIcon size="large" sx={{fontSize:"38px",color: green[400]}}/>
                <Typography sx={{pl:4,fontSize:"24px"}}>4.4</Typography>
            </Typography>
          </Typography>
        </Stack>
        <br/>
      </Box>
    </Box>
  );
}
