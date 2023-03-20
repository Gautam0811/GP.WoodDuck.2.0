import React from 'react'
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router} from "react-router-dom";
import {Navbar} from "../../config/routes/Index"


export default function MainApp() {
  return (
    <Grid>
        <Router>
            <Navbar/>
        </Router>
    </Grid>
  )
}

