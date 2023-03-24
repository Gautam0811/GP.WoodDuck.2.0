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
import {Grid, Stack, Avatar, Modal, Button} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';



export  function RightHeader() {
  const [post, setPost]:any = React.useState({});
  const [name, setName]:any = React.useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // React.useEffect((() => setName(JSON.parse(localStorage.getItem('status') || '{}'))), []);

  //React.useEffect(() => setName(JSON.parse(localStorage.getItem('status') || '{}')), []);

  React.useEffect(() => {
     function fetchName() {
      let nameFetch= JSON.parse(localStorage.getItem('status') || '{}')
      setName(nameFetch)
    }
    fetchName()
  }, [])

  var nameByChar= JSON.parse(localStorage.getItem('status') || '{}').name.charAt(0)


  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  React.useEffect(() => {
    window.addEventListener("storage", logout);
  }, [logout]);
  return (
    // View for header middle section
    <Box className="fs-12 flex-grow">
      <AppBar className="bg-ffb74d position-static"  >
        <Toolbar>
          <FormControl></FormControl>

          <Typography
            variant="h6"
            component="div"
            color={"primary"}
            className="header-right"
            
          >
            <Grid className="flexrow">
              <Typography>{name.name}</Typography>
              <Grid>
                <Button onClick={handleOpen}>
                  <Stack spacing={2}>
                    <Avatar className="w25-h25 fs-16">{nameByChar}</Avatar>
                  </Stack>
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                >
                  <Box className="modal-header-right">
                  <div className="flex-end">
                  <Button onClick={logout}><LogoutIcon /></Button>
                  </div>
                    <Typography
                      variant="h6"
                      component="h2"
                      color="primary"
                    >
                      {name.name}
                    </Typography>
                    <Typography color="primary">
                      Email :
                    </Typography>
                    <Typography color="primary">
                      Permission Set : 
                    </Typography>
                  </Box>
                </Modal>
              </Grid>
            </Grid>
            <Typography className="font-black" variant="caption" component="div" >
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
                aria-label="logoutbutton"
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
