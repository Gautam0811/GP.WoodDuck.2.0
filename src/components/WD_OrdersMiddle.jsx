import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ListItemButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { SettingsApplicationsRounded } from "@mui/icons-material";

export default function WD_OrdersMiddle() {
  const [mill, setMill] = React.useState("");

  const handleChangeMill = (event) => {
    setMill(event.target.value);
  };

  const [customer, setCustomer] = React.useState("");

  const handleChangeCustomer = (event) => {
    setCustomer(event.target.value);
  };

  const [shipToState, setShipToState] = React.useState("");

  const handleChangeShipToState = (event) => {
    setShipToState(event.target.value);
  };

  const [shipToCity, setShipToCity] = React.useState("");

  const handleChangeShipToCity = (event) => {
    setShipToCity(event.target.value);
  };

  const [shipMode, setShipMode] = React.useState("");

  const handleChangeShipMode = (event) => {
    setShipMode(event.target.value);
  };

  const [salesperson, setSalesperson] = React.useState("");

  const handleChangeSalesperson = (event) => {
    setSalesperson(event.target.value);
  };

  const [orderDate, setOrderDate] = React.useState("");

  const handleChangeOrderDate = (event) => {
    setOrderDate(event.target.value);
  };

  const [promiseDate, setPromiseDate] = React.useState("");

  const handleChangePromiseDate = (event) => {
    setPromiseDate(event.target.value);
  };

  const [readyDate, setReadyDate] = React.useState("");

  const handleChangeReadyDate = (event) => {
    setReadyDate(event.target.value);
  };

  const [buyers, setBuyers] = React.useState("");

  const handleChangeBuyers = (event) => {
    setBuyers(event.target.value);
  };

  const [status, setStatus] = React.useState("");

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const [dimensions, setDimensions] = React.useState("");

  const handleChangeDimensions = (event) => {
    setDimensions(event.target.value);
  };
  const [grade, setGrade] = React.useState("");

  const handleChangeGrade = (event) => {
    setGrade(event.target.value);
  };
  const [services, setServices] = React.useState("");

  const handleChangeServices = (event) => {
    setServices(event.target.value);
  };
  
  const [pricingCode, setPricingCode] = React.useState("");

  const handleChangePricingCode = (event) => {
    setPricingCode(event.target.value);
  };

  return (
    <Grid sx={{ width: "100%" }}>
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <Grid>
          <div
            style={{
              border: "1px solid gray",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <input
              style={{ border: "0px solid" }}
              placeholder="Order id..."
            ></input>
            <ListItemButton sx={{ p: 0 }}>
              <SearchIcon />
            </ListItemButton>
          </div>
        </Grid>

        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120, color:'#005fa8' }} size="small">
            <InputLabel  id="demo-select-small">Mill</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={mill}
              label="Mill"
              onChange={handleChangeMill}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Customer</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={customer}
              label="Customer"
              onChange={handleChangeCustomer}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>David Klekamp</MenuItem>
              <MenuItem value={20}>Hannah</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <div
            style={{
              border: "1px solid gray",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <input
              style={{ border: "0px solid" }}
              placeholder="Customer PO..."
            ></input>
            <ListItemButton sx={{ p: 0 }}>
              <SearchIcon />
            </ListItemButton>
          </div>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Ship To State</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={shipToState}
              label="Ship To State"
              onChange={handleChangeShipToState}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Ship To City</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={shipToCity}
              label="Ship To City"
              onChange={handleChangeShipToCity}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Ship Mode</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={shipMode}
              label="Ship Mode"
              onChange={handleChangeShipMode}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Salesperson</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={salesperson}
              label="Salesperson"
              onChange={handleChangeSalesperson}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Order Date</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={orderDate}
              label="Order Date"
              onChange={handleChangeOrderDate}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Promise Date</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={promiseDate}
              label="Promise Date"
              onChange={handleChangePromiseDate}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Ready Date</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={readyDate}
              label="Ready Date"
              onChange={handleChangeReadyDate}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Buyers</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={buyers}
              label="Buyers"
              onChange={handleChangeBuyers}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Status</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={status}
              label="Status"
              onChange={handleChangeStatus}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Dimensions</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={dimensions}
              label="Dimensions"
              onChange={handleChangeDimensions}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Grade</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={grade}
              label="Grade"
              onChange={handleChangeGrade}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Services</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={services}
              label="Services"
              onChange={handleChangeServices}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Pricing Code</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={pricingCode}
              label="Pricing Code"
              onChange={handleChangePricingCode}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>

      </Grid>
      <Grid sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <span>Add Filters</span>
      </Grid>
    </Grid>
  );
}
