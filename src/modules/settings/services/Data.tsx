import { GridColDef } from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import { GridRowsProp } from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
// Manage Users Grid Data
//The actual implementation will have call to a API.
export const PermissionsDatacolumns: GridColDef[] = [
	{ field: 'Role', headerName: 'Role', width: 100, editable: true },
	{
		field: 'EnterEditQuote',
		headerName: 'Enter Edit Quote',
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
		field: 'EnterEditOrder',
		headerName: 'Enter Edit Order',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'SetSalesPlan',
		headerName: 'Set Sales Plan',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 160,
	},

	{
		field: 'ManageSG',
		headerName: 'Manage Sales Grids',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'ReadOnlyQuote',
		headerName: 'Read-Only Quote',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'ReadOnlyOrder',
		headerName: 'Read-Only Order',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'ManageTweaker',
		headerName: 'Manage Tweaker',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'ManageECommerce',
		headerName: 'Manage E-Commerce',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'SetControlsPermissions',
		headerName: 'Set/Controls Permissions',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'AssignDivisionAccess',
		headerName: 'Assign Division Access',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'Dashboard',
		headerName: 'Dashboard',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'ManagingDefaultListViews',
		headerName: 'Managing Default List Views',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'ManagingIntegrationMappingMills',
		headerName: 'Managing Integration Mapping Mills to Products',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'SendDcxInfo',
		headerName: 'Send DCX Info',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
	{
		field: 'PriceExperimentation',
		headerName: 'Price Experimentation (Lumber Only)',
		align: 'center',
		type: 'boolean',
		editable: true,
		renderCell(params) {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
		width: 100,
	},
];

function PermissionsSetData(
	Role: string,
	EnterEditQuote: boolean,
	EnterEditOrder: boolean,
	SetSalesPlan: boolean,
	ManageSG: boolean,
	ReadOnlyQuote: boolean,
	ReadOnlyOrder: boolean,
	ManageTweaker: boolean,
	ManageECommerce: boolean,
	SetControlsPermissions: boolean,
	AssignDivisionAccess: boolean,
	Dashboard: boolean,
	ManagingDefaultListViews: boolean,
	ManagingIntegrationMappingMills: boolean,
	SendDcxInfo: boolean,
	PriceExperimentation: boolean,
) {
	return {
		id: randomId(),
		Role,
		EnterEditQuote,
		EnterEditOrder,
		SetSalesPlan,
		ManageSG,
		ReadOnlyQuote,
		ReadOnlyOrder,
		ManageTweaker,
		ManageECommerce,
		SetControlsPermissions,
		AssignDivisionAccess,
		Dashboard,
		ManagingDefaultListViews,
		ManagingIntegrationMappingMills,
		SendDcxInfo,
		PriceExperimentation,
		key: Math.random(),
	};
}
export const PermissionsData: GridRowsProp = [
	PermissionsSetData(
		'Admin',
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
	),
	PermissionsSetData(
		'Read-Only',
		false,
		false,
		false,
		false,
		true,
		true,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	),
	PermissionsSetData(
		'Panel Trader',
		true,
		true,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		true,
		false,
		false,
		false,
		false,
	),
];
