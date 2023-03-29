// LeftHeaderSection
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
   
    <Box className="flex-grow">
      <AppBar className="bg-ffb74d position-static" >
        <Toolbar className ="leftHeader">
         
        <div className="mr-64">
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
          >
         </IconButton>
        </div>
          <Typography className="flex-grow font-black" variant="h6" component="div" >
         {envValue}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
