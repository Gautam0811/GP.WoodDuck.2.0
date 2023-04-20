// data
// Component Utility : This is the data page which has all the data in Json format which is used by all the components
// Author Gautam Malhotra on 1-3-2023
// -------------------------
//This is the data which is used by Dashboard component

import * as React from 'react';
import {
	getMarketSegment,
	getMillsData,
	getMarketData,
	getSalesData,
} from './Api';

//The Market Data API is called and marketData variable is populated with the Market data
export function MarketData() {
	const [marketData, setMarketData] = React.useState([]);

	React.useEffect(() => {
		getMarketData().then((marketdata) => {
			setMarketData(marketdata);
		});
	}, []);

	return marketData;
}

//The Market Segment Data API is called and marketSegment variable is populated with the Market Segment data
export function MarketSegmentData() {
	const [marketSegment, setMarketSegment] = React.useState([]);

	React.useEffect(() => {
		getMarketSegment().then((marketsegmentdata) => {
			setMarketSegment(marketsegmentdata);
		});
	}, []);

	return marketSegment;
}

//The Mills Data API is called and millsData variable is populated with the Mills data
export function MillsData() {
	const [millsData, setMillsData] = React.useState([]);

	React.useEffect(() => {
		getMillsData().then((millsdata) => {
			setMillsData(millsdata);
		});
	}, []);

	return millsData;
}

//The Sales Data API is called and salesData variable is populated with the Sales data
export function SalesData() {
	const [salesData, setSalesData] = React.useState([]);

	React.useEffect(() => {
		getSalesData().then((salesdata) => {
			setSalesData(salesdata);
		});
	}, []);

	return salesData;
}

//This function is responsible for creating JSON object for Dashboard mill forecasts and will be removed
function DasboardMillForecastscreateData(
	name: string,
	inventory: number,
	nextweek: string,
) {
	return { name, inventory, nextweek };
}
//The actual implementation will have call to a API.
export const DasboardMillForecastsrows = [
	DasboardMillForecastscreateData('ALBANY', 45, '100% sold'),
	DasboardMillForecastscreateData('CAMDEN', 40, '118% sold'),
	DasboardMillForecastscreateData('DIBOLL', 53, '202% sold'),
	DasboardMillForecastscreateData('DUDLEY', 106, '129% sold'),
	DasboardMillForecastscreateData('GP SL WARRENTON ll', 112, '95% sold'),
	DasboardMillForecastscreateData('GURDON', 72, '119% sold'),
	DasboardMillForecastscreateData('PINELAND', 79, '119% sold'),
	DasboardMillForecastscreateData('PROSPERITY', 76, '87% sold'),
	DasboardMillForecastscreateData('ROCKY CREEK', 50, '117% sold'),
	DasboardMillForecastscreateData('ROME', 161, '43% sold'),
	DasboardMillForecastscreateData('TALLADEGA', 77, '143% sold'),
	DasboardMillForecastscreateData('TAYLORSVILLE', 29, '171% sold'),
];

//This function is responsible for creating JSON object for Dashboard Hit Rate and will be removed
function DasboardHitRatecreateData(
	name: string,
	one: string,
	two: string,
	three: string,
	four: string,
	total: string,
) {
	return { name, one, two, three, four, total };
}
//The actual implementation will have call to a API.
export const DasboardHitRaterows = [
	DasboardHitRatecreateData('2x4', '', '', '', '', ''),
	DasboardHitRatecreateData('2x6', '9%', '', '', '', '9%'),
	DasboardHitRatecreateData('2x8', '', '', '', '', ''),
	DasboardHitRatecreateData('2x10', '', '', '', '', ''),
	DasboardHitRatecreateData('2x12', '', '', '', '', ''),
	DasboardHitRatecreateData('4x4', '', '', '', '', ''),
	DasboardHitRatecreateData('4x6', '', '', '', '', ''),
	DasboardHitRatecreateData('6x6', '', '', 'N/A', '', ''),
];

//This function is responsible for creating JSON object for Dashboard Percent forecasts and will be removed
function DasboardPercentForecastSoldcreateData(
	name: string,
	one: string,
	two: string,
	three: string,
	four: string,
	total: string,
) {
	return { name, one, two, three, four, total };
}
//The actual implementation will have call to a API.
export const DasboardPercentForecastSoldrows = [
	DasboardPercentForecastSoldcreateData(
		'2x4',
		'201%',
		'283%',
		'137%',
		'104%',
		'190%',
	),
	DasboardPercentForecastSoldcreateData(
		'2x6',
		'48%',
		'101%',
		'78%',
		'76%',
		'80%',
	),
	DasboardPercentForecastSoldcreateData(
		'2x8',
		'75%',
		'68%',
		'64%',
		'47%',
		'67%',
	),
	DasboardPercentForecastSoldcreateData(
		'2x10',
		'14%',
		'36%',
		'13%',
		'30%',
		'31%',
	),
	DasboardPercentForecastSoldcreateData(
		'2x12',
		'No Production',
		'110%',
		'14%',
		'127%',
		'102%',
	),
	DasboardPercentForecastSoldcreateData(
		'4x4',
		'24%',
		'193%',
		'39%',
		'29%',
		'164%',
	),
	DasboardPercentForecastSoldcreateData(
		'4x6',
		'105%',
		'229%',
		'No Production',
		'59%',
		'165%',
	),
	DasboardPercentForecastSoldcreateData(
		'6x6',
		'145%',
		'127%',
		'N/A',
		'17%',
		'88%',
	),
];
//Dashboard data ends
