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

function createData(name, one,two,three,four,total ) {
  return { name, one,two,three,four,total };
}

const rows = [
  createData('2x4', '201%','283%','137%','104%','190%'),
  createData('2x6', '48%','101%','78%','76%','80%'),
  createData('2x8', '75%','68%','64%','47%','67%'),
  createData('2x10', '14%','36%','13%','30%','31%'),
  createData('2x12', 'No Production','110%','14%','127%','102%'),
  createData('4x4', '24%','193%','39%','29%','164%'),
  createData('4x6', '105%','229%','No Production','59%','165%'),
  createData('6x6', '145%','127%','N/A','17%','88%')
]

export default function WD_DashboardPercentForecastSold() {
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
          {rows.map((row) => (
              <tr key={row.name}>
                <th scope="row" style={{ color: "#42a5f5", backgroundColor: "#eeeeee"}}>{row.name}</th>
                <td>{row.one}</td>
                <td>{row.two}</td>
                <td>{row.three}</td>
                <td>{row.four}</td>
                <td style={{ fontWeight:"bold"}}>{row.total}</td>
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
