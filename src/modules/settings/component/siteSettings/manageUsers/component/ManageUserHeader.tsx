// ManageUserHeader
// Component Utility : The Component is created display the header part of the manage users page
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton, Tabs, Tab, } from "@mui/material";
import {AddButton, CloseButton, EditButton, SaveButton, DeleteButton, CancelButton, InactivateButton, SetTemporaryPermissionsButton} from "../../../../common/index";

export function ManageUserHeader() {

  const [value, setValue] = React.useState("Active");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    //This is the header for Manage Users

    <Box>
      <Grid className="bg-grey-white py-16 pl-16 w100 align-items-center">
        <Grid className="flexrow justify-space-between">
          <Typography className="pl-16 font-bold">Manage Users</Typography>
          <Grid className="flexrow pr-16">
            <AddButton />
            <CloseButton />
            <CancelButton />
            <EditButton />
            <SetTemporaryPermissionsButton />
            <SaveButton />
            <DeleteButton />
            <InactivateButton />
          </Grid>
        </Grid>
      </Grid>
      <Grid className="bg-grey-white pl-16 w100 align-items-center">
        <Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab value="Active" label="Active" />
            <Tab value="Inactive" label="Inactive" />
            <Tab icon={<RefreshIcon />} />
          </Tabs>
        </Box>
      </Grid>
      {/* <Grid className="bg-grey-white pl-16 w100 align-items-center">
        <Box className="flexcolumn font-black">
          <ButtonGroup variant="text">
            <Grid className="bg-white-onclick">
              <IconButton>
                <Typography className="p-16">Active</Typography>
              </IconButton>{" "}
            </Grid>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <Typography className="p-16">Inactive</Typography>
            </IconButton>{" "}
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <Typography className="p-16">
                <RefreshIcon />
              </Typography>
            </IconButton>{" "}
          </ButtonGroup>
        </Box>
      </Grid> */}
    </Box>
  );
}
