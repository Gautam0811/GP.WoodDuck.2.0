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

function createData(week1value, week2value,week3value,week1change,week2change,week3change) {
  return { week1value, week2value,week3value,week1change,week2change,week3change,key:Math.random()};
}

const rows = [
  createData (60,60,60,'decrease','increase','increase'),
  ];

  
  

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

              <Typography variant="h7" color={"black"} sx={{ml:4}} >
              WEEK 1

              {rows.map((row) => ( row.week1change === 'decrease' &&

              
              
              <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}} key={row.key}>
                
              <SouthIcon sx={{fontSize:"28px",color: red [400]}}/>
              
              
               {row.week1value}<Typography sx={{lineHeight:1}}>%</Typography>
              </Typography>
            ))}
            
            
            {rows.map((row) => ( row.week1change === 'increase' && 
              <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}} key={row.key}>
                
              <NorthIcon sx={{fontSize:"28px",color: green[400]}}/>
              
              
               {row.week1value}<Typography sx={{lineHeight:1}}>%</Typography>
              </Typography>
            ))}
          
            {rows.map((row) => ( row.week1change === 'noChange' && 
              
              <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}} key={row.key}>
                
             
              
              
               {row.week1value}<Typography sx={{lineHeight:1}}>%</Typography>
              </Typography>
            ))}

            </Typography>
          
            <Typography variant="h7" color={"black"} sx={{ml:4}} >
              WEEK 2

              {rows.map((row) => ( row.week2change === 'decrease' &&

              
              
              <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}} key={row.key}>
                
              <SouthIcon sx={{fontSize:"28px",color: red [400]}}/>
              
              
               {row.week2value}<Typography sx={{lineHeight:1}}>%</Typography>
              </Typography>
            ))}
            
            
            {rows.map((row) => ( row.week2change === 'increase' && 
              <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}} key={row.key}>
                
              <NorthIcon sx={{fontSize:"28px",color: green[400]}}/>
              
              
               {row.week2value}<Typography sx={{lineHeight:1}}>%</Typography>
              </Typography>
            ))}
          
            {rows.map((row) => ( row.week2change === 'noChange' && 
              
              <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}} key={row.key}>
                
             
              
              
               {row.week2value}<Typography sx={{lineHeight:1}}>%</Typography>
              </Typography>
            ))}

            </Typography>

            <Typography variant="h7" color={"black"} sx={{ml:4}} >
              WEEK 3

              {rows.map((row) => ( row.week3change === 'decrease' &&

              
              
              <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}} key={row.key}>
                
              <SouthIcon sx={{fontSize:"28px",color: red [400]}}/>
              
              
               {row.week3value}<Typography sx={{lineHeight:1}}>%</Typography>
              </Typography>
            ))}
            
            
            {rows.map((row) => ( row.week3change === 'increase' && 
              <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}} key={row.key}>
                
              <NorthIcon sx={{fontSize:"28px",color: green[400]}}/>
              
              
               {row.week3value}<Typography sx={{lineHeight:1}}>%</Typography>
              </Typography>
            ))}
          
            {rows.map((row) => ( row.week3change === 'noChange' && 
              
              <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start',pt:2}} key={row.key}>
                
             
              
              
               {row.week3value}<Typography sx={{lineHeight:1}}>%</Typography>
              </Typography>
            ))}

            </Typography>
          
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



