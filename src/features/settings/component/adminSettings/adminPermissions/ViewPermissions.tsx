// WD_Permissions
// Component Utility : The Component is created to render permissions sets and controls page in Administration settings
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import Paper from "@mui/material/Paper";
import PermissionsHeader from "./PermissionsHeader";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#eeeeee" ,
    color:"blue",
  },
}));

export function ViewPermissions(props: any) {
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
                <StyledTableCell>Permission Sets</StyledTableCell>
                <StyledTableCell className="text-right">Create/Edit Quote</StyledTableCell>
                <StyledTableCell className="text-right">Create/Edit Order</StyledTableCell>
                <StyledTableCell className="text-right">Set Sales Plan</StyledTableCell>
                <StyledTableCell className="text-right">Manage Sales Grids</StyledTableCell>
                <StyledTableCell className="text-right">Read-Only Quote</StyledTableCell>
                <StyledTableCell className="text-right">Read-Only Order</StyledTableCell>
                <StyledTableCell className="text-right">Manage Tweaker</StyledTableCell>
                <StyledTableCell className="text-right">Manage E-Commerce</StyledTableCell>
                <StyledTableCell className="text-right">Set/Controls Permissions</StyledTableCell>
                <StyledTableCell className="text-right">Assign Division Access</StyledTableCell>
                <StyledTableCell className="text-right">Dashboard</StyledTableCell>
                <StyledTableCell className="text-right">Managing Default List Views</StyledTableCell>
                <StyledTableCell className="text-right">
                  Managing Integration Mapping Mills to Products
                </StyledTableCell>
                <StyledTableCell className="text-right">Send DCX Info</StyledTableCell>
                <StyledTableCell className="text-right">
                  Price Experimentation (Lumber Only)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row: any) => (
                <TableRow
                  key={row.Role}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Role}
                  </TableCell>
                  <TableCell className="text-right">
                    {row.EnterEditQuote ? <CheckIcon color="success"/>:<div></div>}
                  </TableCell>
                  <TableCell className="text-right">
                    {row.EnterEditOrder ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.SetSalesPlan ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.ManageSG ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.ReadOnlyQuote ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.ReadOnlyOrder ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.ManageTweaker ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.ManageECommerce ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.SetControlsPermissions ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.AssignDivisionAccess ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.Dashboard ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.ManagingDefaultListViews ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.ManagingIntegrationMappingMills ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.SendDcxInfo ? <CheckIcon color="success"/>:<div></div>} 
                  </TableCell>
                  <TableCell className="text-right">
                    {row.PriceExperimentation ? <CheckIcon color="success"/>:<div></div>} 
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
