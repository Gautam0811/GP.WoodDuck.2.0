// WD_Permissions
// Component Utility : The Component is created to render permissions sets and controls page in Administration settings
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import PermissionsHeader from "./PermissionsHeader";

export function Permissions(props: any) {
  console.log(props.data);
  return (
    <Grid sx={{ width: "100%" }}>
      <PermissionsHeader/>
      <br/>
      <Grid sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Permission Sets</TableCell>
                <TableCell align="right">Create/Edit Quote</TableCell>
                <TableCell align="right">Create/Edit Order</TableCell>
                <TableCell align="right">Set Sales Plan</TableCell>
                <TableCell align="right">Manage Sales Grids</TableCell>
                <TableCell align="right">Read-Only Quote</TableCell>
                <TableCell align="right">Read-Only Order</TableCell>
                <TableCell align="right">Manage Tweaker</TableCell>
                <TableCell align="right">Manage E-Commerce</TableCell>
                <TableCell align="right">Set/Controls Permissions</TableCell>
                <TableCell align="right">Assign Division Access</TableCell>
                <TableCell align="right">Dashboard</TableCell>
                <TableCell align="right">Managing Default List Views</TableCell>
                <TableCell align="right">
                  Managing Integration Mapping Mills to Products
                </TableCell>
                <TableCell align="right">Send DCX Info</TableCell>
                <TableCell align="right">
                  Price Experimentation (Lumber Only)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row: any) => (
                <TableRow
                  key={row.Role}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Role}
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.EnterEditQuote} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.EnterEditOrder} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.SetSalesPlan} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.ManageSG} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.ReadOnlyQuote} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.ReadOnlyOrder} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.ManageTweaker} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.ManageECommerce} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.SetControlsPermissions} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.AssignDivisionAccess} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.Dashboard} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.ManagingDefaultListViews} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.ManagingIntegrationMappingMills} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.SendDcxInfo} />
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox checked={row.PriceExperimentation} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
