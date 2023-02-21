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


export default function WD_DasboardPercentForecastSold() {
  return (
    <Box
      sx={{
        mx: 4,
        my: 4,
        width: "90%",
        bgcolor: "white",
        boxShadow: "1px 2px 5px grey",
      }}
    >
      <Box sx={{ my: 2.5, mx: 5,pt:2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              Percent Forecast Sold
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <table style={{ width: "100%",lineHeight:2.5}}>
          <thead style={{ color: "#42a5f5", backgroundColor: "#eeeeee" }}>
            <tr>
              <th style={{ width: "10%"}}></th>
              <th style={{ width: "18%"}}>#1</th>
              <th style={{ width: "18%"}}>#2</th>
              <th style={{ width: "18%"}}>#3</th>
              <th style={{ width: "18%"}}>#4</th>
              <th style={{ width: "18%"}}>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>2x4</th>
              <td>201%</td>
              <td>283%</td>
              <td>137%</td>
              <td>104%</td>
              <td style={{ fontWeight:"bold"}} >190%</td>
            </tr>
            <tr >
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>2x6</th>
              <td>48%</td>
              <td>101%</td>
              <td>78%</td>
              <td>76%</td>
              <td style={{ fontWeight:"bold"}}>80%</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>2x8</th>
              <td>75%</td>
              <td>68%</td>
              <td>64%</td>
              <td>47%</td>
              <td style={{ fontWeight:"bold"}}>67%</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>2x10</th>
              <td>14%</td>
              <td>36%</td>
              <td>13%</td>
              <td>30%</td>
              <td style={{ fontWeight:"bold"}}>31%</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>2x12</th>
              <td>No Production</td>
              <td>110%</td>
              <td>14%</td>
              <td>127%</td>
              <td style={{ fontWeight:"bold"}}>102%</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>4x4</th>
              <td>24%</td>
              <td>193%</td>
              <td>39%</td>
              <td>29%</td>
              <td style={{ fontWeight:"bold"}}>164%</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>4x6</th>
              <td>105%</td>
              <td>229%</td>
              <td>No Production</td>
              <td>59%</td>
              <td style={{ fontWeight:"bold"}}>165%</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>6x6</th>
              <td>145%</td>
              <td>127%</td>
              <td>N/A</td>
              <td>17%</td>
              <td style={{ fontWeight:"bold"}}>88%</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Box>
    </Box>
  );
}
