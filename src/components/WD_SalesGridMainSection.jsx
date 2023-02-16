import * as React from "react";
import Grid from "@mui/material/Grid";
import CustomizedTabs from "./WD_Tabs";
import '../styles/WD_Styles.css';

export default function SalesGridMainSection() {
  return (
      <Grid className="fontsize" sx={{ display: 'flex', flexDirection: 'row'}}>
        <table style={{ width: "100%", height: "35%", p: 3 }} borderAxis="both">
          <thead>
            <tr
              style={{
                backgroundColor: "gray",
                borderCollapse: "collapse",
                color: "white",
              }}
            >
              <th
                rowSpan={4}
                style={{ borderLeftWidth: 0, backgroundColor: "white" }}
              ></th>
              <th colSpan={4} style={{ textAlign: "center" }}>
                PROSPERITY
              </th>
              <th colSpan={4} style={{ textAlign: "center" }}>
                DUDLEY
              </th>
              <th colSpan={4} style={{ textAlign: "center" }}>
                ALBANY
              </th>
              <th colSpan={4} style={{ textAlign: "center" }}>
                GP SL WARRENTON II
              </th>
              <th colSpan={4} style={{ textAlign: "center" }}>
                ROME
              </th>
              <th
                rowSpan={4}
                colSpan={3}
                style={{ borderRightWidth: 0, backgroundColor: "white" }}
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
          <tbody>
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
                8 x <input style={{ width:'20px'}}></input>
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
                8 x <input style={{ width:'20px'}}></input>
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
                8 x <input style={{ width:'20px'}}></input>
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
                8 x <input style={{ width:'20px'}}></input>
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
                8 x <input style={{ width:'20px'}}></input>
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
  );
}
