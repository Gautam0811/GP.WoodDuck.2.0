import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Paper, Select, MenuItem} from '@mui/material';
import ButtonsDemo from "./components/ButtonsDemo";
import {
  blueTheme,
  pinkTheme,
  yellowTheme,
  darkTheme,
  classicTheme,
} from "./theme/Themes";
import { ThemeProvider } from "@mui/material/styles";
import { useState} from 'react';

import MainApp from "./Main";
import Context from "./context/State";

function App() {
  
  const [theme, setTheme] = useState(classicTheme);

  const handleThemeChange = (event) => {
    switch (event.target.value) {
      case "classic":
        setTheme(classicTheme);
        break;
      case "blue":
        setTheme(blueTheme);
        break;
      case "pink":
        setTheme(pinkTheme);
        break;
      case "yellow":
        setTheme(yellowTheme);
        break;
      case "dark":
        setTheme(darkTheme);
        break;
      default:
        setTheme(classicTheme);
    }
  }

  return (
    <>
    <Context>
    <ThemeProvider theme={theme}>
      <Paper>
        <div>
          <Select value="Select Theme" onChange={handleThemeChange}>
            <MenuItem value="classic">Classic</MenuItem>
            <MenuItem value="blue">Blue</MenuItem>
            <MenuItem value="pink">Pink</MenuItem>
            <MenuItem value="yellow">Yellow</MenuItem>
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

