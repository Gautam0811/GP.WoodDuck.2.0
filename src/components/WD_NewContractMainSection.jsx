import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import WD_ExitButton from "../components/Buttons/WD_ExitButton";
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
} from "@mui/material";
import { styled } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "../styles/WD_NewContractHeader.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import Paper from '@mui/material/Paper';
import WD_ProductButton from '../components/Buttons/WD_ProductButton';

export default function WD_NewContractMainSection() {

  //for R/L Tag
  const [select, setSelect] = React.useState('None Selected');

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const StyledTableCell = styled(TableCell)({
    padding: 7,
  })

  return (
    //<div style={{ width:'1000px',  display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center', backgroundColor: '#f1f4fb'}}>
    <Grid
      sx={{
        width: "100%",
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
            <span
              className="fontsize"
              style={{ paddingBottom: "10px", color: "#005fa8" }}
            >
              SHIP MODE
            </span>
            <ButtonGroup size="small" aria-label="small button group">
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
            <span className="fontsize" style={{ color: "#005fa8" }}>
              SHIP OPTIONS
            </span>
            <FormGroup>
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Truck tarp"
                style={{ color: "#005fa8" }}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Paper wrap"
                style={{ color: "#005fa8" }}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Bar code"
                style={{ color: "#005fa8" }}
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
            <span className="fontsize" style={{ color: "#005fa8" }}>
              SHIP TOs <span style={{ color: "red" }}>*</span>
            </span>
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
            <span className="fontsize" style={{ color: "#005fa8" }}>
              FOB
            </span>
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
            <span className="fontsize" style={{ color: "#005fa8" }}>
              PRICING TYPE
            </span>
            <input
              style={{ width: "150px", height: "30px" }}
              type="text"
              placeholder="PTS"
            ></input>
          </div>
        </div>
        {/* div for right part of the ship mode div */}
        <div style={{ paddingLeft: "30px"}}>
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
              <span
                style={{
                  paddingBottom: "15px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Primary VMI Location <span style={{ color: "red" }}>*</span>
              </span>
              <input style={{ width: "170px", height: "30px" }}></input>
              <span
                style={{
                  paddingTop: "50px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Monthly Products
              </span>
            </div>
            <div
              style={{
                paddingLeft: "50px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  paddingBottom: "15px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                VMI Forecast Source <span style={{ color: "red" }}>*</span>
              </span>
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
                    <StyledTableCell
                      style={{ fontSize: "11px", color: "#005fa8" }}
                      align="center"
                    >
                      MILL<span style={{ color: "red" }}>*</span>
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ fontSize: "11px", color: "#005fa8" }}
                      align="center"
                    >
                      PERCENTAGE<span style={{ color: "red" }}>*</span>
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ fontSize: "11px", color: "#005fa8" }}
                      align="center"
                    >
                      PRODUCT ID<span style={{ color: "red" }}>*</span>
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ fontSize: "11px", color: "#005fa8" }}
                      align="center"
                    >
                      PRODUCT DESCRIPTION
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ fontSize: "11px", color: "#005fa8" }}
                      align="center"
                    >
                      R/L TAG<span style={{ color: "red" }}>*</span>
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ fontSize: "11px", color: "#005fa8" }}
                      align="center"
                    >
                      ADDER
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ fontSize: "11px", color: "#005fa8" }}
                      align="center"
                    >
                      ADDER <br /> +CHARGES
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ fontSize: "11px", color: "#005fa8" }}
                      align="center"
                    ></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      <input></input>
                    </StyledTableCell>

                    <StyledTableCell style={{display: 'flex', flexDirection: 'row',  alignItems: 'center'}} >
                      <input
                        style={{ backgroundColor: "#ffcbd1", width: "50px", height: '20px' }}
                      ></input>
                      <ListItemButton>
                        <AddCircleIcon />
                      </ListItemButton>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <input
                        placeholder="Product.."
                        style={{ backgroundColor: "#dfe5eb", width: "60px" }}
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
  );
}
