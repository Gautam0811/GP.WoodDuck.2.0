import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import {
	GridRowsProp,
	GridCellModesModel,
	DataGrid,
	GridColDef,
	MuiEvent,
	GridToolbarContainer,
	GridEventListener,
	GridRowModel,
	GridCellModes,
	GridCellParams,
} from '@mui/x-data-grid';
import { BindPermissionGrid } from '../../../index';
import { getPermissionSet } from '../../../services/Api';
import { useState, useEffect } from 'react';

interface EditToolbarProps {
	permissionRows: any;
	cellModesModel: GridCellModesModel;
	setCellModesModel: (
		newModel: (oldModel: GridCellModesModel) => GridCellModesModel,
	) => void;
	setPermissionRows: (
		newRows: (oldRows: GridRowsProp) => GridRowsProp,
	) => void;
}

export function ViewPermissions() {
	let lodash = require('lodash');
	const [permissionRows, setPermissionRows] = useState<GridRowsProp>([]);
	// const [rows, setRows] = useState(permissionRows);
	const [cellModesModel, setCellModesModel] = useState<GridCellModesModel>(
		{},
	);
	const [filterRows, setFilterRows] = useState<GridRowsProp>([]);

	useEffect(() => {
		getPermissionSet().then((permissionset: any) => {
			setPermissionRows(BindPermissionGrid(permissionset));
		});
	}, []);

	const columns: GridColDef[] = [
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
	const onRowSelectionModelChange = (ids: any) => {
		console.log('handleRowEditStart');
		const selectedIDs = new Set(ids);
		console.log('selectedIDs :' + selectedIDs);
		setFilterRows(
			permissionRows.filter((row: any) => {
				return selectedIDs.has(row.id);
			}),
		);

		console.log(filterRows);
	};
	function EditToolbar(props: EditToolbarProps) {
		const {
			permissionRows,
			cellModesModel,
			setCellModesModel,
			setPermissionRows,
		} = props;

		const isInEditMode = Object.keys(cellModesModel).some((rowId) => {
			return (
				cellModesModel[rowId].Role.mode === GridCellModes.Edit &&
				cellModesModel[rowId].EnterEditQuote.mode ===
					GridCellModes.Edit &&
				cellModesModel[rowId].EnterEditOrder.mode === GridCellModes.Edit
			);
		});

		const handleClick = () => {
			console.log('handleclick');
			console.log(filterRows);
			const newModel = filterRows.reduce<any>((acc, row: any) => {
				console.log(row.id);
				console.log(acc);
				acc[row.id] = {
					Role: {
						mode: GridCellModes.Edit,
					},
					EnterEditQuote: {
						mode: GridCellModes.Edit,
					},
					EnterEditOrder: {
						mode: GridCellModes.Edit,
					},
					SetSalesPlan: {
						mode: GridCellModes.Edit,
					},
					ManageSG: {
						mode: GridCellModes.Edit,
					},
					ReadOnlyQuote: {
						mode: GridCellModes.Edit,
					},
					ReadOnlyOrder: {
						mode: GridCellModes.Edit,
					},
					ManageTweaker: {
						mode: GridCellModes.Edit,
					},
					ManageECommerce: {
						mode: GridCellModes.Edit,
					},
					SetControlsPermissions: {
						mode: GridCellModes.Edit,
					},
					AssignDivisionAccess: {
						mode: GridCellModes.Edit,
					},
					Dashboard: {
						mode: GridCellModes.Edit,
					},
					ManagingDefaultListViews: {
						mode: GridCellModes.Edit,
					},
					ManagingIntegrationMappingMills: {
						mode: GridCellModes.Edit,
					},
					SendDcxInfo: {
						mode: GridCellModes.Edit,
					},
					PriceExperimentation: {
						mode: GridCellModes.Edit,
					},
				};
				return acc;
			}, {});

			setCellModesModel(newModel);
		};
		const handleSave = () => {
			console.log('handleclick');
			console.log(filterRows);
			const newModel = filterRows.reduce<any>((acc, row: any) => {
				console.log(row.id);
				console.log(acc);
				acc[row.id] = {
					Role: {
						mode: GridCellModes.View,
					},
					EnterEditQuote: {
						mode: GridCellModes.View,
					},
					EnterEditOrder: {
						mode: GridCellModes.View,
					},
					SetSalesPlan: {
						mode: GridCellModes.View,
					},
					ManageSG: {
						mode: GridCellModes.View,
					},
					ReadOnlyQuote: {
						mode: GridCellModes.View,
					},
					ReadOnlyOrder: {
						mode: GridCellModes.View,
					},
					ManageTweaker: {
						mode: GridCellModes.View,
					},
					ManageECommerce: {
						mode: GridCellModes.View,
					},
					SetControlsPermissions: {
						mode: GridCellModes.View,
					},
					AssignDivisionAccess: {
						mode: GridCellModes.View,
					},
					Dashboard: {
						mode: GridCellModes.View,
					},
					ManagingDefaultListViews: {
						mode: GridCellModes.View,
					},
					ManagingIntegrationMappingMills: {
						mode: GridCellModes.View,
					},
					SendDcxInfo: {
						mode: GridCellModes.View,
					},
					PriceExperimentation: {
						mode: GridCellModes.View,
					},
				};
				return acc;
			}, {});

			setCellModesModel(newModel);
		};
		const handleAdd = () => {
			let id: number = permissionRows[permissionRows.length - 1].id + 1;
			setPermissionRows((oldRows) => [...oldRows, { id }]);
			setFilterRows(permissionRows);
			console.log(filterRows);
			setCellModesModel((oldModel) => ({
				...oldModel,
				[id]: {
					Role: {
						mode: GridCellModes.Edit,
					},
					EnterEditQuote: {
						mode: GridCellModes.Edit,
					},
					EnterEditOrder: {
						mode: GridCellModes.Edit,
					},
					SetSalesPlan: {
						mode: GridCellModes.Edit,
					},
					ManageSG: {
						mode: GridCellModes.Edit,
					},
					ReadOnlyQuote: {
						mode: GridCellModes.Edit,
					},
					ReadOnlyOrder: {
						mode: GridCellModes.Edit,
					},
					ManageTweaker: {
						mode: GridCellModes.Edit,
					},
					ManageECommerce: {
						mode: GridCellModes.Edit,
					},
					SetControlsPermissions: {
						mode: GridCellModes.Edit,
					},
					AssignDivisionAccess: {
						mode: GridCellModes.Edit,
					},
					Dashboard: {
						mode: GridCellModes.Edit,
					},
					ManagingDefaultListViews: {
						mode: GridCellModes.Edit,
					},
					ManagingIntegrationMappingMills: {
						mode: GridCellModes.Edit,
					},
					SendDcxInfo: {
						mode: GridCellModes.Edit,
					},
					PriceExperimentation: {
						mode: GridCellModes.Edit,
					},
				},
			}));
		};

		const handleDelete = () => {
			const difference = setPermissionRows(
				permissionRows.filter((row: any) => !filterRows.includes(row)),
			);
			console.log(difference);
		};

		return (
			<GridToolbarContainer>
				<Button
					color="primary"
					startIcon={<AddIcon />}
					onClick={handleClick}
					disabled={isInEditMode}
				>
					Edit
				</Button>
				<Button
					color="primary"
					startIcon={<AddIcon />}
					onClick={handleDelete}
				>
					Delete
				</Button>
				<Button
					color="primary"
					startIcon={<AddIcon />}
					onClick={handleAdd}
					disabled={isInEditMode}
				>
					Add
				</Button>
				<Button
					color="primary"
					startIcon={<AddIcon />}
					onClick={handleSave}
					disabled={!isInEditMode}
				>
					Save
				</Button>
			</GridToolbarContainer>
		);
	}

	const handleCellEditStart = (
		params: GridCellParams,
		event: MuiEvent<React.SyntheticEvent>,
	) => {
		event.defaultMuiPrevented = true;
	};

	const handleCellEditStop: GridEventListener<'rowEditStop'> = (
		params,
		event,
	) => {
		event.defaultMuiPrevented = true;
	};

	const processRowUpdate = (newRow: GridRowModel) => {
		const updatedRow = { ...newRow, isNew: false };
		let changesValue: GridRowModel;

		permissionRows.map((row) => {
			if (row.id === newRow.id) {
				const changes = lodash.differenceWith(
					lodash.toPairs(newRow),
					lodash.toPairs(row),
					lodash.isEqual,
				);

				// Changes in array form
				//console.log(changes);
				// Changes in object form
				//console.log(lodash.fromPairs(changes));
				changesValue = lodash.fromPairs(changes);
				lodash.merge(row, lodash.fromPairs(changes));
				//setPermissionRows(lodash.merge(row, lodash.fromPairs(changes)));
			}
		});

		setPermissionRows((prevRows) =>
			prevRows.map((row) =>
				row.id === changesValue.id ? changesValue : row,
			),
		);
		//console.log(updatedRow);
		return updatedRow;
	};
	console.log(permissionRows);
	const handleCellModesModelChange = (
		newCellModesModel: GridCellModesModel,
	) => {
		setCellModesModel(newCellModesModel);
	};

	return (
		<Box
			sx={{
				height: 500,
				width: '100%',
				'& .actions': {
					color: 'text.secondary',
				},
				'& .textPrimary': {
					color: 'text.primary',
				},
			}}
		>
			<DataGrid
				rows={permissionRows}
				columns={columns}
				editMode="cell"
				cellModesModel={cellModesModel}
				checkboxSelection
				disableRowSelectionOnClick
				onRowSelectionModelChange={onRowSelectionModelChange}
				isRowSelectable={(params) =>
					params.row.Role !== 'Administrator'
				}
				onCellModesModelChange={handleCellModesModelChange}
				onCellEditStart={handleCellEditStart}
				onCellEditStop={handleCellEditStop}
				processRowUpdate={processRowUpdate}
				slots={{
					toolbar: EditToolbar,
				}}
				slotProps={{
					toolbar: {
						permissionRows,
						cellModesModel,
						setCellModesModel,
						setPermissionRows,
					},
				}}
			/>
		</Box>
	);
}
