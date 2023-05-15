// data
// Component Utility : This is the data page which has all the data in Json format which is used by all the components
// Author Gautam Malhotra on 1-3-2023
// -------------------------
//This is the data which is used by different components, it is hard coded now but will be replaced by API calls once the
//backend architecture is confirmed.
import { GridColDef } from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import { GridRowsProp } from '@mui/x-data-grid';

// Manage Users Grid Data
//The actual implementation will have call to a API.
export const OrdersGridcolumns: GridColDef[] = [
	{ field: 'id', headerName: '', type: 'number', width: 100 },
	{
		field: 'division',
		headerName: 'Division',
		type: 'string',
		width: 100,
	},
	{
		field: 'subDivision',
		headerName: 'Sub Division',
		type: 'string',
		width: 100,
	},
	{
		field: 'firstName',
		headerName: 'First Name',
		type: 'string',
		width: 100,
	},
	{
		field: 'lastName',
		headerName: 'LastName',
		align: 'center',
		width: 100,
		type: 'string',
	},
	{
		field: 'email',
		headerName: 'Email',
		align: 'center',
		type: 'string',
		width: 160,
	},

	{
		field: 'permissionSet',
		headerName: 'Permission Set',
		align: 'center',
		type: 'string',
		width: 130,
	},
	{
		field: 'activeUser',
		headerName: 'Active User',
		align: 'center',
		width: 100,
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'temporaryPermission',
		headerName: 'Temporary Permission',
		align: 'center',
		type: 'string',
		width: 160,
	},
	{
		field: 'temporaryPermissionDate',
		headerName: 'Temporary Permission Date Start/End',
		align: 'center',
		type: 'string',
		width: 200,
	},
];
//The actual implementation will have call to a API.
export function OrdersGridcreateData(
	id: number,
	division: string,
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
		id,
		division,
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
export const OrdersGridrows: GridRowsProp = [
	OrdersGridcreateData(
		1,
		'SL',
		'',
		'Talladega',
		'MPU',
		'raj@gapac.com',
		'',
		false,
		'',
		'',
	),
	OrdersGridcreateData(
		2,
		'SL',
		'',
		'Piedmont-R',
		'NOA',
		'john@gapac.com',
		'',
		false,
		'',
		'',
	),
	OrdersGridcreateData(
		3,
		'SL',
		'',
		'Piedmont-R',
		'NOA',
		'rama@gapac.com',
		'',
		false,
		'',
		'',
	),

	OrdersGridcreateData(
		4,
		'SP',
		'PLY',
		'Piedmont-R',
		'NOA',
		'Kri6@gapac.com',
		'Sales Manager',
		true,
		'C',
		'02/14/2023',
	),
	OrdersGridcreateData(
		5,
		'SL',
		'',
		'Talladega',
		'MPU',
		'Kri5@gapac.com',
		'',
		false,
		'',
		'',
	),
	OrdersGridcreateData(
		6,
		'SL',
		'',
		'David',
		'Ugam',
		'gautam@gapac.com',
		'Manager',
		true,
		'C',
		'02/14/2023',
	),
	OrdersGridcreateData(
		7,
		'SP',
		'OSB',
		'Talladega',
		'NOA',
		'rohan@gapac.com',
		'',
		false,
		'',
		'',
	),
	OrdersGridcreateData(
		8,
		'SP',
		'PLY',
		'Piedmont-R',
		'MPU',
		'raja@gapac.com',
		'Advisor',
		true,
		'C',
		'02/14/2023',
	),
	OrdersGridcreateData(
		9,
		'SL',
		'',
		'Talladega',
		'MPU',
		'madan@gapac.com',
		'',
		false,
		'',
		'',
	),
	OrdersGridcreateData(
		10,
		'SL',
		'',
		'Piedmont-R',
		'NOA',
		'Kri3@gapac.com',
		'Manager',
		true,
		'T',
		'02/14/2023',
	),
	OrdersGridcreateData(
		11,
		'SP',
		'OSB',
		'Talladega',
		'MPU',
		'dilip@gapac.com',
		'',
		false,
		'',
		'',
	),
	OrdersGridcreateData(
		12,
		'SL',
		'',
		'Piedmont-R',
		'MPU',
		'Kris@gapac.com',
		'Trader',
		true,
		'T',
		'02/14/2023',
	),
];
