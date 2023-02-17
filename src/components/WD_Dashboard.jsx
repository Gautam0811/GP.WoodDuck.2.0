import Grid from "@mui/material/Grid";
import WD_DashboardSales from "./WD_DashboardSales";
import WD_DashboardMill from "./WD_DashboardMills";
import WD_DashboardHitRate from "./WD_DashboardHitRate";
import WD_DashboardMarketSegment from "./WD_DashboardMarketSegment";
import WD_DashboardMarketPOV from "./WD_DashboardMarketPOV";
import WD_DashboardPercentForecastSold from "./WD_DashboardPercentForecastSold";


export default function WD_Dashboard() {
  return (
    <div style={{ backgroundColor: "#e3f2fd", width: "100vw" }}>
      <Grid sx={{ width: "100vw" }}>
        <Grid sx={{ width: "70%", flexDirection: "column" }}>
        <WD_DashboardMarketPOV/>
          <WD_DashboardSales />
        </Grid>
        <Grid sx={{ width: "70%" }}>
      
          <WD_DashboardMill />
          <WD_DashboardMarketSegment/>
         < WD_DashboardPercentForecastSold/>
          <WD_DashboardHitRate/>
        </Grid>
      </Grid>
    </div>
  );
}
