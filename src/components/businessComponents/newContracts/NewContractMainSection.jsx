// WD_NewContractMainSection
// Component Utility : The Component is created to render the body of the New Contracts page for the app
// Author Ananya Dhar on 1-3-2023
// -------------------------
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import WD_ProductButton from "../../buttons/ProductButton";
import { WD_RLTag, WD_ShipToDrop } from "../../../services/Data";

import "../../../styles/styleMain.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import ProductButton from '../../buttons/ProductButton';

export default function WD_NewContractMainSection() {

  //for R/L Tag
  const [select, setSelect] = React.useState('None Selected');

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  // const [theme, setTheme] = useState(lightTheme);

  // const handleThemeChange = (event) => {
  //   switch (event.target.value) {
  //     case "light":
  //       setTheme(lightTheme);
  //       break;
  //     case "blue":
  //       setTheme(blueTheme);
  //       break;
  //     case "pink":
  //       setTheme(pinkTheme);
  //       break;
  //     case "purple":
  //       setTheme(purpleTheme);
  //       break;
  //     case "dark":
  //       setTheme(darkTheme);
  //       break;
  //     default:
  //       setTheme(blueTheme);
  //   }
  // };
  return (
    // <ThemeProvider theme={theme}>
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
                  <Typography>SHIP MODE</Typography>
                  <ButtonGroup size="small" aria-label="small button group">
                    <Button key="Truck">Truck</Button>
                    <Button key="Rail">Rail</Button>
                    <Button key="CPU">CPU</Button>
                  </ButtonGroup>
                </div>

                <div className="p-16-0">
                  <Typography>SHIP OPTIONS</Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch />}
                      label="Truck tarp"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Paper wrap"
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Bar code"
                    />
                  </FormGroup>
                  
                </div>
                <div className="p-16-0">
                  <Typography>
                    SHIP TOs <Typography color="error">*</Typography>
                  </Typography>
                  <select className="w150-h30">
                  {WD_ShipToDrop.map((row) => (<option value={row.value}>{row.value}</option>))}
                  </select>
                </div>
                <div className="p-16-0">
                  <Typography>FOB</Typography>
                  <input
                    className="w200-h30"
                    type="text"
                    placeholder="4-FOB DESTINATION FREIGHT ALLOWED & PREPAID"
                  ></input>
                </div>
                <div className="p-16-0">
                  <Typography>PRICING TYPE</Typography>
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
                  {/* <div>
                    <Select value="Select Theme" onChange={handleThemeChange}>
                      <MenuItem value="light">Light</MenuItem>
                      <MenuItem value="blue">Blue</MenuItem>
                      <MenuItem value="pink">Pink</MenuItem>
                      <MenuItem value="purple">Purple</MenuItem>
                      <MenuItem value="dark">Dark</MenuItem>
                    </Select>
                  </div> */}
                </div>
                <div className="pt-28">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <Typography>MILL</Typography>
                            <Typography color="error">*</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>PERCENTAGE</Typography>
                            <Typography color="error">*</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>PRODUCT ID</Typography>
                            <Typography display="inline" color="error">
                              *
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>PRODUCT DESCRIPTION</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>R/L TAG</Typography>
                            <Typography color="error">*</Typography>
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
                                value={select}
                                onChange={handleChange}
                                label="None Selected"
                              >
                                {WD_RLTag.map((row) => (<MenuItem value={row.value}>{row.value}</MenuItem>))}
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
    // </ThemeProvider>
  );
}

