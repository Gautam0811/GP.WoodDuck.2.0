import * as React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from "@mui/material/Grid";
import WD_ExitButton from "../components/Buttons/WD_ExitButton";
import { FormLabel, FormGroup, FormControlLabel, Switch } from "@mui/material";
import WD_AddContractButton from "../components/Buttons/WD_AddContractButton";
import '../styles/WD_NewContractHeader.css';

export default function WD_NewContractMainSection() {
  return (
    //for header
    //<div style={{ width:'1000px',  display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center', backgroundColor: '#f1f4fb'}}>
    <Grid
      sx={{
        width: "100%",
        alignItems: "center",
        backgroundColor: "#f1f4fb",
      }}
    >
      
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
            <span style={{ color: "#005fa8" }} className="fontsize fontcolor">
              CUSTOMER <span style={{ color: "red" }}>*</span>
            </span>
            <select style={{ width: '130px', height: '30px'}}>
              <option></option>
              <option>Ananya</option>
              <option>Rahul</option>
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
              <option>Ananya</option>
              <option>Rahul</option>
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
