import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import "../styles/WD_StyleMain.css";
import LinearWithValueLabel from "./WD_LinearProgressBar";
import LinearWithValueLabel100 from "./WD_LinearProgressBar100";
import LinearWithValueLabel50 from "./WD_LinearProgressBar50";

function createData(name, inventory, nextweek) {
  return { name, inventory, nextweek };
}

const rows = [
  createData('ALBANY', 45,'100% sold'),
  createData('CAMDEN', 40,'118% sold'),
  createData('DIBOLL', 53,'202% sold'),
  createData('DUDLEY', 106,'129% sold'),
  createData('GP SL WARRENTON ll', 112,'95% sold'),
  createData('GURDON', 72,'119% sold'),
  createData('PINELAND', 79,'119% sold'),
  createData('PROSPERITY', 76,'87% sold'),
  createData('ROCKY CREEK', 50,'117% sold'),
  createData('ROME', 161,'43% sold'),
  createData('TALLADEGA', 77,'143% sold'),
  createData('TAYLORSVILLE', 29,'171% sold'),
];





export default function WD_DasboardMillForecasts() {
  return (
    <Box
    
      sx={{
       mr:1,
        my: 4,
        
        bgcolor: "white",
        boxShadow: "1px 2px 5px grey",
        justifyContent:"flex-end",
        
      }}
    >
      <Box sx={{ my: 0.5, mx: 0 }}>
        <Grid container alignItems="center">
          <Grid item xs sx={{pl:2}}>
            <Typography gutterBottom variant="h6" component="div">
              Mill Forecasts
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <table style={{ width: "100%",fontSize: "11px",lineHeight:2.5}}>
          <thead style={{ color: "#42a5f5", backgroundColor: "#eeeeee" }}>
            <tr>
              <th style={{ width: "32%"}}></th>
              <th style={{ width: "38%"}}>INVENTORY</th>
              <th style={{ width: "30%"}}>NEXT 3 WEEKS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <th scope="row" style={{ color: "#42a5f5", fontWeight:"normal"}}>{row.name}</th>
                <td><LinearWithValueLabel Values={row.inventory}/></td>
                <td>{row.nextweek}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
        <br />
        <br />
      </Box>
    </Box>
  );
}




              