// WD_Footer
// Component Utility : The Component is created to render a footer on each page in the app
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import {Typography} from '@mui/material';

export default function Footer() {
  return (
    <div className="fontsize p-28 justify-center flexrow" >
        <Typography>© 2023 Georgia-Pacific. All rights reserved.</Typography> < br />
        <Typography>Component Time: / API: </Typography>
    </div>
  );
}

