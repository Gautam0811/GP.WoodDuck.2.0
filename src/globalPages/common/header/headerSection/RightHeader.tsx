// RightHeaderSection
// Component Utility : The Component created for rendering a header navigation bar for all the pages in the app
// Author Gautam Malhotra on 1-3-2023
// -------------------------

import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import CalculateTwoToneIcon from "@mui/icons-material/CalculateTwoTone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

import "../../../../styles/StyleMain.css";

import { Grid } from "@mui/material";
import { Profile, Subdivision } from "../index";

export function RightHeader() {
  const [name, setName]: any = React.useState({});

  // React.useEffect((() => setName(JSON.parse(localStorage.getItem('status') || '{}'))), []);

  React.useEffect(() => {
    function fetchName() {
      let nameFetch = JSON.parse(localStorage.getItem("status") || "{}");
      setName(nameFetch);
    }
    fetchName();
  }, []);

  return (
    // View for Right Header section
    <Box className="fs-12 flex-grow">
      <AppBar className="bg-ffb74d position-static">
        <Toolbar>
          <Grid className="flexrow pl-24 rh-margin">
            <Grid className="user-name">
              {name.isAdmin ? (
                <Subdivision />
              ) : (
                <div>
                  {" "}
                  <br />
                </div>
              )}
              <Grid className="font-black hide_view" component="div">
                <IconButton size="small" color="primary" aria-label="menu">
                  <MenuIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" color="primary" aria-label="menu">
                  <HelpOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" color="primary" aria-label="menu">
                  <CalculateTwoToneIcon fontSize="small" />
                </IconButton>
                <Link to="/settings">
                  <IconButton size="small" color="primary" aria-label="menu">
                    <SettingsIcon fontSize="small" />
                  </IconButton>
                </Link>
                <IconButton
                  size="small"
                  color="primary"
                  aria-label="show 8 new mails"
                >
                  <Badge badgeContent={8} color="error">
                    <EmailOutlinedIcon fontSize="small" />
                  </Badge>
                </IconButton>
              </Grid>
            </Grid>
            <Grid>
              <Profile />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
