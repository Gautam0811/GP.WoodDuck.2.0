// WD_Dashboard
// Component Utility : The Component is the main Dashboard component which has all the reusable components and is rendered on the app 
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import Grid from "@mui/material/Grid";
import DashboardMarketPOV from "./DashboardMarketPOV";
import DashboardObjects from "../Common/DashboardObjects";
import DashboardGridObjects from "../Common/DashboardGridObjects";
import DasboardMillForecasts from "./DashboardMillForecast";
import {WD_DashboardMarketPOVrows} from "../../services/data";
import {WD_DashboardMarketSegmentrows} from "../../services/data";
import {WD_DashboardSalesrows} from "../../services/data";
import {WD_DasboardMillsrows} from "../../services/data";
import {WD_DasboardHitRaterows} from "../../services/data";
import {WD_DasboardPercentForecastSoldrows} from "../../services/data";

// eslint-disable-next-line
export default function Dashboard() {
return (<Grid sx={{width:'100%',display:'flex',flexDirection:'row',backgroundColor: "#e3f2fd"}}>

<Grid sx={{width:'70%',display:'flex',flexDirection:'column',fontSize:"13px"}}>
    <DashboardMarketPOV title="Market POV" data={WD_DashboardMarketPOVrows} spacing={9}/>
    <DashboardObjects title="Sales" data={WD_DashboardSalesrows} spacing={3.5}/>
    <DashboardObjects title="Mills" data={WD_DasboardMillsrows} spacing={4}/>
    <DashboardObjects title="Market Segments" data={WD_DashboardMarketSegmentrows} spacing={6}/>
    <DashboardGridObjects title="Percent Forecast Sold" data={WD_DasboardPercentForecastSoldrows} spacing={6}/>
    <DashboardGridObjects title="Hit Rate" data={WD_DasboardHitRaterows} spacing={6}/>
</Grid>

<Grid sx={{width:'30%'}}>
<DasboardMillForecasts />
</Grid>

</Grid>
)}
