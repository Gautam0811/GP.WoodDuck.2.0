import Grid from "@mui/material/Grid";
import WD_DashboardSales from "./WD_DashboardSales";
import WD_DashboardMill from "./WD_DashboardMills";
import WD_DashboardHitRate from "./WD_DashboardHitRate";
import WD_DashboardMarketSegment from "./WD_DashboardMarketSegment";
import WD_DashboardMarketPOV from "./WD_DashboardMarketPOV";
import WD_DashboardPercentForecastSold from "./WD_DashboardPercentForecastSold";
import WD_DasboardMillForecasts from "./WD_DashboardMillForecast";
import LinearWithValueLabel from "./WD_LinearProgressBar";
import { positions } from "@mui/system";

export default function WD_Dashboard() {
//   return (<Grid sx={{width:"100%"}}>
//     <div style={{ backgroundColor: "#e3f2fd", width: "100vw"}}>
//       <Grid sx={{ width: "100vw" }}>
//         <Grid sx={{ display: "flex", flexDirection: "row" }}>
//           <Grid sx={{ width: "70%", flexDirection: "column" }}>
//             <WD_DashboardMarketPOV />
//             <WD_DashboardSales />
//           </Grid>
//           <WD_DasboardMillForecasts />
//         </Grid>
//         <Grid sx={{ width: "70%", mt: -18 }}>
//           <WD_DashboardMill />
//           <WD_DashboardMarketSegment />
//           <WD_DashboardPercentForecastSold />
//           <WD_DashboardHitRate />
          
//         </Grid>
//       </Grid>
//     </div>
//     </Grid>
//   );
// }





return (<Grid sx={{width:'100%',display:'flex',flexDirection:'row',backgroundColor: "#e3f2fd"}}>

<Grid sx={{width:'70%',display:'flex',flexDirection:'column',fontSize:"13px"}}>
<WD_DashboardMarketPOV />
         <WD_DashboardSales />
         <WD_DashboardMill />
          <WD_DashboardMarketSegment />
          <WD_DashboardPercentForecastSold />
          <WD_DashboardHitRate />
</Grid>

<Grid sx={{width:'30%'}}>
<WD_DasboardMillForecasts />
</Grid>

</Grid>
)}
