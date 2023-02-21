import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import "../styles/WD_DashboardHitRate.css";
import LinearWithValueLabel from "./WD_LinearProgressBar";
import LinearWithValueLabel100 from "./WD_LinearProgressBar100";
import LinearWithValueLabel50 from "./WD_LinearProgressBar50";

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
            <tr >
              <th scope="row" style={{ color: "#42a5f5", fontWeight:"normal"}}>ALBANY</th>
              <td><LinearWithValueLabel Values={"45"}/></td>
              <td>100% sold</td>
            </tr>
            <tr >
              <th scope="row" style={{ color: "#42a5f5", fontWeight:"normal"}}>CAMDEN</th>
              <td><LinearWithValueLabel Values={"40"}/></td>
              <td>118% sold</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5",  fontWeight:"normal"}}>DIBOLL</th>
              <td><LinearWithValueLabel Values={"53"}/></td>
              <td>202% sold</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5",  fontWeight:"normal"}}>DUDLEY</th>
              <td><LinearWithValueLabel Values={"106"}/></td>
              <td>129% sold</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", fontWeight:"normal"}}>GP SL WARRENTON ll</th>
              <td><LinearWithValueLabel Values={"112"}/></td>
              <td>95% sold</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5",  fontWeight:"normal"}}>GURDON</th>
              <td><LinearWithValueLabel Values={"72"}/></td>
              <td>119% sold</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", fontWeight:"normal"}}>PINELAND</th>
              <td><LinearWithValueLabel Values={"79"}/></td>
              <td>119% sold</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5",  fontWeight:"normal"}}>PROSPERITY</th>
              <td><LinearWithValueLabel Values={"76"}/></td>
              <td>87% sold</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5",  fontWeight:"normal"}}>ROCKY CREEK</th>
              <td><LinearWithValueLabel Values={"50"}/></td>
              <td>117% sold</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5",  fontWeight:"normal"}}>ROME</th>
              <td><LinearWithValueLabel Values={"161"}/></td>
              <td>43% sold</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5",  fontWeight:"normal"}}>TALLADEGA</th>
              <td><LinearWithValueLabel Values={"77"}/></td>
              <td>143% sold</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5",  fontWeight:"normal"}}>TAYLORSVILLE</th>
              <td><LinearWithValueLabel  Values={"29"}/></td>
              <td>171% sold</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Box>
    </Box>
  );
}
