import { blueTheme, pinkTheme, purpleTheme, darkTheme } from './Themes';
import { ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";

import {
  FormControl,
  RadioGroup,
  Radio,
  FormGroup,
  FormControlLabel,
  Switch,
  MenuItem,
  Select,
  ListItemButton,
  Typography,
  Paper,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "../styles/WD_StyleMain.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import WD_ProductButton from '../components/Buttons/WD_ProductButton';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { ThemeProvider } from "styled-components";
// import { styled, ThemeProvider } from '@mui/material/styles';
import WebFont from 'webfontloader';
//import { GlobalStyles } from '../theme/GlobalStyles';
// import GlobalStyles from '@mui/material/GlobalStyles';

//import {useTheme} from '../theme/useTheme';
import { useTheme, createTheme, styled } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { deepOrange, grey } from '@mui/material/colors';



export default function MainComp(){
    const [theme, setTheme] = useState(blueTheme);

const handleThemeChange = (event) => {
  switch (event.target.value) {
    case 'blue':
      setTheme(blueTheme);
      break;
    case 'pink':
      setTheme(pinkTheme);
      break;
    case 'purple':
      setTheme(purpleTheme);
      break;
    case 'dark':
      setTheme(darkTheme);
      break;
    default:
      setTheme(blueTheme);
  }
};
    return (
      <ThemeProvider theme={theme}>
        <Select value="Select Theme" onChange={handleThemeChange}>
          <MenuItem value="blue">Blue</MenuItem>
          <MenuItem value="pink">Pink</MenuItem>
          <MenuItem value="purple">Purple</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
          {/* <GlobalStyles /> */}
          <Paper>
          <div className="margin-5-auto">
            <Grid
              sx={{
                alignItems: "center",
              }}
            >
              {/* div for whole section */}
              <div className="p-24 flexrow">
                {/* div for left side */}
                <div>
                  <div>
                    <Typography className="font-005FA8">SHIP MODE</Typography>
                    <ButtonGroup
                      size="small"
                      aria-label="small button group"
                    >
                      <Button key="Truck">Truck</Button>
                      <Button key="Rail">Rail</Button>
                      <Button key="CPU">CPU</Button>
                    </ButtonGroup>
                  </div>

                  <div className="p-16-0">
                    <Typography className="font-005FA8">SHIP OPTIONS</Typography>
                    <FormGroup>
                      <FormControlLabel
                        className="font-005FA8"
                        control={<Switch/>}
                        label="Truck tarp"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        className="font-005FA8"
                        control={<Switch />}
                        label="Paper wrap"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        className="font-005FA8"
                        control={<Switch />}
                        label="Bar code"
                      />
                    </FormGroup>
                  </div>
                  <div className="p-16-0">
                    <Typography className="font-005FA8">
                      SHIP TOs <Typography color="error">*</Typography>
                    </Typography>
                    <select className="w150-h30">
                      <option></option>
                      <option>DAVID KLEKAMP</option>
                      <option>Hannah</option>
                    </select>
                  </div>
                  <div className="p-16-0">
                    <Typography className="font-005FA8">FOB</Typography>
                    <input
                      className="w200-h30"
                      type="text"
                      placeholder="4-FOB DESTINATION FREIGHT ALLOWED & PREPAID"
                    ></input>
                  </div>
                  <div className="p-16-0">
                    <Typography className="font-005FA8">PRICING TYPE</Typography>
                    <input
                      className="w150-h30"
                      type="text"
                      placeholder="PTS"
                    ></input>
                  </div>
                </div>
                {/* div for right part of the ship mode div */}
                <div className="pl-28">
                  {/* div for primary vmi and vmi forecast source */}
                  <div className="flexrow">
                    <div>
                      <Typography className="font-bold fs-16 pb-16">
                        Primary VMI Location
                        <Typography display="inline" color="error">
                          *
                        </Typography>
                      </Typography>
                      <input className="w170-h30"></input>
                      <span>
                        <Typography className="pt-40 font-bold fs-16">
                          Monthly Products
                        </Typography>
                      </span>
                    </div>
                    <div className="pl-28">
                      <Typography className="font-bold fs-16">
                        VMI Forecast Source
                        <Typography display="inline" color="error">
                          *
                        </Typography>
                      </Typography>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="forecast"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            value="forecast"
                            control={<Radio size="sm" />}
                            label="Forecast"
                          />
                          <FormControlLabel
                            value="usage"
                            control={<Radio size="sm" />}
                            label="Usage"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                  <div className="pt-28">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell className="upper-cell">
                              <Typography>MILL</Typography>
                              <Typography color="error">
                                *
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography >
                                PERCENTAGE
                              </Typography>
                              <Typography color="error">
                                *
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography >
                                PRODUCT ID
                              </Typography>
                              <Typography display="inline" color="error">
                                *
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>
                                PRODUCT DESCRIPTION
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>R/L TAG</Typography>
                              <Typography color="error">
                                *
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>ADDER</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>ADDER</Typography>
                              <Typography>+CHARGES</Typography>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <input className="mill-input-box"></input>
                            </TableCell>

                            <TableCell>
                              <div className="flex-row-center">
                                <div>
                                  <input className="red-input-box"></input>
                                </div>
                                <div>
                                  <ListItemButton>
                                    <AddCircleIcon />
                                  </ListItemButton>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <input
                                placeholder="Product.."
                                className="gray-input-box"
                              ></input>
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                              <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120 }}
                              >
                                <Select
                                  labelId="demo-simple-select-standard-label"
                                  id="demo-simple-select-standard"
                                //   value={select}
                                //   onChange={handleChange}
                                  label="None Selected"
                                >
                                  <MenuItem value="">
                                    <em>None Selected</em>
                                  </MenuItem>
                                  <MenuItem>David Klekamp</MenuItem>
                                  <MenuItem>Hannah</MenuItem>
                                </Select>
                              </FormControl>
                            </TableCell>
                            <TableCell>
                              <input className="adder-input-box"></input>
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                              <ListItemButton>
                                <CancelSharpIcon />
                              </ListItemButton>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <div className="pt-28">
                    <WD_ProductButton />
                  </div>
                </div>
              </div>
            </Grid>
          </div>
          </Paper>
      </ThemeProvider>
    );
}
