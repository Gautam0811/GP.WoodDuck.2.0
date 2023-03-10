// WD_DashboardGridObjects
// Component Utility : The Component is Created as a reusable component in the Dashboard parent component 
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import "../../styles/styleMain.css";

export default function DasboardGridObjects(props) {
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
              {props.title}
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <table className="DashboardGrid" style={{ width: "100%",lineHeight:2.5}}>
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
          {props.data.map((row) => (
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
