// ManageUserTabs
// Component Utility : The Component is created display the tabs part below header part of the manage users page
// Author Ananya Dhar on 06-04-2023
// -------------------------
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton, Tabs, Tab } from "@mui/material";
import { ManageUsersGrid } from "./index";
import AppBar from "@mui/material/AppBar";
import { OrdersGridcolumns, OrdersGridrows } from "../services/Data";

export function ManageUsersTabs() {
  const [value, setValue] = React.useState(0);
  const [isActive, setIsActive]: any = React.useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function setValueActive() {
    setIsActive(true);
  }
  function setValueInactive() {
    setIsActive(false);
  }

  const [orderFilterGridRow, setOrderFilterGridRow]: any = React.useState(
    OrdersGridrows.filter(
      (a) =>
        a.activeUser === isActive &&
        a.businessLine === window.localStorage.getItem("subdivisionValue")
    )
  );

  React.useEffect(() => {
    setOrderFilterGridRow(
      OrdersGridrows.filter(
        (a) =>
          a.activeUser === isActive &&
          a.businessLine === window.localStorage.getItem("subdivisionValue")
      )
    );
  }, [isActive]);

  interface TabPanelProps {
    children: React.ReactNode;
    value: number;
    index: number;
  }
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  //this returns the index when tab changes

  function a11yProps(index: number) {
    //alert(index);
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  return (
    //This is the tabs header for Manage Users

    <Box>
      <Grid className="bg-grey-white pl-16 w100 align-items-center">
        <Box></Box>
      </Grid>
      <Grid className="bg-grey-white flexrow  justify-space-between pl-16 w100 align-items-center">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Active" {...a11yProps(0)} onClick={setValueActive} />
            <Tab
              label="Inactive"
              {...a11yProps(1)}
              onClick={setValueInactive}
            />
            <Tab icon={<RefreshIcon />} {...a11yProps(2)} />
          </Tabs>
        </Box>
        {orderFilterGridRow.length > 1 ? (
          <Typography className="pr-16 gray">
            {orderFilterGridRow.length} Users
          </Typography>
        ) : (
          <Typography className="pr-16 gray">
            {orderFilterGridRow.length} User
          </Typography>
        )}
      </Grid>
      <TabPanel value={value} index={0}>
        <ManageUsersGrid
          isActive={isActive}
          selectedDivision={window.localStorage.getItem("subdivisionValue")}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ManageUsersGrid
          isActive={isActive}
          selectedDivision={window.localStorage.getItem("subdivisionValue")}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RefreshIcon />
      </TabPanel>
    </Box>
  );
}
