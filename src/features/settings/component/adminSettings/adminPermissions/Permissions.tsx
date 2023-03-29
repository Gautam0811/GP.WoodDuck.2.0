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
    <Grid className="w85">
      <PermissionsHeader />
      <br/>
      <Grid className="w100 flexrow">
        <TableContainer component={Paper}>
          <Table className="w100" size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Permission Sets</TableCell>
                <TableCell className="text-right">Create/Edit Quote</TableCell>
                <TableCell className="text-right">Create/Edit Order</TableCell>
                <TableCell className="text-right">Set Sales Plan</TableCell>
                <TableCell className="text-right">Manage Sales Grids</TableCell>
                <TableCell className="text-right">Read-Only Quote</TableCell>
                <TableCell className="text-right">Read-Only Order</TableCell>
                <TableCell className="text-right">Manage Tweaker</TableCell>
                <TableCell className="text-right">Manage E-Commerce</TableCell>
                <TableCell className="text-right">Set/Controls Permissions</TableCell>
                <TableCell className="text-right">Assign Division Access</TableCell>
                <TableCell className="text-right">Dashboard</TableCell>
                <TableCell className="text-right">Managing Default List Views</TableCell>
                <TableCell className="text-right">
                  Managing Integration Mapping Mills to Products
                </TableCell>
                <TableCell className="text-right">Send DCX Info</TableCell>
                <TableCell className="text-right">
                  Price Experimentation (Lumber Only)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row: any) => (
                <TableRow
                  key={row.Role}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">Edit/Delete</TableCell>
                  <TableCell component="th" scope="row">
                    {row.Role}
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.EnterEditQuote} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.EnterEditOrder} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.SetSalesPlan} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.ManageSG} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.ReadOnlyQuote} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.ReadOnlyOrder} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.ManageTweaker} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.ManageECommerce} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.SetControlsPermissions} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.AssignDivisionAccess} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.Dashboard} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.ManagingDefaultListViews} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.ManagingIntegrationMappingMills} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={row.SendDcxInfo} />
                  </TableCell>
                  <TableCell className="text-right">
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
