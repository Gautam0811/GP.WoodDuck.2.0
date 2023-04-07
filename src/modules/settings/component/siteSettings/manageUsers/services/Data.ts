// data
// Component Utility : This is the data page which has all the data in Json format which is used by all the components
// Author Gautam Malhotra on 1-3-2023
// -------------------------
//This is the data which is used by different components, it is hard coded now but will be replaced by API calls once the 
//backend architecture is confirmed.
import { GridColDef } from "@mui/x-data-grid";

// Manage Users Grid Data 
//The actual implementation will have call to a API.
export const OrdersGridcolumns:GridColDef[] = [
 
    { field: "businessLine", headerName: "Business Line", width: 100 },
    { field: "firstname", headerName: "FirstName", width:100 },
    {
      field: "lastName",
      headerName: "LastName",
      align: "center",
      width: 100,
    },
    {
      field: "id",
      headerName: "Email",
      align: "center",
      width: 160,
    },
    
    {
      field: "permissionset",
      headerName: "Permission Set",
      align: "center",
      width: 130,
    },
    {
      field: "activeUser",
      headerName: "Active User",
      align: "center",
      width: 100,
    },
    {
      field: "temporaryPermission",
      headerName: "Temporary Permission",
      align: "center",
      width: 160,
    },
    {
      field: "temporaryPermissiondate",
      headerName: "Temporary Permission Date Start/End",
      align: "center",
      width: 200,
    }
  ];
  //The actual implementation will have call to a API.
export function OrdersGridcreateData(
    businessLine: string,
    firstname: string,
    lastName: string,
    id: string,
    permissionset: string,
    activeUser: boolean,
    temporaryPermission: string,
    temporaryPermissiondate: string
  ) {
    return {
      businessLine,
      firstname,
      lastName,
      id,
      permissionset,
      activeUser,
      temporaryPermission,
      temporaryPermissiondate
    };
  }
  //The actual implementation will have call to a API.
export const OrdersGridrows = [
    OrdersGridcreateData(
      "SL",
      "Talladega",
      "MPU",
      "raj@gapac.com",
      "Jess Abell",
      false,
      "C",
      "02/14/2023"
    ),
    OrdersGridcreateData(
      "SL",
      "Piedmont-R",
      "NOA",
      "john@gapac.com",
      "Mark Jennings",
      false,
      "T",
      "02/14/2023",
    
    ),
    OrdersGridcreateData(
      "SL",
      "Piedmont-R",
      "NOA",
      "rama@gapac.com",
      "Mark Jennings",
      false,
      "T",
      "02/14/2023"
    ),
   
    OrdersGridcreateData(
      "SP",
      "Piedmont-R",
      "NOA",
      "Kri6@gapac.com",
      "Mark Jennings",
      true,
      "C",
      "02/14/2023"
    ),
    OrdersGridcreateData(
      "SL",
      "Talladega",
      "MPU",
      "Kri5@gapac.com",
      "Mark Jennings",
      false,
      "C",
      "02/14/2023"
    ),
    OrdersGridcreateData(
      "SL",
      "Piedmont-R",
      "MPU",
      "gautam@gapac.com",
      "Jess Abell",
      true,
      "C",
      "02/14/2023",
    ),
    OrdersGridcreateData(
      "SP",
      "Talladega",
      "NOA",
      "rohan@gapac.com",
      "Jess Abell",
      false,
      "T",
      "02/14/2023"
    ),
    OrdersGridcreateData(
      "SP",
      "Piedmont-R",
      "MPU",
      "raja@gapac.com",
      "Jess Abell",
      true,
      "C",
      "02/14/2023"
    ),
    OrdersGridcreateData(
      "SL",
      "Talladega",
      "MPU",
      "madan@gapac.com",
      "Mark Jennings",
      false,
      "C",
      "02/14/2023"
    ),
    OrdersGridcreateData(
      "SL",
      "Piedmont-R",
      "NOA",
      "Kri3@gapac.com",
      "Jess Abell",
      true,
      "T",
      "02/14/2023"
    ),
    OrdersGridcreateData(
      "SL",
      "Talladega",
      "MPU",
      "dilip@gapac.com",
      "Jess Abell",
      false,
      "C",
      "02/14/2023"
    ),
    OrdersGridcreateData(
      "SL",
      "Piedmont-R",
      "MPU",
      "Kris@gapac.com",
      "Jess Abell",
      true,
      "T",
      "02/14/2023"
    ),
  ]

