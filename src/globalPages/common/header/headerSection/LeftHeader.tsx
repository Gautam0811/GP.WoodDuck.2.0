// WD_header-middle-section
// Component Utility : The Component created for rendering a header navigation bar for all the pages in the app
// Author Krishna Choudhary on 3-23-2023
// -------------------------
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import "../../../../styles/StyleMain.css";


export  function LeftHeader() {
  
  const envValue =process.env.REACT_APP_ENV;
  
  return (
    // View for Left header section section
   
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#ffb74d" }}>
        <Toolbar className ="leftHeader">
         
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 8 }}
          >
         </IconButton>
          <Typography color={"black"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
         {envValue}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
