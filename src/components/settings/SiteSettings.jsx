// WD_SiteSettings
// Component Utility : The Component is created to render site settings tab in the Settings page
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";

export default function SiteSettings() {
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
              Site Settings
            </Typography>
          </Grid>
        </Grid>
        <Stack spacing={2}>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Mass Price Updates
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Mass Price Mill Groups
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Mass Price Product Groups
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Mill Threat Levels
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Salespersons
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Tweakers
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="h7" color={"#42a5f5"}>
              Cross Reference Data
            </Typography>
            </Link>
        </Stack>
        <br />
      </Box>
    </Box>
  );
}
