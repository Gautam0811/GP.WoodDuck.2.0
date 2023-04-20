// data
// Component Utility : This is the data page which has all the data in Json format which is used by all the components
// Author Gautam Malhotra on 1-3-2023
// -------------------------
//This is the data which is used by different components, it is hard coded now but will be replaced by API calls once the
//backend architecture is confirmed.
import { GridColDef } from "@mui/x-data-grid";
import CheckIcon from "@mui/icons-material/Check";
import {
  GridRowsProp
} from '@mui/x-data-grid';
import {
  randomId
} from '@mui/x-data-grid-generator';

// Manage Users Grid Data
//The actual implementation will have call to a API.
export const OrdersGridcolumns: GridColDef[] = [
  { field: "id", headerName: "", type: "number", width: 100 },
  { field: "businessLine", headerName: "Business Line", type: "string", width: 100 },
  { field: "subDivision", headerName: "Sub Division", type: "string", width: 100 },
  { field: "firstName", headerName: "First Name", type: "string", width: 100 },
  {
    field: "lastName",
    headerName: "LastName",
    align: "center",
    width: 100,
    type: "string",
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    align: "center",
    type: "string",
    width: 160,
  },

  {
    field: "permissionSet",
    headerName: "Permission Set",
    align: "center",
    type: "string",
    width: 130,
  },
  {
    field: "activeUser",
    headerName: "Active User",
    align: "center",
    width: 100,
    type: "boolean",
    editable: true,
    renderCell(params) {
      return params.value? <CheckIcon color="success"></CheckIcon>:<div></div>
    },
  },
  {
    field: "temporaryPermission",
    headerName: "Temporary Permission",
    align: "center",
    type: "string",
    width: 160,
  },
  {
    field: "temporaryPermissionDate",
    headerName: "Temporary Permission Date Start/End",
    align: "center",
    type: "string",
    width: 200,
  },
];
//The actual implementation will have call to a API.
export function OrdersGridcreateData(
  businessLine: string,
  subDivision: string,
  firstName: string,
  lastName: string,
  email: string,
  permissionSet: string,
  activeUser: boolean,
  temporaryPermission: string,
  temporaryPermissionDate: string,
) {
  return {
    id: randomId(),
    businessLine,
    subDivision,
    firstName,
    lastName,
    email,
    permissionSet,
    activeUser,
    temporaryPermission,
    temporaryPermissionDate,
    key: Math.random(),
  };
}
//The actual implementation will have call to a API.
export const OrdersGridrows : GridRowsProp= [
  OrdersGridcreateData(
    "SL",
    "",
    "Talladega",
    "MPU",
    "raj@gapac.com",
    "Trader",
    false,
    "C",
    "02/14/2023"
  ),
  OrdersGridcreateData(
    "SL",
    "",
    "Piedmont-R",
    "NOA",
    "john@gapac.com",
    "Trader",
    false,
    "T",
    "02/14/2023"
  ),
  OrdersGridcreateData(
    "SL",
    "",
    "Piedmont-R",
    "NOA",
    "rama@gapac.com",
    "Advisor",
    false,
    "T",
    "02/14/2023"
  ),

  OrdersGridcreateData(
    "SP",
    "SPx",
    "Piedmont-R",
    "NOA",
    "Kri6@gapac.com",
    "Sales Manager",
    true,
    "C",
    "02/14/2023"
  ),
  OrdersGridcreateData(
    "SL",
    "",
    "Talladega",
    "MPU",
    "Kri5@gapac.com",
    "Manager",
    false,
    "C",
    "02/14/2023"
  ),
  OrdersGridcreateData(
    "SL",
    "",
    "Piedmont-R",
    "MPU",
    "gautam@gapac.com",
    "Manager",
    true,
    "C",
    "02/14/2023"
  ),
  OrdersGridcreateData(
    "SP",
    "SPk",
    "Talladega",
    "NOA",
    "rohan@gapac.com",
    "User",
    false,
    "T",
    "02/14/2023"
  ),
  OrdersGridcreateData(
    "SP",
    "SPk",
    "Piedmont-R",
    "MPU",
    "raja@gapac.com",
    "Advisor",
    true,
    "C",
    "02/14/2023"
  ),
  OrdersGridcreateData(
    "SL",
    "",
    "Talladega",
    "MPU",
    "madan@gapac.com",
    "Sales Manager",
    false,
    "C",
    "02/14/2023"
  ),
  OrdersGridcreateData(
    "SL",
    "",
    "Piedmont-R",
    "NOA",
    "Kri3@gapac.com",
    "Manager",
    true,
    "T",
    "02/14/2023"
  ),
  OrdersGridcreateData(
    "SP",
    "SPx",
    "Talladega",
    "MPU",
    "dilip@gapac.com",
    "Sales Manager",
    false,
    "C",
    "02/14/2023"
  ),
  OrdersGridcreateData(
    "SL",
    "",
    "Piedmont-R",
    "MPU",
    "Kris@gapac.com",
    "Trader",
    true,
    "T",
    "02/14/2023"
  ),
];
