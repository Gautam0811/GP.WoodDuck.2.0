// // // // WD_Permissions
// // // // Component Utility : The Component is created to render permissions sets and controls page in Administration settings
// // // // Author Gautam Malhotra on 1-3-2023
// // // // -------------------------

import { useState, useEffect, useMemo } from 'react';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import { BindPermissionGrid } from '../../../index';
import { AddPermissions } from './AddPermissions';
import { CloseButton } from '../../../../../common/button';
import {
	GridColDef,
	DataGrid,
	GridRowId,
	GridRowModes,
	GridCellModes,
	GridRowModesModel,
	GridRowModel,
	GridActionsCellItem,
	GridRowsProp,
} from '@mui/x-data-grid';
import { EditPermissions } from './EditPermissions';
import Checkbox from '@mui/material/Checkbox';
import { getPermissionSet } from '../../../services/PermissionApi';
import { DeletePermissions } from './DeletePermissions';

interface SelectedRowParams {
	id: GridRowId;
}

export function ViewPermissions() {
	const [permissionRows, setPermissionRows] = useState<GridRowsProp>([]);
	const [selectedRowParams, setSelectedRowParams] =
		useState<SelectedRowParams>({ id: 0 });

	const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

	//get permission set from api
	useEffect(() => {
		getPermissionSet().then((permissionset) => {
			setPermissionRows(BindPermissionGrid(permissionset));
		});
	}, []);

	const handleRowSelection = (id: GridRowId) => () => {
		setSelectedRowParams({ id });
	};

	console.log(permissionRows);

	const handleOnCellDoubleClick = (params: any) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		params.isEditable === false;
		console.log(params);
	};

	const processRowUpdate = (newRow: GridRowModel) => {
		const updatedRow = { ...newRow, isNew: false };
		setPermissionRows(
			permissionRows.map((row) =>
				row.id === newRow.id ? updatedRow : row,
			),
		);
		return updatedRow;
	};

	const rowMode = useMemo(() => {
		if (selectedRowParams.id === 0 || selectedRowParams.id === 1) {
			return 'view';
		}
		const { id } = selectedRowParams;
		return rowModesModel[id]?.mode || 'view';
	}, [rowModesModel, selectedRowParams]);

	const columns: GridColDef[] = [
		{
			field: 'actions',
			type: 'actions',
			headerName: '',
			width: 100,
			cellClassName: 'actions',
			getActions: ({ id }) => {
				const isInEditMode =
					rowModesModel[id]?.mode === GridRowModes.Edit;
				if (isInEditMode) {
					return [
						//eslint-disable-next-line react/jsx-key
						<GridActionsCellItem
							icon={<Checkbox checked />}
							label="Edit"
							onClick={handleRowSelection(id)}
						/>,
					];
				}
				return [
					// eslint-disable-next-line react/jsx-key
					<GridActionsCellItem
						icon={
							<Checkbox checked={selectedRowParams.id === id} />
						}
						label="Select"
						onClick={handleRowSelection(id)}
					/>,
				];
			},
		},

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

	return (
		<div>
			<Grid className="settings-header">
				<span className="settings-header-text">
					Manage Permission Sets
				</span>
				<div className="flexrow">
					<EditPermissions
						setSelectedRowParams={setSelectedRowParams}
						selectedRowParams={selectedRowParams}
						rowMode={rowMode}
						rowModesModel={rowModesModel}
						setRowModesModel={setRowModesModel}
					/>
					<DeletePermissions
						setSelectedRowParams={setSelectedRowParams}
						rows={permissionRows}
						setRows={setPermissionRows}
						selectedRowParams={selectedRowParams}
					/>
					<AddPermissions
						setSelectedRowParams={setSelectedRowParams}
						setRows={setPermissionRows}
						setRowModesModel={setRowModesModel}
						rows={permissionRows}
					/>
					<CloseButton />
				</div>
			</Grid>
			<br />
			<br />
			<div className="h-400 w100">
				<DataGrid
					rows={permissionRows}
					columns={columns}
					loading={!permissionRows.length}
					isRowSelectable={(params) => params.row.Role !== 'Admin'}
					disableRowSelectionOnClick={true}
					onCellDoubleClick={(params, event) => {
						event.defaultMuiPrevented = true;
					}}
					rowModesModel={rowModesModel}
					isCellEditable={(params) => params.row.Role !== 'Admin'}
					onRowModesModelChange={(model) => setRowModesModel(model)}
					processRowUpdate={processRowUpdate}
				/>
			</div>
		</div>
	);
}