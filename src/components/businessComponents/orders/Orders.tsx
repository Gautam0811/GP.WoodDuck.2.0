// WD_Orders
// Component Utility : The Component is created as the Parent component for the Orders page and contains the Orders Children component
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Grid from "@mui/material/Grid";
import OrdersGrid from "./OrdersGrid";
import OrdersHeader from "./OrdersHeader";

export default function Orders() {
  return (
    <Grid sx={{ width: "100%" }}>
      <OrdersHeader />
      <br />
      <br />
      <OrdersGrid />
    </Grid>
  );
}
