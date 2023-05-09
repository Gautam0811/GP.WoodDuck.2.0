// WD_Dashboard
// Component Utility : The Component is the main Dashboard component which has all the reusable components and is rendered on the app
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import Grid from '@mui/material/Grid';
import DashboardMarket from './DashboardMarket';
import DashboardObjects from '../common/DashboardObjects';
import DashboardGridObjects from '../common/DashboardGridObjects';
import DasboardMillForecasts from './DashboardMillForecast';
import { DasboardHitRaterows } from '../services/DashboardData';
import { DasboardPercentForecastSoldrows } from '../services/DashboardData';
import {
	MarketSegmentData,
	MillsData,
	MarketData,
	SalesData,
} from '../services/DashboardData';

export function Dashboard() {
	return (
		<Grid className="flexrow w100 bg-e3f2fd">
			<Grid className="fs-12">
				<DashboardMarket
					title="Market"
					data={MarketData()}
					spacing={9}
				/>
				<DashboardObjects
					title="Sales"
					data={SalesData()}
					spacing={3.5}
				/>
				<DashboardObjects
					title="Mills"
					data={MillsData()}
					spacing={4}
				/>
				<DashboardObjects
					title="Market Segments"
					data={MarketSegmentData()}
					spacing={6}
				/>
				<DashboardGridObjects
					title="Percent Forecast Sold"
					data={DasboardPercentForecastSoldrows}
					spacing={6}
				/>
				<DashboardGridObjects
					title="Hit Rate"
					data={DasboardHitRaterows}
					spacing={6}
				/>
				<div className="mx-32 mill-forcasts-dash">
					<DasboardMillForecasts />
				</div>
			</Grid>
			<Grid className="w30 width-md-100 mill-forcasts-dash-display-none">
				<DasboardMillForecasts />
			</Grid>
		</Grid>
	);
}
