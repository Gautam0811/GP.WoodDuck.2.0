import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import Modal from '@mui/material/Modal';
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
import { getPermissionSet } from '../../../services/PermissionApi';
import { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { Notification } from '../../../services/Notification';
import { SnackbarOrigin } from '@mui/material/Snackbar';

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
export interface State extends SnackbarOrigin {
	openSnack: boolean;
}

export function ViewPermissions() {
	let lodash = require('lodash');
	const [permissionRows, setPermissionRows] = useState<GridRowsProp>([]);
	// const [rows, setRows] = useState(permissionRows);
	const [cellModesModel, setCellModesModel] = useState<GridCellModesModel>(
		{},
	);
	const [filterRows, setFilterRows] = useState<GridRowsProp>([]);

	const [notify, setNotify] = useState({
		isOpen: false,
		message: '',
		type: '',
	});
	const [state, setState] = useState<State>({
		openSnack: false,
		vertical: 'top',
		horizontal: 'right',
	});

	const [apiResponse, setApiResponse] = useState(false);

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
			headerAlign: 'center',
			width: 130,
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
			width: 130,
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
			width: 130,
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
			width: 150,
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
			width: 130,
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
			width: 130,
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
			width: 130,
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
			width: 130,
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
			width: 130,
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
			width: 150,
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
			width: 130,
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
			width: 130,
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
			width: 130,
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
			width: 130,
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
		const [open, setOpen] = useState(false);
		const handleOpen = () => setOpen(true);
		const isInEditMode = Object.keys(cellModesModel).some((rowId) => {
			return (
				cellModesModel[rowId].Role.mode === GridCellModes.Edit &&
				cellModesModel[rowId].EnterEditQuote.mode ===
					GridCellModes.Edit &&
				cellModesModel[rowId].EnterEditOrder.mode === GridCellModes.Edit
			);
		});

		const handleClickSnack = (newState: SnackbarOrigin) => () => {
			setState({ openSnack: true, ...newState });
			handleSave();
		};
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
			setApiResponse(true);

			setNotify({
				isOpen: true,
				message: 'Permission sets updated, new values added!',
				type: 'success',
			});
		};
		const handleCancel = () => {
			console.log('handleclick');
			console.log(filterRows);
			const newModel = filterRows.reduce<any>((acc, row: any) => {
				console.log(row.id);
				console.log(acc);
				acc[row.id] = {
					Role: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					EnterEditQuote: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					EnterEditOrder: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					SetSalesPlan: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					ManageSG: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					ReadOnlyQuote: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					ReadOnlyOrder: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					ManageTweaker: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					ManageECommerce: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					SetControlsPermissions: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					AssignDivisionAccess: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					Dashboard: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					ManagingDefaultListViews: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					ManagingIntegrationMappingMills: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					SendDcxInfo: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
					PriceExperimentation: {
						mode: GridCellModes.View,
						ignoreModifications: true,
					},
				};
				return acc;
			}, {});

			setCellModesModel(newModel);
			setApiResponse(false);

			setNotify({
				isOpen: true,
				message: 'Permission sets not updated!',
				type: 'error',
			});
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
			<Grid style={{ float: 'right', marginLeft: 'auto' }}>
				<GridToolbarContainer>
					<Button
						color="primary"
						startIcon={<EditIcon />}
						onClick={handleClick}
						disabled={!filterRows.length}
					>
						Edit
					</Button>
					<Button
						color="primary"
						startIcon={<DeleteIcon />}
						onClick={handleDelete}
						disabled={!filterRows.length}
					>
						Delete
					</Button>
					<Button
						color="primary"
						startIcon={<AddOutlinedIcon />}
						onClick={handleAdd}
						disabled={isInEditMode}
					>
						Add
					</Button>
					<Button
						color="primary"
						startIcon={<SaveIcon />}
						onClick={handleOpen}
						disabled={!isInEditMode}
					>
						Save
					</Button>
				</GridToolbarContainer>
				{apiResponse ? (
					<Notification notify={notify} setNotify={setNotify} />
				) : (
					<Notification notify={notify} setNotify={setNotify} />
				)}
				<Modal open={open}>
					<Box className="modal-class">
						<Grid className="p-8 pr-32">
							<Typography className="fs-24 text-align-center col-005fa8">
								Save Permissions Set Edits?
							</Typography>
							<p>
								Are you sure you want to save the permission
								sets?
							</p>
						</Grid>
						<Grid className="flexrow pt-16 justify-space-evenly">
							<Button
								onClick={handleClickSnack({
									vertical: 'top',
									horizontal: 'right',
								})}
								variant="contained"
							>
								Yes
							</Button>
							<Button
								onClick={handleCancel}
								className="bg-grey col-white"
							>
								No
							</Button>
						</Grid>
					</Box>
				</Modal>
			</Grid>
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
		<Grid
			sx={{
				height: 500,
				width: '85%',
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
		</Grid>
	);
}
