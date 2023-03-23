import React from "react";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigator } from "../../routes/index";
import {LeftSideBar} from "../common/leftSideBar/index";
import {Footer} from "../common/footer/index";
import {Login} from "../login/index";


export  function Home() {

  const token:any = localStorage.getItem("token");
  if (!token) {
    return <Login/>;
  } 
  return (
    <Grid>
      <Router>
        <div className="flexrow">
          <LeftSideBar />
          <Grid sx={{ width: "100%" }}>
            <Navigator />
          </Grid>
        </div>
      </Router>
      <div>
        <Footer />
      </div>
    </Grid>
  );
}
