import React from "react";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigator } from "../../routes";
import {LeftSideBar} from "../common/leftSideBar";
import {Footer} from "../common/footer";
import {Login} from "../login";
import { Header } from "../common/header";


export  function Home() {

  const token:any = localStorage.getItem("token");
  if (!token) {
    return <Login/>;
  } 
  return (
    <Grid>
      <Router>
        <Grid>
          <Header/>
        </Grid>
        <div className="flexrow">
          <Grid >
            <LeftSideBar />
          </Grid>
          <Grid className="w100">
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
