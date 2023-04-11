// Profile Modal component
// Component Utility : This Component is created for displaying profile information after a user clicks on his/her Profile Avatar.
// Author Ananya Dhar on 24-3-2023
// -------------------------

import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "../../../../../styles/StyleMain.css";
import {Grid, Stack, Avatar, Modal, Button} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';


export function Profile() {
  const [post, setPost]: any = React.useState({});
  const [name, setName]: any = React.useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userInfo= useSelector((state:any) => state.loginInfo);
  console.log("userInfo"+userInfo);
  const userData = userInfo.find(
    (user: { userName: any }) => user.userName === JSON.parse(localStorage.getItem("status") || "{}").name
    
    // console.log("user.userName"+user.userName)
    
  );
  console.log("userData :"+userData.email);

  // React.useEffect((() => setName(JSON.parse(localStorage.getItem('status') || '{}'))), []);

  React.useEffect(() => {
    function fetchName() {
      let nameFetch = JSON.parse(localStorage.getItem("status") || "{}");
      setName(nameFetch);
    }
    fetchName();
  }, []);

  // var nameByChar =
  //   JSON.parse(localStorage.getItem("status") || "{}").firstname.charAt(0) +
  //   JSON.parse(localStorage.getItem("status") || "{}").lastname.charAt(0);

  var nameByChar;
    if(nameByChar !== null && nameByChar !== '') {
      nameByChar =
      JSON.parse(localStorage.getItem("status") || "{}").firstname.charAt(0) +
      JSON.parse(localStorage.getItem("status") || "{}").lastname.charAt(0);
   }

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  React.useEffect(() => {
    window.addEventListener("storage", logout);
  }, [logout]);

  return (
    <Grid>
      <Button onClick={handleOpen}>
        <Stack spacing={1}>
          <Avatar className="bg-005fa8 fs-16">{nameByChar}</Avatar>
        </Stack>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-header-right ">
          <div className="flex-end ">
            <Button className="col-005fa8" onClick={logout}>
              <LogoutIcon />
            </Button>
          </div>
          <Typography component="h2" className="col-005fa8">
            {name.firstname + " " + name.lastname}
          </Typography>
          <Typography className="col-005fa8">{userData && userData.email?userData.email:""}</Typography>
          <Typography className="col-005fa8">Permission Set: {userData && userData.permissionSet ? userData.permissionSet:""}</Typography>
        </Box>
      </Modal>
    </Grid>
  );
}