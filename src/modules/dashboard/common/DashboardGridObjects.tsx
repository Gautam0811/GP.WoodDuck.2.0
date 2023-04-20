// WD_DashboardGridObjects
// Component Utility : The Component is Created as a reusable component in the Dashboard parent component 
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import "../../../styles/StyleMain.css";
import "../../dashboard/styles/DashboardGridObjects.css"

export default function DasboardGridObjects(props:any) {
  return (
    <Box
      className="mx-32 w90 bg-white box-shad-125grey"
    >
      <Box className="my-20 mx-40 pt-16">
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              {props.title}
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <table className="DashboardGrid" >
          <thead className="col-42a5f5 bg-eeeeee">
            <tr>
              <th className="w10"></th>
              <th className="w18">#1</th>
              <th className="w18">#2</th>
              <th className="w18">#3</th>
              <th className="w18">#4</th>
              <th className="w18">TOTAL</th>
            </tr>
          </thead>
          <tbody>
          {props.data.map((row:any) => (
              <tr key={row.name}>
                <th scope="row" className="col-42a5f5 bg-eeeeee"  >{row.name}</th>
                <td>{row.one}</td>
                <td>{row.two}</td>
                <td>{row.three}</td>
                <td>{row.four}</td>
                <td className="font-bold">{row.total}</td>
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