// ManageUserTabs
// Component Utility : The Component is created display the tabs part below header part of the manage users page
// Author Ananya Dhar on 04-05-2023
// -------------------------
import { useEffect, useState, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Tabs, Tab } from '@mui/material';
import { ViewManageUsers } from './index';
import { OrdersGridrows } from '../../../../settings/services/ManageUsersData';
import { AddManageUsers } from './AddManageUsers';
import { EditManageUsers } from './EditManageUsers';
import {
	GridColDef,
	GridRowId,
	GridRowModesModel,
	GridRowModes,
	GridRowModel,
	GridActionsCellItem,
	GridRowsProp,
	GridRowSelectionModel,
	DataGrid,
} from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';

import {
	CloseButton,
	DeactivateButton,
	SetTemporaryPermissionsButton,
	ActivateButton,
} from '../../../../../common/button';
import '../../../styles/Settings.css';
import { TabPanel } from './TabPanel';

interface SelectedRowParams {
	id: GridRowId;
}

export function ManageUsersTabs() {
	const division = useSelector((state: any) => state.divisionInfo);

	const [value, setValue] = useState(0);
	const [isActive, setIsActive]: any = useState(true);
	// const division = window.localStorage.getItem('subdivisionValue');

	// console.log('Divisiion', division);
	const [orderFilterGridRow, setOrderFilterGridRow] = useState(
		OrdersGridrows.filter(
			(a: any) => a.activeUser === isActive && a.division === division,
		),
	);

	useEffect(() => {
		console.log('Div', division);
		setOrderFilterGridRow(
			OrdersGridrows.filter(
				(a: any) =>
					a.activeUser === isActive && a.division === division,
			),
		);
	}, [isActive, division]);

	const [rowSelectionModel, setRowSelectionModel] =
		useState<GridRowSelectionModel>();
	const [manageUsersRows, setManageUsersRows] = useState<GridRowsProp>([]);
	const [selectedRowParams, setSelectedRowParams] =
		useState<SelectedRowParams>();
	const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
	const [checked, setChecked] = useState(true);

	//for selecting a row
	const handleRowSelection = (id: GridRowId) => () => {
		setSelectedRowParams({ id });
		console.log(selectedRowParams);
	};

	//For edit permission set
	const processRowUpdate = (newRow: GridRowModel) => {
		const updatedRow = { ...newRow, isNew: false };
		setManageUsersRows(
			manageUsersRows.map((row) =>
				row.id === newRow.id ? updatedRow : row,
			),
		);
		return updatedRow;
	};

	//to determine the mode of the row
	const rowMode = useMemo(() => {
		if (!selectedRowParams) {
			return 'view';
		}
		const { id } = selectedRowParams;
		return rowModesModel[id]?.mode || 'view';
	}, [rowModesModel, selectedRowParams]);

	//when the tab is changed
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	function setValueActive() {
		setIsActive(true);
	}
	function setValueInactive() {
		setIsActive(false);
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
			align: 'center',
			getActions: ({ id }) => {
				const isInEditMode =
					rowModesModel[id]?.mode === GridRowModes.Edit;
				if (isInEditMode) {
					setChecked(true);
					return [
						// eslint-disable-next-line react/jsx-key
						<GridActionsCellItem
							icon={<Checkbox />}
							label="Save"
							onClick={handleRowSelection(id)}
						/>,
					];
				}
				setChecked(false);
				return [
					// eslint-disable-next-line react/jsx-key
					<GridActionsCellItem
						icon={<Checkbox />}
						label="Save"
						onClick={handleRowSelection(id)}
					/>,
				];
			},
		},
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

	return (
		//This is the tabs header for Manage Users
		<Box>
			<Grid className="settings-header">
				<span className="settings-header-text">Manage Users</span>
				<div className="flexrow">
					{isActive ? (
						<div className="flexrow">
							<AddManageUsers
								setRows={setOrderFilterGridRow}
								setRowModesModel={setRowModesModel}
								rows={orderFilterGridRow}
								isActive={isActive}
							/>
							<EditManageUsers
								selectedRowParams={selectedRowParams}
								rowMode={rowMode}
								rowModesModel={rowModesModel}
								setRowModesModel={setRowModesModel}
								isActive={isActive}
							/>
							<SetTemporaryPermissionsButton
								selectedRowParams={selectedRowParams}
								rowMode={rowMode}
								rowModesModel={rowModesModel}
								setRowModesModel={setRowModesModel}
								isActive={isActive}
							/>
						</div>
					) : null}
					{isActive ? (
						<DeactivateButton
							selectedRowParams={selectedRowParams}
							rowMode={rowMode}
							rowModesModel={rowModesModel}
							setRowModesModel={setRowModesModel}
						/>
					) : (
						<ActivateButton
							selectedRowParams={selectedRowParams}
							rowMode={rowMode}
							rowModesModel={rowModesModel}
							setRowModesModel={setRowModesModel}
						/>
					)}
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
					selectedDivision={division}
				/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ViewManageUsers
					isActive={isActive}
					selectedDivision={division}
				/>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<RefreshIcon />
			</TabPanel>
			<div>
				<div className="h-400 w-1000">
					<DataGrid
						// getRowId={(row) => row.id}
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
