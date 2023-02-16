import { Divider, Grid, Typography } from "@mui/material";
import * as React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import red from "@material-ui/core/colors/red";


export default function LBox () {
    return(<Grid  >
    <Grid sx={{fontWeight:"Bold",fontSize:14,display:"flex",flexDirection:"row",pl:1,pt:1.5,mb:-3.5} } > <CancelIcon style={{ color: "lightgrey",fontSize:"12px"}} sx={{pr:1,pt:0.5}}/>LOAD # 1 - 
    <Grid sx={{pl:2,pt:0,pb:-2,fontWeight:"light"}}> Customer Pickup</Grid>
    <Grid ><CancelIcon style={{ color: "lightgrey",fontSize:"20px" }} sx={{pl:9}}/> </Grid>
    </Grid><Divider sx={{pt:5,mb:-6}}/>
    </Grid>
    )};