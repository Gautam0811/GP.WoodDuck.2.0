// WD_SalesGridHeader
// Component Utility : The Component is created to render the header of Sales grid on the sales grid page
// Author Mitravardhan Singh Raghav on 1-3-2023
// -------------------------
import {
  FormGroup,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";

export default function SalesGridHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
    </Menu>
  );

  return (
    <Box className="fontsize" sx={{ flexGrow: 1,}}>
      <AppBar position="static" style={{ background: "#ffffff" }}>
        <Toolbar>
          <Typography variant="caption" color="blue">Mode</Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Order Entry</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Order Entry"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={<Switch color="primary" defaultChecked />}
              label="Show IDs"
            />
          </FormGroup>
          <div>
          <Typography variant="caption" color="blue">Show IDs</Typography>
          </div>
          <Typography variant="caption" color="blue">Mills</Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">east</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="east"
            >
              <MenuItem value={10}>north</MenuItem>
              <MenuItem value={20}>south</MenuItem>
              <MenuItem value={30}>west</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="caption" color="blue">Products</Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">2x4</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="2x4"
            >
              <MenuItem value={10}>2x5</MenuItem>
              <MenuItem value={20}>3x4</MenuItem>
              <MenuItem value={30}>4x4</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="open drawer"
            sx={{ mr: 10 }}
          >
            <MenuIcon />
            <Typography variant="caption" component="div" color={"blue"}>
              Start Over
            </Typography>
          </IconButton>
          <Box />
          <Box>
            <IconButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary"
            >
              <AccountCircle />
              <Typography variant="caption" component="div" color={"blue"}>
                Templates
              </Typography>
            </IconButton>
            {/* <font color="blue">Templates</font> */}
          </Box>

          <Box>
            <IconButton
              size="large"
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </Box>
  );
}
