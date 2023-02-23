import "./App.css";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import WD_headerMiddleSection from "./components/WD_header-middle-section";
import WD_LeftSideBar from "./components/WD_LeftSideBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WD_ProductGroupsPage from "./components/WD_ProductGroupsPage";
import WD_SalesGrid from "./components/WD_SalesGrid";
import WD_Settings from "./components/WD_Settings";
import WD_NewContract from "./components/WD_NewContract";
import WD_Dashboard from "./components/WD_Dashboard";
import WD_Orders from "./components/WD_Orders";
import WD_Login from "./components/WD_Login";
import WD_UseToken from "./components/WD_UseToken";
import WD_Footer from "./components/WD_Footer";
import WD_ButtonsDemo from"./components/WD_ButtonsDemo";
import WD_App from "./WD2.0";

function App() {
  return (
    <WD_App/>
  );
}

export default App;

