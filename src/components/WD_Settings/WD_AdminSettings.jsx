import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";

export default function WD_AdminSettings() {
  return (
    <Box
      sx={{
        mx: 4,
        my: 1,
        width: "30%",
        bgcolor: "white",
        boxShadow: "1px 2px 5px grey",
      }}
    >
      <Box sx={{ my: 2.5, mx: 5 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              Administration Settings
            </Typography>
          </Grid>
        </Grid>
        <Stack spacing={2}>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Activity Log
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              API Log
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Data Sync Setup
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Manage Retry Table Records
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Error Log
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Search Status
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              User Activity Logs
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Misc Utilities
            </Typography>
          </Link>
          <Link to="/Adminpermissions" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Permission Sets and Controls
            </Typography>
          </Link>
        </Stack>
        <br />
      </Box>
    </Box>
  );
}
