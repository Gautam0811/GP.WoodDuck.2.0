// WD_NewContractHeader
// Component Utility : The Component is created to provide a header for the New Contracts page
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from "@mui/material/Grid";
import { Paper, Typography, ListItemButton, FormGroup, FormControlLabel, Switch } from "@mui/material";
import WD_AddContractButton from "../components/Buttons/WD_AddContractButton";
import '../styles/WD_StyleMain.css';
import {WD_BuyerDropdown, WD_CustomerDropdown} from "../services/WD_NewContract";

import ExitButton from "../../buttons/ExitButton";
import { ListItemButton, FormGroup, FormControlLabel, Switch } from "@mui/material";
import AddContractButton from "../../buttons/AddContractButton";
import '../../../styles/styleMain.css';

export default function WD_NewContractHeader() {
  const [select, setSelect] = React.useState('None Selected');

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    //for header
    <Grid className="new-contract-header">
      {/* Top grid */}
      <Grid className="flexrow justify-space-between">
        <div className="flex-row-center">
          <WD_ExitButton />
          <Typography className="fs-16 font-bold">New Contracts</Typography>
          <FormGroup color="primary" className="pl-20">
            <FormControlLabel
              color="primary"
              control={<Switch color="primary" defaultChecked />}
              label="Active"
            />
          </FormGroup>
        </div>
        <div className="flex-row-center gray pr-16">
          <ListItemButton>Cancel</ListItemButton>
          <WD_AddContractButton className="red" />
          <AddContractButton/>
        </div>
      </Grid>

      {/* bottom grid */}
      <Grid>
        <div className="p-24 flex-row-center justify-space-between">
          <div className="flexcolumn">
            <Typography className="fontsize" color="primary">
              CONTRACT TYPE
            </Typography>
            <ButtonGroup size="small" aria-label="small button group">
              <Button key="Monthly">Monthly</Button>
              <Button key="Automatic">Automatic</Button>
              <Button key="VMI">VMI</Button>
            </ButtonGroup>
          </div>
          <div className="pl-16 flexcolumn">
            <Typography className="fontsize" color="primary">
              CUSTOMER <span style={{ color: "red" }}>*</span>
            </Typography>
            <select className="w130-h30">
              {WD_CustomerDropdown.map((row) => (
                <option value={row.value}>{row.value}</option>
              ))}
            </select>
          </div>
          <div className="pl-16 flexcolumn">
            <Typography className="fontsize" color="primary">
              BUYER <span style={{ color: "red" }}>*</span>
            </Typography>
            <select className="w130-h30">
              {WD_BuyerDropdown.map((row) => (
                <option value={row.value}>{row.value}</option>
              ))}
            </select>
          </div>
          <div className="pl-16 flexcolumn">
            <Typography className="fontsize" color="primary">
              BEGIN OBLIGATING ON <span style={{ color: "red" }}>*</span>
            </Typography>
            <input className="w130-h30" type="date"></input>
          </div>
          <div className="pl-16 flexcolumn">
            <Typography className="fontsize" color="primary">
              END OBLIGATING ON <span style={{ color: "red" }}>*</span>
            </Typography>
            <input className="w130-h30" type="date"></input>
          </div>
          <div className="pl-16 flexcolumn">
            <Typography className="fontsize" color="primary">
              CONTRACT NAME <span style={{ color: "red" }}>*</span>
            </Typography>
            <input
              className="w200-h50"
              type="text"
              placeholder="Enter a short description"
            ></input>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
