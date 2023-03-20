import React from 'react'
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Routers} from "../../config/routes/Index"


export default function MainApp() {
  return (
    <Grid>
        <Router>
            <Routers/>
        </Router>
    </Grid>
  )
}

