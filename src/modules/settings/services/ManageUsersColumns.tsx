/*Component Name : ManageUsersColumns
 Utility : This component is used to fetch the columns data from backend services.
 Author Ananya Dhar 06-05-2023-------------------------   */

//The actual implementation will have call to a API.
import CheckIcon from '@mui/icons-material/Check';
import { GridColDef } from '@mui/x-data-grid';

export const OrdersGridcolumns: GridColDef[] = [
	{
		field: 'division',
		headerName: 'Division',
		type: 'string',
		width: 100,
		align: 'center',
	},
	{
		field: 'subDivision',
		headerName: 'Sub Division',
		type: 'string',
		editable: true,
		width: 100,
		align: 'center',
	},
	{
		field: 'firstName',
		headerName: 'First Name',
		type: 'string',
		width: 100,
		align: 'center',
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
		width: 160,
		type: 'string',
	},

	{
		field: 'permissionSet',
		headerName: 'Permission Set',
		align: 'center',
		width: 130,
		type: 'string',
		editable: true,
	},
	{
		field: 'activeUser',
		headerName: 'Active User',
		align: 'center',
		width: 100,
		type: 'boolean',
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
		width: 160,
		type: 'string',
	},
	{
		field: 'temporaryPermissionStartDate',
		headerName: 'Temporary Permission Start Date',
		align: 'center',
		width: 200,
		type: 'string',
	},
	{
		field: 'temporaryPermissionEndDate',
		headerName: 'Temporary Permission End Date',
		align: 'center',
		width: 200,
		type: 'string',
	},
];
