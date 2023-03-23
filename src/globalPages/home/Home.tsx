import React from "react";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigator } from "../../routes/index";
import {LeftSideBar} from "../../globalPages/common/leftSideBar";
import {Footer} from "../../globalPages/common/footer";
import {Login} from "../login";
import {Header} from "../../globalPages/common/header";

export function Home() {
  const token: any = localStorage.getItem("token");
  if (!token) {
    return <Login />;
  }
  return (
    <Grid>
      <Router>
        <Grid>
          <Header />
        </Grid>
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
