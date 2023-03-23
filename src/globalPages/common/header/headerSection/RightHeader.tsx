// WD_header-middle-section
// Component Utility : The Component created for rendering a header navigation bar for all the pages in the app
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import CalculateTwoToneIcon from "@mui/icons-material/CalculateTwoTone";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../../../styles/StyleMain.css";


export  function RightHeader() {
  const [post, setPost]:any = React.useState({});
  const [name, setName]:any = React.useState({});

  React.useEffect((() => setName(JSON.parse(localStorage.getItem('status') || '{}'))), []);
  
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  React.useEffect(() => {
    window.addEventListener("storage", logout);
  }, [logout]);
  return (
    // View for header middle section
    <Box className="fontsize" sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#ffb74d" }}>
        <Toolbar>
          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              position: "relative",
              left: 300,
            }}
            style={{ background: "white" }}
          >
          </FormControl>
         
          <Typography
            variant="h6"
            component="div"
            color={"primary"}
            align="center"
            sx={{ flexGrow: 1, position: "absolute", right: 10 }}
          >
            {name.name}
            <Typography variant="caption" component="div" color={"black"}>
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
              <IconButton size="small" color="primary" aria-label="logoutbutton" onClick={logout}>
                <LogoutOutlinedIcon fontSize="small" />
              </IconButton>
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
