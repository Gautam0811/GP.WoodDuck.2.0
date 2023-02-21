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


export default function WD_DasboardHitRate() {
  return (
    <Box
      sx={{
        mx: 4,
        my: 1,
        width: "90%",
        bgcolor: "white",
        boxShadow: "1px 2px 5px grey",
      }}
    >
      <Box sx={{ my: 2.5, mx: 5,pt:2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              Hit Rate
            </Typography>
          </Grid>
          <Grid item>
            <FormControl fullWidth sx={{ color: "blue" }}>
              <NativeSelect
                defaultValue={10}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>24 hours</option>
                <option value={20}>7 days</option>
                <option value={30}>30 days</option>
                <option value={40}>6 months</option>
                <option value={50}>12 months</option>
              </NativeSelect>
            </FormControl>
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
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>2x6</th>
              <td>9%</td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ fontWeight:"bold"}}>9%</td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>2x8</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>2x10</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>2x12</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>4x4</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>4x6</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{textAlign:"center"}}>
              <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>6x6</th>
              <td></td>
              <td></td>
              <td>N/A</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Box>
    </Box>
  );
}
