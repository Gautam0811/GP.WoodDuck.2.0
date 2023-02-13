import * as React from "react";
import Table from "@mui/joy/Table";
import WD_SalesGridHeader from "./WD_SalesGridHeader";
import Grid from "@mui/material/Grid";
import CustomizedTabs from "./WD_Tabs";


export default function SalesGrid() {
  return (
    <Grid>
      <WD_SalesGridHeader />
      <Grid sx={{ display: 'flex', flexDirection: 'row'}}>
        <Table sx={{ width: "100%", height: "35%", p: 3 }} borderAxis="both">
          <thead>
            <tr
              style={{
                backgroundColor: "gray",
                borderCollapse: "collapse",
                color: "white",
              }}
            >
              <th
                rowspan={4}
                style={{ borderLeftWidth: 0, backgroundColor: "white" }}
              ></th>
              <th colspan={4} style={{ textAlign: "center" }}>
                PROSPERITY
              </th>
              <th colspan={4} style={{ textAlign: "center" }}>
                DUDLEY
              </th>
              <th colspan={4} style={{ textAlign: "center" }}>
                ALBANY
              </th>
              <th colspan={4} style={{ textAlign: "center" }}>
                GP SL WARRENTON II
              </th>
              <th colspan={4} style={{ textAlign: "center" }}>
                ROME
              </th>
              <th
                rowspan={4}
                colspan={3}
                style={{ borderRightWidth: 0, backgroundColor: "white" }}
              ></th>
            </tr>
            <tr style={{ backgroundColor: "gray", color: "white" }}>
              <th colspan={2}>WRAP N/A</th>
              <th colspan={2} style={{ textAlign: "right" }}>
                RAIL N/A
              </th>
              <th colspan={2}>WRAP N/A</th>
              <th colspan={2} style={{ textAlign: "right" }}>
                RAIL N/A
              </th>
              <th colspan={2}>WRAP N/A</th>
              <th colspan={2} style={{ textAlign: "right" }}>
                RAIL N/A
              </th>
              <th colspan={2}>WRAP N/A</th>
              <th colspan={2} style={{ textAlign: "right" }}>
                RAIL N/A
              </th>
              <th colspan={2}>WRAP N/A</th>
              <th colspan={2} style={{ textAlign: "right" }}>
                RAIL N/A
              </th>
            </tr>
            <tr style={{ backgroundColor: "#1357a6" }}>
              <th colspan={4} style={{ textAlign: "center" }}>
                2X4 SYP #2 PET
              </th>
              <th colspan={4} style={{ textAlign: "center" }}>
                2X4 SYP #2 PET
              </th>
              <th colspan={4} style={{ textAlign: "center" }}>
                2X4 SYP #2 PET
              </th>
              <th colspan={4} style={{ textAlign: "center" }}>
                2X4 SYP #2 PET
              </th>
              <th colspan={4} style={{ textAlign: "center" }}>
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
                8 x{" "}
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
                8 x{" "}
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
                8 x{" "}
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
                8 x{" "}
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
                8 x{" "}
              </td>
            </tr>
          </tbody>
        </Table>
         

         
      </Grid>
    </Grid>
  );
}
