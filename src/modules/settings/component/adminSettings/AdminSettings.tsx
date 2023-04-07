// WD_AdminSettings
// Component Utility : The Component is created to render administration settings tab in the Settings page
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


export function AdminSettings() {
  return (
    <Box
      className="border-radius-5 box-shad-125grey w30 bg-white mx-32 my-8"
    >
        <Grid container >
          <Grid item xs>
            <Typography className="p-4 pl-16 fs-16 bg-grey-white font-bold" component="div">
              ADMINISTRATION
            </Typography>
          </Grid>
        </Grid>
        <Stack spacing={0.2} className="p-8">
          <Link to="#" className="text-dec-none">
            <Typography className="col-005fa8">
              Activity Log
            </Typography>
          </Link>
          <Link to="#" className="text-dec-none">
            <Typography className="col-005fa8">
              API Log
            </Typography>
          </Link>
          <Link to="#" className="text-dec-none">
            <Typography className="col-005fa8">
              Data Sync Setup
            </Typography>
          </Link>
          <Link to="#" className="text-dec-none">
            <Typography className="col-005fa8">
              Manage Retry Table Records
            </Typography>
          </Link>
          <Link to="#" className="text-dec-none">
            <Typography className="col-005fa8">
              Error Log
            </Typography>
          </Link>
          <Link to="#" className="text-dec-none">
            <Typography className="col-005fa8">
              Search Status
            </Typography>
          </Link>
          <Link to="#" className="text-dec-none">
            <Typography className="col-005fa8">
              User Activity Logs
            </Typography>
          </Link>
          <Link to="#" className="text-dec-none">
            <Typography className="col-005fa8">
              Misc Utilities
            </Typography>
          </Link>
          <Link to="/settings/adminpermissions" className="text-dec-none">
            <Typography className="col-005fa8">
              Permission Sets and Controls
            </Typography>
          </Link>
        </Stack>
        <br />
      </Box>
  );
}
