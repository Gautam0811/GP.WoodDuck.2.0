// WD_NewContractHeader
// Component Utility : The Component is created to provide a header for the New Contracts page
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from "@mui/material/Grid";
import WD_ExitButton from "../buttons/ExitButton";
import { ListItemButton, FormLabel, FormGroup, FormControlLabel, Switch } from "@mui/material";
import WD_AddContractButton from "../buttons/AddContractButton";
import '../../styles/WD_StyleMain.css';

export default function NewContractHeader() {
  return (
    //for header
    <Grid
      sx={{
        alignItems: "center",
        backgroundColor: "#f1f4fb",
      }}
    >
      
      {/* Top grid */}
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <WD_ExitButton />
          <span style={{ fontWeight: "bold" }}>New Contracts</span>
          <FormGroup style={{ paddingLeft: "20px" }}>
            <FormControlLabel
              control={<Switch color="primary" defaultChecked />}
              label="Active"
              style={{ color: "#005fa8" }}
            />
          </FormGroup>
        </div>
        <div
          style={{
            alignItems: "center",
            color: "gray",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ListItemButton>Cancel</ListItemButton>
          <WD_AddContractButton/>
        </div>
      </Grid>

      {/* bottom grid */}
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            alignItems: "center",
            padding: "25px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="fontsize" style={{ color: "#005fa8" }}>
              CONTRACT TYPE
            </span>
            <ButtonGroup size="small" aria-label="small button group">
              <Button key="Monthly">Monthly</Button>
              <Button key="Automatic">Automatic</Button>
              <Button key="VMI">VMI</Button>
            </ButtonGroup>
          </div>
          <div
            style={{
              paddingLeft: "15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "#005fa8" }} className="NewContractHeaderFontsize NewContractHeaderFontcolor">
              CUSTOMER <span style={{ color: "red" }}>*</span>
            </span>
            <select style={{ width: '130px', height: '30px'}}>
              <option></option>
              <option>DAVID KLEKAMP</option>
              <option>Hannah</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "15px",
            }}
          >
            <span style={{ color: "#005fa8" }} className="fontsize">
              BUYER <span style={{ color: "red" }}>*</span>
            </span>
            <select style={{ width: '130px', height: '30px'}}>
              <option></option>
              <option>DAVID KLEKAMP</option>
              <option>Hannah</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "15px",
            }}
          >
            <span style={{ color: "#005fa8" }} className="fontsize">
              BEGIN OBLIGATING ON <span style={{ color: "red" }}>*</span>
            </span>
            <input style={{ width: '130px', height: '30px'}} type="date"></input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "15px",
            }}
          >
            <span style={{ color: "#005fa8" }} className="fontsize">
              END OBLIGATING ON <span style={{ color: "red" }}>*</span>
            </span>
            <input style={{ width: '130px', height: '30px'}} type="date"></input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "15px",
            }}
          >
            <span style={{ color: "#005fa8" }} className="fontsize">
              CONTRACT NAME <span style={{ color: "red" }}>*</span>
            </span>
            <input style={{ width: '200px', height: '30px'}} type="text" placeholder="Enter a short description"></input>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
