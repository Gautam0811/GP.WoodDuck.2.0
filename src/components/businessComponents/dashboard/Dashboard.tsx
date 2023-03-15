// WD_Dashboard
// Component Utility : The Component is the main Dashboard component which has all the reusable components and is rendered on the app 
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import Grid from "@mui/material/Grid";
import DashboardMarket from "./DashboardMarket";
import DashboardObjects from "../../common/DashboardObjects";
import DashboardGridObjects from "../../common/DashboardGridObjects";
import DasboardMillForecasts from "./DashboardMillForecast";
import {DashboardMarketrows} from "../../../services/Data";
import {DashboardMarketSegmentrows} from "../../../services/Data";
import {DashboardSalesrows} from "../../../services/Data";
import {DasboardMillsrows} from "../../../services/Data";
import {DasboardHitRaterows} from "../../../services/Data";
import {DasboardPercentForecastSoldrows} from "../../../services/Data";

// eslint-disable-next-line
export default function Dashboard() {
return (<Grid sx={{width:'100%',display:'flex',flexDirection:'row',backgroundColor: "#e3f2fd"}}>

<Grid sx={{width:'70%',display:'flex',flexDirection:'column',fontSize:"13px"}}>
    <DashboardMarket title="Market POV" data={DashboardMarketrows} spacing={9}/>
    <DashboardObjects title="Sales" data={DashboardSalesrows} spacing={3.5}/>
    <DashboardObjects title="Mills" data={DasboardMillsrows} spacing={4}/>
    <DashboardObjects title="Market Segments" data={DashboardMarketSegmentrows} spacing={6}/>
    <DashboardGridObjects title="Percent Forecast Sold" data={DasboardPercentForecastSoldrows} spacing={6}/>
    <DashboardGridObjects title="Hit Rate" data={DasboardHitRaterows} spacing={6}/>
</Grid>

<Grid sx={{width:'30%'}}>
<DasboardMillForecasts />
</Grid>

</Grid>
)}
