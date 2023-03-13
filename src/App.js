import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Paper, Select, MenuItem} from '@mui/material';
import WD_ButtonsDemo from "./components/WD_ButtonsDemo";
import {
  blueTheme,
  pinkTheme,
  purpleTheme,
  darkTheme,
  lightTheme,
} from "./theme/Themes";
import { ThemeProvider } from "@mui/material/styles";
import { useState} from 'react';

import MainApp from "./Main";
import Context from "./context/State";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const handleThemeChange = (event) => {
    switch (event.target.value) {
      case "light":
        setTheme(lightTheme);
        break;
      case "blue":
        setTheme(blueTheme);
        break;
      case "pink":
        setTheme(pinkTheme);
        break;
      case "purple":
        setTheme(purpleTheme);
        break;
      case "dark":
        setTheme(darkTheme);
        break;
      default:
        setTheme(blueTheme);
    }
  }
  
  return (
    <>
    <Context>
    <ThemeProvider theme={theme}>
      <Paper>
        <div>
          <Select value="Select Theme" onChange={handleThemeChange}>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="blue">Blue</MenuItem>
            <MenuItem value="pink">Pink</MenuItem>
            <MenuItem value="purple">Purple</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </div>
        <MainApp />
      </Paper>
    </ThemeProvider> 
    </Context>
    </>
  );
}

export default App;

