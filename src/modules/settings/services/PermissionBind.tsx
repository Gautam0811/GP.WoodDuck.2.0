/*Component Name :PermissionBind 
 Utility : This componenet is used to bind the data received from backedn services to MUI datagrid.
 Author Krishna Choudharyn 06-05-2023-------------------------   */
import CheckIcon from '@mui/icons-material/Check';
import { GridColDef } from '@mui/x-data-grid';
const permissionSet = [
	'Customer.Create',
	'EnterEditOrder',
	'Customer.Get',
	'ManageSG',
	'ReadOnlyQuote',
	'ReadOnlyOrder',
	'Customer.Find',
	'Customer.Update',
	'create.order',
	'create.quote',
	'Customer.Delete',
	'manage.quote',
	'Administration.PermissionSet.Get',
	'Administration.PermissionSet.Find',
	'BusinessModel',
];
function PermissionsSetData(
	id: number,
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
		id,
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
	};
}

export function BindPermissionGrid(props: any) {
	const jsonPermissionSet: any = [];
	props.map((apiData: any) => {
		const permissionRole: any = [];
		const permission: any = [];
		permissionRole.push(apiData.permissionSetId);
		permissionRole.push(apiData.permissionSetName);

		apiData.availablePermissions.map((permissionRow: any) => {
			return permission.push(permissionRow);
		});
		const arrayPermissionValue = permissionSet.map((value) =>
			permission.includes(value),
		);
		arrayPermissionValue.map((mapperPermission: any) => {
			return permissionRole.push(mapperPermission);
		});

		return jsonPermissionSet.push(
			PermissionsSetData.apply(null, permissionRole),
		);
	});
	return jsonPermissionSet;
}

export const columns: GridColDef[] = [
	{ field: 'Role', headerName: 'Role', width: 100, editable: true },
	{
		field: 'EnterEditQuote',
		headerName: 'Enter Edit Quote',
		headerAlign: 'center',
		width: 130,
		type: 'boolean',
		editable: true,
		renderCell: (params) => {
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
		width: 130,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'SetSalesPlan',
		headerName: 'Set Sales Plan',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 130,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},

	{
		field: 'ManageSG',
		headerName: 'Manage Sales Grids',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 150,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'ReadOnlyQuote',
		headerName: 'Read-Only Quote',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 130,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'ReadOnlyOrder',
		headerName: 'Read-Only Order',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 130,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'ManageTweaker',
		headerName: 'Manage Tweaker',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 130,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'ManageECommerce',
		headerName: 'Manage E-Commerce',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 130,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'SetControlsPermissions',
		headerName: 'Set/Controls Permissions',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 130,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'AssignDivisionAccess',
		headerName: 'Assign Division Access',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 150,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'Dashboard',
		headerName: 'Dashboard',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 100,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'ManagingDefaultListViews',
		headerName: 'Managing Default List Views',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 130,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'ManagingIntegrationMappingMills',
		headerName: 'Managing Integration Mapping Mills to Products',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 130,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'SendDcxInfo',
		headerName: 'Send DCX Info',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 130,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
	{
		field: 'PriceExperimentation',
		headerName: 'Price Experimentation (Lumber Only)',
		align: 'center',
		type: 'boolean',
		editable: true,
		width: 130,
		renderCell: (params) => {
			return params.value ? (
				<CheckIcon color="success"></CheckIcon>
			) : (
				<div></div>
			);
		},
	},
];
