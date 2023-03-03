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
