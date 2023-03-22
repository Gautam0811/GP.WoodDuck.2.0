import React from "react";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigator } from "../../routes/index";
import LeftSideBar from "../../globalPages/common/LeftSideBar";
import Footer from "../../globalPages/common/Footer";
import Login from "../login/Login";


export default function Home() {

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
