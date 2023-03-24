// Profile Modal component
// Component Utility : This Component is created for displaying profile information after a user clicks on his/her Profile Avatar
// Author Ananya Dhar on 24-3-2023
// -------------------------


import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "../../../../../styles/StyleMain.css";
import {Grid, Stack, Avatar, Modal, Button} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';



export function Profile() {
  const [post, setPost]: any = React.useState({});
  const [name, setName]: any = React.useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // React.useEffect((() => setName(JSON.parse(localStorage.getItem('status') || '{}'))), []);

  React.useEffect(() => {
    function fetchName() {
      let nameFetch = JSON.parse(localStorage.getItem("status") || "{}");
      setName(nameFetch);
    }
    fetchName();
  }, []);

  var nameByChar = JSON.parse(
    localStorage.getItem("status") || "{}"
  ).name.charAt(0);

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
        <Stack spacing={2}>
          <Avatar className="fs-16">{nameByChar}</Avatar>
        </Stack>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-header-right">
          <div className="flex-end">
            <Button onClick={logout}>
              <LogoutIcon />
            </Button>
          </div>
          <Typography component="h2" color="primary">
            {name.name}
          </Typography>
          <Typography color="primary">Email: ananydhar@gapac.com</Typography>
          <Typography color="primary">Permission Set: Administrator</Typography>
        </Box>
      </Modal>
    </Grid>
  );
}