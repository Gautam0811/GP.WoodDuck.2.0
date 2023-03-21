import React from 'react'
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router} from "react-router-dom";
import { Navigator } from '../../config/routes/Index';


export default function Home() {
  return (
    <Grid>
        <Router>
            <Navigator/>
        </Router>
    </Grid>
  )
}

