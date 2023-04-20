// WD_Dashboard
// Component Utility : The Component is the main Dashboard component which has all the reusable components and is rendered on the app 
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Grid from "@mui/material/Grid";
import DashboardMarket from "./DashboardMarket";
import DashboardObjects from "../common/DashboardObjects";
import DashboardGridObjects from "../common/DashboardGridObjects";
import DasboardMillForecasts from "./DashboardMillForecast";
import {DasboardHitRaterows} from "../services/Data";
import {DasboardPercentForecastSoldrows} from "../services/Data";
import {MarketSegmentData, MillsData, MarketData, SalesData} from "../services/Data";


export function Dashboard() {
    return (
    <Grid className="flexrow w100 bg-e3f2fd">
        <Grid className="w70 fs-12">
            <DashboardMarket title="Market" data={MarketData()} spacing={9}/>
            <DashboardObjects title="Sales" data={SalesData()} spacing={3.5}/>
            <DashboardObjects title="Mills" data={MillsData()} spacing={4}/>
            <DashboardObjects title="Market Segments" data={MarketSegmentData()} spacing={6}/>
            <DashboardGridObjects title="Percent Forecast Sold" data={DasboardPercentForecastSoldrows} spacing={6}/>
            <DashboardGridObjects title="Hit Rate" data={DasboardHitRaterows} spacing={6}/>
        </Grid>
        <Grid className="w30">
            <DasboardMillForecasts />
        </Grid>
    </Grid>
    )}
