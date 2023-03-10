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
import "../../styles/styleMain.css";
import getCustomerData from "../../services/Api";

export default function Header() {
  const [post, setPost] = React.useState({});
  const [name, setName] = React.useState({});

  React.useEffect(() => {
    setName(JSON.parse(localStorage.getItem("status")));
  }, []);

  React.useEffect(() => {
    getCustomerData(name.id).then((customerData) => {
      setPost(customerData);
    });
  }, [name]);
  
  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
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
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={parseInt(name.id, 10)}
              label="Name"
              >
              <MenuItem value={name.id}>{name.name}</MenuItem>
            </Select>
          </FormControl>
          <Typography
            variant="h10"
            component="div"
            color={"grey"}
            sx={{ flexGrow: 1, position: "relative", left: 300 }}
          >
            Offers
            <Typography variant="caption" component="div" color={"black"}>
              {post.offers}
            </Typography>
          </Typography>
          <Typography
            variant="h10"
            component="div"
            color={"grey"}
            sx={{ flexGrow: 1, position: "relative", left: 180 }}
          >
            Quotes
            <Typography variant="caption" component="div" color={"black"}>
              {post.quotes}
            </Typography>
          </Typography>
          <Typography
            variant="h10"
            component="div"
            color={"grey"}
            sx={{ flexGrow: 1, position: "relative", left: 60 }}
          >
            Orders
            <Typography variant="caption" component="div" color={"black"}>
              {post.orders}
            </Typography>
          </Typography>
          <Typography
            variant="h10"
            component="div"
            color={"red"}
            sx={{ flexGrow: 1, position: "relative", left: -60 }}
          >
            Fullfilments
            <Typography variant="caption" component="div" color={"black"}>
              {post.fullfilments}
            </Typography>
          </Typography>
          <Typography
            variant="h10"
            component="div"
            color={"red"}
            sx={{ flexGrow: 1, position: "relative", left: -180 }}
          >
            Pickups
            <Typography variant="caption" component="div" color={"black"}>
              {post.pickups}
            </Typography>
          </Typography>
          <Typography
            variant="h10"
            component="div"
            color={"red"}
            sx={{ flexGrow: 1, position: "relative", left: -300 }}
          >
            A/R
            <Typography variant="caption" component="div" color={"black"}>
              {post.ar}
            </Typography>
          </Typography>
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
              <IconButton
                size="small"
                color="primary"
                aria-label="menu"
                onClick={logout}
              >
                <LogoutOutlinedIcon fontSize="small" />
              </IconButton>
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
