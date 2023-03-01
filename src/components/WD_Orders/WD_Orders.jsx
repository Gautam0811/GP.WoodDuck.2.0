// WD_Orders
// Component Utility : The Component is created as the Parent component for the Orders page and contains the Orders Children component
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import Grid from "@mui/material/Grid";
import WD_OrdersGrid from "./WD_OrdersGrid";
import WD_OrdersHeader from "./WD_OrdersHeader";

export default function WD_Orders() {
  return (
    <Grid sx={{ width: "100%" }}>
      <WD_OrdersHeader />
      <br />
      <br />
      <WD_OrdersGrid />
    </Grid>
  );
}
