// data
// Component Utility : This is the data page which has all the data in Json format which is used by all the components
// Author Gautam Malhotra on 1-3-2023
// -------------------------
//This is the data which is used by different components, it is hard coded now but will be replaced by API calls once the 
//backend architecture is confirmed.

//WD_Dashboard data starts
 function WD_DashboardMarketPOVcreateData(week, weekvalue, trend) {
  return { week, weekvalue, trend, key: Math.random() };
}
//The actual implementation will have call to a API.
export const DashboardMarketrows = [
    WD_DashboardMarketPOVcreateData("Week 1", 60, "+"),
    WD_DashboardMarketPOVcreateData("Week 2", 60, "-"),
    WD_DashboardMarketPOVcreateData("Week 3", 60, "-"),
];

 function WD_DashboardMarketSegmentcreateData(header, value, growth,trend) {
    return { header, value, growth, trend, key: Math.random() };
}
//The actual implementation will have call to a API.
export const DashboardMarketSegmentrows = [
    WD_DashboardMarketSegmentcreateData("Industrial","0%","0%","0"),
    WD_DashboardMarketSegmentcreateData("National","0%","0%","0"),
    WD_DashboardMarketSegmentcreateData("Retail","0%","0%","0"),
    WD_DashboardMarketSegmentcreateData("Treater","0%","-1%","-"),
    WD_DashboardMarketSegmentcreateData("Truss","0%","0%","0"),
    WD_DashboardMarketSegmentcreateData("Wholesale","0%","0%","0"),
    WD_DashboardMarketSegmentcreateData("Other","0%","100%","+"),
];

 function WD_DasboardMillForecastscreateData(name, inventory, nextweek) {
    return { name, inventory, nextweek };
}
  //The actual implementation will have call to a API.
export const DasboardMillForecastsrows = [
    WD_DasboardMillForecastscreateData('ALBANY', 45,'100% sold'),
    WD_DasboardMillForecastscreateData('CAMDEN', 40,'118% sold'),
    WD_DasboardMillForecastscreateData('DIBOLL', 53,'202% sold'),
    WD_DasboardMillForecastscreateData('DUDLEY', 106,'129% sold'),
    WD_DasboardMillForecastscreateData('GP SL WARRENTON ll', 112,'95% sold'),
    WD_DasboardMillForecastscreateData('GURDON', 72,'119% sold'),
    WD_DasboardMillForecastscreateData('PINELAND', 79,'119% sold'),
    WD_DasboardMillForecastscreateData('PROSPERITY', 76,'87% sold'),
    WD_DasboardMillForecastscreateData('ROCKY CREEK', 50,'117% sold'),
    WD_DasboardMillForecastscreateData('ROME', 161,'43% sold'),
    WD_DasboardMillForecastscreateData('TALLADEGA', 77,'143% sold'),
    WD_DasboardMillForecastscreateData('TAYLORSVILLE', 29,'171% sold'),
];
  
 function WD_DasboardMillscreateData(header, value, growth,trend) {
    return { header, value, growth, trend, key: Math.random() };
}
//The actual implementation will have call to a API.
export const DasboardMillsrows = [
    WD_DasboardMillscreateData("On-hand","49643k","0%","0"),
    WD_DasboardMillscreateData("Order File","294404k","0.1%","+"),
    WD_DasboardMillscreateData("Order Ready","13%","0.5%","+"),
    WD_DasboardMillscreateData("Shipments","0k","0%","0"),
    WD_DasboardMillscreateData("Production","0.00007911318k","0%","0"),
];

function WD_DasboardHitRatecreateData(name, one,two,three,four,total ) {
    return { name, one,two,three,four,total };
}
  //The actual implementation will have call to a API.
export const DasboardHitRaterows = [
    WD_DasboardHitRatecreateData('2x4', '','' ,'','','' ),
    WD_DasboardHitRatecreateData('2x6', '9%','' ,'','','9%' ), 
    WD_DasboardHitRatecreateData('2x8', '','' ,'','','' ),
    WD_DasboardHitRatecreateData('2x10', '','' ,'','','' ),
    WD_DasboardHitRatecreateData('2x12', '','' ,'','','' ),
    WD_DasboardHitRatecreateData('4x4', '','' ,'','','' ),
    WD_DasboardHitRatecreateData('4x6', '','' ,'','','' ),
    WD_DasboardHitRatecreateData('6x6', '','' ,'N/A','','' ),
];

function WD_DasboardPercentForecastSoldcreateData(name, one,two,three,four,total ) {
    return { name, one,two,three,four,total };
}
  //The actual implementation will have call to a API.
export const DasboardPercentForecastSoldrows = [
    WD_DasboardPercentForecastSoldcreateData('2x4', '201%','283%','137%','104%','190%'),
    WD_DasboardPercentForecastSoldcreateData('2x6', '48%','101%','78%','76%','80%'),
    WD_DasboardPercentForecastSoldcreateData('2x8', '75%','68%','64%','47%','67%'),
    WD_DasboardPercentForecastSoldcreateData('2x10', '14%','36%','13%','30%','31%'),
    WD_DasboardPercentForecastSoldcreateData('2x12', 'No Production','110%','14%','127%','102%'),
    WD_DasboardPercentForecastSoldcreateData('4x4', '24%','193%','39%','29%','164%'),
    WD_DasboardPercentForecastSoldcreateData('4x6', '105%','229%','No Production','59%','165%'),
    WD_DasboardPercentForecastSoldcreateData('6x6', '145%','127%','N/A','17%','88%')
];
  
function WD_DasboardSalescreateData(header, value, growth,trend) {
    return { header, value, growth, trend, key: Math.random() };
}
export const DashboardSalesrows = [
    WD_DasboardSalescreateData("Quotes",895,"0.8%","+"),
    WD_DasboardSalescreateData("Sales Ave","$376","-0.1%","-"),
    WD_DasboardSalescreateData("Sales Vol",396,"4.1%","+"),
    WD_DasboardSalescreateData("Inbound",19,"7.3%","+"),
    WD_DasboardSalescreateData("Outbound",0,"0%","0"),
    WD_DasboardSalescreateData("Above",69,"0.7%","+"),
    WD_DasboardSalescreateData("At",3,"100%","+"),
    WD_DasboardSalescreateData("Below",1291,"1.9%","+"),
];

//Dashboard data ends

// Orders Grid Data Starts
//The actual implementation will have call to a API.
export const OrdersGridcolumns = [
    { field: "id", headerName: "Order ID", width: 130 },
    { field: "mill", headerName: "Mill", width: 130 },
    {
      field: "salesperson",
      headerName: "Salesperson",
      align: "center",
      width: 130,
    },
    {
      field: "customer",
      headerName: "Customer",
      align: "center",
      width: 130,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      align: "center",
      width: 130,
    },
    {
      field: "customerPo",
      headerName: "Customer PO",
      align: "center",
      width: 130,
    },
    {
      field: "mode",
      headerName: "Mode",
      align: "center",
      width: 130,
    },
    {
      field: "ordered",
      headerName: "Ordered",
      align: "center",
      width: 130,
    },
    {
      field: "promised",
      headerName: "Promised",
      align: "center",
      width: 130,
    },
    {
      field: "scheduled",
      headerName: "Scheduled",
      align: "center",
      width: 130,
    },
    {
      field: "readied",
      headerName: "Readied",
      align: "center",
      width: 130,
    },
  ];
  //The actual implementation will have call to a API.
export function WD_OrdersGridcreateData(
    id,
    mill,
    salesperson,
    customer,
    buyer,
    customerPo,
    mode,
    ordered,
    promised,
    scheduled,
    readied
  ) {
    return {
      id,
      mill,
      salesperson,
      customer,
      buyer,
      customerPo,
      mode,
      ordered,
      promised,
      scheduled,
      readied,
    };
  }
  //The actual implementation will have call to a API.
export const OrdersGridrows = [
    WD_OrdersGridcreateData(
      465135804,
      "Talladega",
      "MPU",
      "Barnett Co.",
      "Jess Abell",
      "TBD",
      "C",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135805,
      "Piedmont-R",
      "NOA",
      "Sunbelt Forest Products",
      "Mark Jennings",
      "040",
      "T",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135806,
      "Piedmont-R",
      "NOA",
      "Sunbelt Forest Products",
      "Mark Jennings",
      "039",
      "T",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135807,
      "Piedmont-R",
      "NOA",
      "Sunbelt Forest Products",
      "Mark Jennings",
      "TBD",
      "C",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135808,
      "Talladega",
      "MPU",
      "Barnett Co.",
      "Mark Jennings",
      "038",
      "C",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135809,
      "Piedmont-R",
      "MPU",
      "Barnett Co.",
      "Jess Abell",
      "TBD",
      "C",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135810,
      "Talladega",
      "NOA",
      "Sunbelt Forest Products",
      "Jess Abell",
      "TBD",
      "T",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135811,
      "Piedmont-R",
      "MPU",
      "Sunbelt Forest Products",
      "Jess Abell",
      "TBD",
      "C",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135812,
      "Talladega",
      "MPU",
      "Barnett Co.",
      "Mark Jennings",
      "037",
      "C",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135813,
      "Piedmont-R",
      "NOA",
      "Barnett Co.",
      "Jess Abell",
      "TBD",
      "T",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135814,
      "Talladega",
      "MPU",
      "Sunbelt Forest Products",
      "Jess Abell",
      "TBD",
      "C",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135815,
      "Piedmont-R",
      "MPU",
      "Barnett Co.",
      "Jess Abell",
      "036",
      "T",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135816,
      "Talladega",
      "NOA",
      "Sunbelt Forest Products",
      "Jess Abell",
      "TBD",
      "C",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135817,
      "Piedmont-R",
      "MPU",
      "Barnett Co.",
      "Mark Jennings",
      "TBD",
      "C",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
    WD_OrdersGridcreateData(
      465135818,
      "Talladega",
      "NOA",
      "Barnett Co.",
      "Jess Abell",
      "035",
      "C",
      "02/14/2023",
      "Due in 0 day",
      "02/15/2023",
      "02/14/2023"
    ),
  ];

//Orders Grid Data ends

//Permission sets and controls data
function WD_PermissionsSetData(Role, EnterEditQuote, EnterEditOrder, SetSalesPlan, ManageSG, ReadOnlyQuote, ReadOnlyOrder, ManageTweaker, ManageECommerce, SetControlsPermissions, AssignDivisionAccess) {
  return { Role, EnterEditQuote, EnterEditOrder, SetSalesPlan, ManageSG, ReadOnlyQuote, ReadOnlyOrder, ManageTweaker, ManageECommerce, SetControlsPermissions, AssignDivisionAccess, key: Math.random() };
}
export const PermissionsData = [
  WD_PermissionsSetData("Admin",true,true,true,true,true,true,true,true,true,true),
  WD_PermissionsSetData("Admin",true,true,true,true,true,true,true,true,true,true),
];
