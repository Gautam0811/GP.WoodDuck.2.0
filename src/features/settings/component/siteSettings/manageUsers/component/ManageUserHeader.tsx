// WD_OrdersHeader
// Component Utility : The Component is created to render the header of the Orders page
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
//import { Typography } from '@mui/material';

export  function ManageUserHeader() {
  return (
    //This is the header for ManageUsers
  
    
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#f1f4fb",
        paddingTop: "15px",
        paddingBottom: "15px",
        width: "100%",
      }}
    >
      <Stack direction="row" spacing={1}>
      <Button href="#text-buttons">Manage Users</Button>
        <Stack direction="row" spacing={3}> 
        <Typography>
          <Button href="#text-buttons" startIcon={<AddIcon  />}>Add</Button>
          </Typography>
          <Button href="#text-buttons" startIcon={<CloseIcon />}>Close</Button>
        </Stack>
      </Stack>
      
      
    </div>
   
    
    
  );
}
