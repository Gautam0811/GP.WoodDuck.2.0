// WD_NewContractMainSection
// Component Utility : The Component is created to render the body of the New Contracts page for the app
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import { useEffect, useState} from 'react';

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
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "../../styles/WD_StyleMain.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import Paper from '@mui/material/Paper';
import WD_ProductButton from '../buttons/ProductButton';
import { createTheme} from '@mui/material/styles';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../../theme/GlobalStyles';
import {useTheme} from '../../theme/useTheme';

export default function NewContractMainSection() {

  //for R/L Tag
  const [select, setSelect] = React.useState('None Selected');

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const StyledTableCell = styled(TableCell)({
    padding: 7,
    fontSize: "11px",
    color: "#005fa8",
    textAlign: 'center',
  })

  const StyledFormControlLabel = styled(FormControlLabel)({
    color: "#005fa8",
  })

  const StyledTypography = styled(Typography) ({
    color: "#005fa8",
    fontSize: "12px",
  })
  
  const Container = styled.div`
  margin: 5px auto 5px auto;
`;



const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <Grid
              sx={{
                alignItems: "center",
              }}
            >
              {/* div for whole section */}
              <div
                style={{
                  padding: "25px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {/* div for left side */}
                <div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <StyledTypography color="primary">SHIP MODE</StyledTypography>
                    <ButtonGroup
                      color="primary"
                      size="small"
                      aria-label="small button group"
                    >
                      <Button key="Truck">Truck</Button>
                      <Button key="Rail">Rail</Button>
                      <Button key="CPU">CPU</Button>
                    </ButtonGroup>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px 0px",
                    }}
                  >
                    <StyledTypography color="primary">
                      SHIP OPTIONS
                    </StyledTypography>
                    <FormGroup>
                      <StyledFormControlLabel
                        control={<Switch color="primary" />}
                        label="Truck tarp"
                      />
                    </FormGroup>
                    <FormGroup>
                      <StyledFormControlLabel
                        control={<Switch color="primary" />}
                        label="Paper wrap"
                      />
                    </FormGroup>
                    <FormGroup>
                      <StyledFormControlLabel
                        control={<Switch color="primary" />}
                        label="Bar code"
                      />
                    </FormGroup>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px 0px",
                    }}
                  >
                    <StyledTypography color="primary">
                      SHIP TOs <Typography color="error">*</Typography>
                    </StyledTypography>
                    <select style={{ width: "130px", height: "30px" }}>
                      <option></option>
                      <option>DAVID KLEKAMP</option>
                      <option>Hannah</option>
                    </select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px 0px",
                    }}
                  >
                    <StyledTypography color="primary">FOB</StyledTypography>
                    <input
                      style={{ width: "200px", height: "30px" }}
                      type="text"
                      placeholder="4-FOB DESTINATION FREIGHT ALLOWED & PREPAID"
                    ></input>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px 0px",
                    }}
                  >
                    <StyledTypography color="primary">
                      PRICING TYPE
                    </StyledTypography>
                    <input
                      style={{ width: "150px", height: "30px" }}
                      type="text"
                      placeholder="PTS"
                    ></input>
                  </div>
                </div>
                {/* div for right part of the ship mode div */}
                <div style={{ paddingLeft: "25px" }}>
                  {/* div for primary vmi and vmi forecast source */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          paddingBottom: "15px",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        Primary VMI Location
                        <Typography display="inline" color="error">
                          *
                        </Typography>
                      </Typography>
                      <input style={{ width: "170px", height: "30px" }}></input>
                      <span
                        style={{
                          paddingTop: "50px",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        <Typography
                          style={{
                            fontSize: "15px",
                            fontWeight: "bold",
                          }}
                        >
                          Monthly Products
                        </Typography>
                      </span>
                    </div>
                    <div
                      style={{
                        paddingLeft: "50px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          paddingBottom: "15px",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
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
                  <div style={{ paddingTop: "30px" }}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>
                              <StyledTypography display="inline">
                                MILL
                              </StyledTypography>
                              <Typography display="inline" color="error">
                                *
                              </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                              <StyledTypography display="inline">
                                PERCENTAGE
                              </StyledTypography>
                              <Typography display="inline" color="error">
                                *
                              </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                              <StyledTypography display="inline">
                                PRODUCT ID
                              </StyledTypography>
                              <Typography display="inline" color="error">
                                *
                              </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                              <StyledTypography>
                                PRODUCT DESCRIPTION
                              </StyledTypography>
                            </StyledTableCell>
                            <StyledTableCell>
                              <StyledTypography display="inline">
                                R/L TAG
                              </StyledTypography>
                              <Typography display="inline" color="error">
                                *
                              </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                              <StyledTypography>ADDER</StyledTypography>
                            </StyledTableCell>
                            <StyledTableCell>
                              <StyledTypography>ADDER</StyledTypography>
                              <StyledTypography>+CHARGES</StyledTypography>
                            </StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <StyledTableCell>
                              <input></input>
                            </StyledTableCell>

                            <StyledTableCell>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                }}
                              >
                                <div>
                                  <input
                                    style={{
                                      backgroundColor: "#ffcbd1",
                                      width: "50px",
                                      height: "20px",
                                    }}
                                  ></input>
                                </div>
                                <div>
                                  <ListItemButton>
                                    <AddCircleIcon />
                                  </ListItemButton>
                                </div>
                              </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <input
                                placeholder="Product.."
                                style={{
                                  backgroundColor: "#dfe5eb",
                                  width: "60px",
                                }}
                              ></input>
                            </StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right">
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
                                  <MenuItem value="">
                                    <em>None Selected</em>
                                  </MenuItem>
                                  <MenuItem>David Klekamp</MenuItem>
                                  <MenuItem>Hannah</MenuItem>
                                </Select>
                              </FormControl>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              <input style={{ width: "50px" }}></input>
                            </StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right">
                              <ListItemButton>
                                <CancelSharpIcon />
                              </ListItemButton>
                            </StyledTableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <div style={{ paddingTop: "30px" }}>
                    <WD_ProductButton />
                  </div>
                </div>
              </div>
            </Grid>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}