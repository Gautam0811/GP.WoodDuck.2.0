// WD_DashboardMillForecasts
// Component Utility : The Component created to display the Mill Forecasts on the Dashboard 
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import "../../styles/WD_StyleMain.css";
import LinearWithValueLabel from "./WD_LinearProgressBar";
import {WD_DasboardMillForecastsrows} from "../../services/data"

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
            {WD_DasboardMillForecastsrows.map((row) => (
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




              