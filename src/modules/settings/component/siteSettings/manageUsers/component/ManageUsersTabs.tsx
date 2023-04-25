// ManageUserTabs
// Component Utility : The Component is created display the tabs part below header part of the manage users page
// Author Ananya Dhar on 06-04-2023
// -------------------------
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Tabs, Tab } from '@mui/material';
import { ViewManageUsers } from './index';
import { OrdersGridrows } from '../services/Data';
import { AddManageUsers } from './AddManageUsers';
import { EditManageUsers } from './EditManageUsers';
import {
	GridColDef,
	GridRowId,
	GridRowModesModel,
	GridRowModes,
	GridValidRowModel,
	GridActionsCellItem,
	GridRowSelectionModel,
	DataGrid,
	GridRowProps,
} from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/material/Checkbox';
import { CloseButton } from '../../../../../../common/button';
interface SelectedRowParams {
	id: GridRowId;
}

export function ManageUsersTabs() {
	const [value, setValue] = React.useState(0);
	const [isActive, setIsActive]: any = React.useState(true);

	const [orderFilterGridRow, setOrderFilterGridRow]: any = React.useState(
		OrdersGridrows.filter(
			(a) =>
				a.activeUser === isActive &&
				a.businessLine ===
					window.localStorage.getItem('subdivisionValue'),
		),
	);

	React.useEffect(() => {
		setOrderFilterGridRow(
			OrdersGridrows.filter(
				(a) =>
					a.activeUser === isActive &&
					a.businessLine ===
						window.localStorage.getItem('subdivisionValue'),
			),
		);
	}, [isActive]);



	const [rowSelectionModel, setRowSelectionModel] =
		React.useState<GridRowSelectionModel>();

	const [rows, setRows] = React.useState(OrdersGridrows);

	const [selectedRowParams, setSelectedRowParams] =
		React.useState<SelectedRowParams>();

	const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
		{},
	);

	const [checked, setChecked] = React.useState(true);

	const handleRowSelection = (id: GridRowId) => () => {
		setSelectedRowParams({ id });
		console.log(selectedRowParams);
	};

	const processRowUpdate = (newRow: GridValidRowModel) => {
		const updatedRow = { ...newRow, isNew: false };
		setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
		return updatedRow;
	};

	const rowMode = React.useMemo(() => {
		if (!selectedRowParams) {
			return 'view';
		}
		const { id } = selectedRowParams;
		return rowModesModel[id]?.mode || 'view';
	}, [rowModesModel, selectedRowParams]);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	function setValueActive() {
		setIsActive(true);
	}
	function setValueInactive() {
		setIsActive(false);
	}

	interface TabPanelProps {
		children: React.ReactNode;
		value: number;
		index: number;
	}
	function TabPanel(props: TabPanelProps) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`full-width-tabpanel-${index}`}
				aria-labelledby={`full-width-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}

	//this returns the index when tab changes
	function a11yProps(index: number) {
		//alert(index);
		return {
			id: `full-width-tab-${index}`,
			'aria-controls': `full-width-tabpanel-${index}`,
		};
	}

	const OrdersGridcolumns: GridColDef[] = [
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
					setChecked(true);
					return [
						<GridActionsCellItem
							icon={<Checkbox checked={true} />}
							label="Save"
							onClick={handleRowSelection(id)}
						/>,
					];
				}
				setChecked(false);
				return [
					<GridActionsCellItem
						icon={<Checkbox checked={false} />}
						label="Save"
						onClick={handleRowSelection(id)}
					/>,
				];
			},
		},
		{
			field: 'businessLine',
			headerName: 'Business Line',
			type: 'string',
			width: 100,
		},
		{
			field: 'subDivision',
			headerName: 'Sub Division',
			type: 'string',
			editable: true,
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
			field: 'temporaryPermissionDate',
			headerName: 'Temporary Permission Date Start/End',
			align: 'center',
			width: 200,
			type: 'string',
		},
	];

	// const rowWithIds = orderFilterGridRow.map((row: any)=>({ id: randomId(), ...row}));

	return (
		//This is the tabs header for Manage Users
		<Box>
			<Grid className="settings-header">
				<span className="settings-header-text">Manage Users</span>
				<div className="flexrow">
					<EditManageUsers
						selectedRowParams={selectedRowParams}
						rowMode={rowMode}
						rowModesModel={rowModesModel}
						setRowModesModel={setRowModesModel}
					/>
					<AddManageUsers
						setRows={setRows}
						setRowModesModel={setRowModesModel}
					/>
					<CloseButton />
				</div>
			</Grid>
			<Grid className="bg-grey-white flexrow justify-space-between pl-16 w100 align-items-center">
				<Box>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab
							label="Active"
							{...a11yProps(0)}
							onClick={setValueActive}
						/>
						<Tab
							label="Inactive"
							{...a11yProps(1)}
							onClick={setValueInactive}
						/>
						<Tab icon={<RefreshIcon />} {...a11yProps(2)} />
					</Tabs>
				</Box>
				{orderFilterGridRow.length > 1 ? (
					<Typography className="pr-16 gray">
						{orderFilterGridRow.length} Users
					</Typography>
				) : (
					<Typography className="pr-16 gray">
						{orderFilterGridRow.length} User
					</Typography>
				)}
			</Grid>
			<TabPanel value={value} index={0}>
				<ViewManageUsers
					isActive={isActive}
					selectedDivision={window.localStorage.getItem(
						'subdivisionValue',
					)}
				/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ViewManageUsers
					isActive={isActive}
					selectedDivision={window.localStorage.getItem(
						'subdivisionValue',
					)}
				/>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<RefreshIcon />
			</TabPanel>
			<div>
				<div className="h-400 w-1000">
					<DataGrid
						getRowId={(row) => row.id}
						rows={orderFilterGridRow}
						columns={OrdersGridcolumns}
						rowSelectionModel={rowSelectionModel}
						disableRowSelectionOnClick={true}
						rowModesModel={rowModesModel}
						onRowModesModelChange={(model) =>
							setRowModesModel(model)
						}
						processRowUpdate={processRowUpdate}
					/>
				</div>
			</div>
		</Box>
	);
}
