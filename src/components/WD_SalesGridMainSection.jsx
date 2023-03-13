import * as React from "react";
import Grid from "@mui/material/Grid";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import "../styles/WD_StyleMain.css";

export default function SalesGridMainSection() {
  return (
    <Grid className="fontsize" sx={{ display: "flex", flexDirection: "row" }}>
      <table style={{ width: "100%", height: "35%", p: 3, }} borderAxis="both">
        <thead>
          <tr
            style={{
              backgroundColor: "#263238",
              color: "white",
              borderCollapse:"collapse"
            }}
          >
            <th
              rowSpan={4}
              style={{ backgroundColor: 'none', borderLeftWidth: 0}}
            ></th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              PROSPERITY
              <IconButton
                size="small"
                sx={{ color: "white" }}
              >
                <SettingsIcon fontSize="small" />
              </IconButton>
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              DUDLEY
              <IconButton
                size="small"
                sx={{ color: "white" }}
              >
                <SettingsIcon fontSize="small" />
              </IconButton>
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              ALBANY
              <IconButton
                size="small"
                sx={{ color: "white" }}
              >
                <SettingsIcon fontSize="small" />
              </IconButton>
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              GP SL WARRENTON II
              <IconButton
                size="small"
                sx={{ color: "white" }}
              >
                <SettingsIcon fontSize="small" />
              </IconButton>
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              ROME
              <IconButton
                size="small"
                sx={{ color: "white" }}
              >
                <SettingsIcon fontSize="small" />
              </IconButton>
            </th>
            <th
              rowSpan={4}
              colSpan={3}
              style={{ borderRightWidth: 0}}
            ></th>
          </tr>
          <tr style={{ backgroundColor: "gray", color: "white" }}>
            <th colSpan={2}>WRAP N/A</th>
            <th colSpan={2} style={{ textAlign: "right" }}>
              RAIL N/A
            </th>
            <th colSpan={2}>WRAP N/A</th>
            <th colSpan={2} style={{ textAlign: "right" }}>
              RAIL N/A
            </th>
            <th colSpan={2}>WRAP N/A</th>
            <th colSpan={2} style={{ textAlign: "right" }}>
              RAIL N/A
            </th>
            <th colSpan={2}>WRAP N/A</th>
            <th colSpan={2} style={{ textAlign: "right" }}>
              RAIL N/A
            </th>
            <th colSpan={2}>WRAP N/A</th>
            <th colSpan={2} style={{ textAlign: "right" }}>
              RAIL N/A
            </th>
          </tr>
          <tr style={{ backgroundColor: "#1357a6" }}>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP #2 PET
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP #2 PET
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP #2 PET
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP #2 PET
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP #2 PET
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>{" "}
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>{" "}
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>{" "}
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>
          </tr>
        </thead>
        <tbody style={{border:"1px solid black"}}>
          <tr>
            <th scope="row">2x4 SYP #2 PET -8(0)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              8 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr style={{ backgroundColor: "#E5E4E2" }}>
            <th scope="row">2x4 SYP #2 PET -8(0)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              8 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr>
            <th scope="row">8(0)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              8 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr style={{ backgroundColor: "#E5E4E2" }}>
            <th scope="row">8(0)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              8 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr>
            <th scope="row">2x4 SYP #2 PET -8(0)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              8 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr style={{ backgroundColor: "#1357a6" }}>
            <th rowSpan={2} ></th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP SEL STRUC
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP SEL STRUC
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP SEL STRUC
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP SEL STRUC
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP SEL STRUC
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>{" "}
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>{" "}
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>{" "}
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">8 (208)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              8 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr style={{ backgroundColor: "#E5E4E2" }}>
            <th scope="row">10 (208)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              10 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr>
            <th scope="row">12 (208)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              12 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr style={{ backgroundColor: "#E5E4E2" }}>
            <th scope="row">14 (208)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              14 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr>
            <th scope="row">16 (208)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              16 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr style={{ backgroundColor: "#1357a6" }}>
            <th rowSpan={2} ></th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP #1
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP #1
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP #1
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP #1
            </th>
            <th colSpan={4} style={{ textAlign: "center" }}>
              2X4 SYP #1
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>{" "}
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>{" "}
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>{" "}
            <th style={{ textAlign: "center" }}>FS</th>
            <th style={{ textAlign: "center" }}>8/15</th>
            <th style={{ textAlign: "center" }}>8/22</th>
            <th style={{ textAlign: "center" }}>8/29</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">8 (208)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              8 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr style={{ backgroundColor: "#E5E4E2" }}>
            <th scope="row">10 (208)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              10 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr>
            <th scope="row">12 (208)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              12 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr style={{ backgroundColor: "#E5E4E2" }}>
            <th scope="row">14 (208)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              14 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
          <tr>
            <th scope="row">16 (208)</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={3} style={{ textAlign: "right" }}>
              16 x <input style={{ width: "20px" }}></input>
            </td>
          </tr>
        </tbody>
      </table>
    </Grid>
  );
}
