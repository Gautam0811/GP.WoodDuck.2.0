import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Checkbox from '@mui/material/Checkbox';
import "../../styles/WD_StyleMain.css";

export default function WD_Permissions(props) {
  return (
    <Box
      sx={{
        mx: 4,
        my: 4,
        width: "95%",
        bgcolor: "white",
        boxShadow: "1px 2px 5px grey",
      }}
    >
      <table style={{ width: "100%", lineHeight: 2.5 }}>
        <thead style={{ color: "#42a5f5", backgroundColor: "#eeeeee" }}>
          <tr>
            <th>Role</th>
            <th>Enter/Edit Quote</th>
            <th>Enter/Edit Order</th>
            <th>Set Sales Plan</th>
            <th>Manage SG</th>
            <th>Read-Only Quote</th>
            <th>Read-Only Order</th>
            <th>Manage Tweaker</th>
            <th>Manage E-Commerce</th>
            <th>Set Controls/Permissions</th>
            <th>Assign Division Access</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr key={row.Role}>
              <th
              >
                {row.Role}
              </th>
              {/* <td>{row.EnterEditQuote === true? &#10004:&times}</td> */}
              <td><Checkbox checked={row.EnterEditQuote}/></td>
              <td><Checkbox checked={row.EnterEditOrder}/></td>
              <td><Checkbox checked={row.SetSalesPlan}/></td>
              <td><Checkbox checked={row.ManageSG}/></td>
              <td><Checkbox checked={row.ReadOnlyQuote}/></td>
              <td><Checkbox checked={row.ReadOnlyOrder}/></td>
              <td><Checkbox checked={row.ManageTweaker}/></td>
              <td><Checkbox checked={row.ManageECommerce}/></td>
              <td><Checkbox checked={row.SetControlsPermissions}/></td>
              <td><Checkbox checked={row.AssignDivisionAccess}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
    </Box>
  );
}
