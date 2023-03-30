// ManageUserHeader
// Component Utility : The Component is created display the header part of the manage users page
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";

export function ManageUserHeader() {
  return (
    //This is the header for ManageUsers

    <Grid>
      <Grid className="bg-grey-white py-16 pl-16 w100 align-items-center">
        <Grid className="flexrow justify-space-between">
          <Typography className="pl-16 font-bold">Manage Users</Typography>
          <Grid className="flexrow pr-16">
            <Grid>
              <Button className="flexcolumn">
                <AddIcon className="fs-16" />
                <Typography className="fs-12">Add</Typography>
              </Button>
            </Grid>
            <Grid>
              <Button className="flexcolumn">
                <CloseIcon className="fs-16" />
                <Typography className="fs-12">Close</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="bg-grey-white pl-16 w100 align-items-center">
        <Box className="flexcolumn font-black">
          <ButtonGroup variant="text">
            <Grid className="bg-white-onclick">
            <IconButton >
              <Typography className="p-16">Active</Typography>
            </IconButton>{" "}
            </Grid>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <Typography className="p-16">Inactive</Typography>
            </IconButton>{" "}
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <Typography className="p-16"><RefreshIcon /></Typography>
            </IconButton>{" "}
          </ButtonGroup>
        </Box>
      </Grid>
    </Grid>
  );
}