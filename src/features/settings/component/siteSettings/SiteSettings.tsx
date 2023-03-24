// WD_SiteSettings
// Component Utility : The Component is created to render site settings tab in the Settings page
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useState } from "react";

export function SiteSettings() {
  const [manageUsers, setmanageUsers] = React.useState(false);
  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const handleClickManageUsers = () => {
    setmanageUsers(!manageUsers);
  };
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
            <Typography variant="subtitle1" color={"#42a5f5"}>
              Mass Price Updates
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="subtitle1" color={"#42a5f5"}>
              Mass Price Mill Groups
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="subtitle1" color={"#42a5f5"}>
              Mass Price Product Groups
            </Typography>
          </Link>
          <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"} >
            <div style={{  backgroundColor: 'white' }}>
          <Link to="#"  style={{ textDecoration: "none" }}>
          <div onClick={handleClickManageUsers}>
            <Typography variant="subtitle1" color={"#42a5f5"}>
              Mill Threat Levels
            </Typography>
            {manageUsers ? " " : " "}
          </div>
          </Link>
        <Collapse in={manageUsers} timeout="auto">
            <Link to="/manageUsers" className="link-text">
              <ListItemButton>
                <Typography variant="subtitle1" color={"#42a5f5"}>
                  Manage Users
                  </Typography>
              </ListItemButton>
            </Link>
            </Collapse>
            </div>
            </div>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="subtitle1" color={"#42a5f5"}>
              Salespersons
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="subtitle1" color={"#42a5f5"}>
              Tweakers
            </Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Typography variant="subtitle1" color={"#42a5f5"}>
              Cross Reference Data
            </Typography>
            </Link>
        </Stack>
        <br />
      </Box>
    </Box>
  );
}
