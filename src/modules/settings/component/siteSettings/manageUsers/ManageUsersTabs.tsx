// ManageUserTabs
// Component Utility : The Component is created display the tabs part below header part of the manage users page
// Author Ananya Dhar on 04-05-2023
// -------------------------
import { useEffect, useState } from 'react';

import RefreshIcon from '@mui/icons-material/Refresh';
import { Tabs, Tab, Grid, Box, Typography, Alert } from '@mui/material';
import { ViewManageUsers, DeactivateManageUsers } from './index';
import { ActivateManageUsers } from './index';
import { OrdersGridrows } from '../../../../settings/services/ManageUsersData';
import { AddManageUsers } from './index';
import { EditManageUsers } from './index';
import { OrdersGridcolumns } from '../../../services/ManageUsersColumns';
import { GridRowsProp, GridRowSelectionModel } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { CloseButton } from '../../../../../common/button';
import { SetTemporaryPermissionsButton } from '../../../../../common/button';
import '../../../styles/Settings.css';
import { TabPanel } from './index';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../../state';

export function ManageUsersTabs() {
	const division = useSelector((state: any) => state.divisionInfo);
	const dispatch = useDispatch();
	const { activeData } = bindActionCreators(actionCreators, dispatch);
	const active = useSelector((state: any) => state.activeInfo);

	const [value, setValue] = useState(0);
	const [orderFilterGridRow, setOrderFilterGridRow] = useState(
		OrdersGridrows.filter(
			(a: any) => a.activeUser === active && a.division === division,
		),
	);

	useEffect(() => {
		setOrderFilterGridRow(
			OrdersGridrows.filter(
				(a: any) => a.activeUser === active && a.division === division,
			),
		);
	}, [active, division]);
	const [filterRows, setFilterRows] = useState<GridRowsProp>([]);

	const onRowSelectionModelChange = (ids: any) => {
		console.log('handleRowEditStart');
		const selectedIDs = new Set(ids);
		console.log('selectedIDs :' + selectedIDs);
		setFilterRows(
			orderFilterGridRow.filter((row: any) => {
				return selectedIDs.has(row.id);
			}),
		);
	};

	const [rowSelectionModel, setRowSelectionModel] =
		useState<GridRowSelectionModel>();

	let shouldHideSubDivisionColumn: any;

	if (division === 'SP') {
		shouldHideSubDivisionColumn = false;
	} else {
		shouldHideSubDivisionColumn = true;
	}

	const [columns, setColumns] = useState(OrdersGridcolumns);

	useEffect(() => {
		if (shouldHideSubDivisionColumn) {
			let data = columns.filter(
				(column) => column.field !== 'subDivision',
			);
			setColumns(data);
		} else {
			setColumns(OrdersGridcolumns);
		}
	}, [shouldHideSubDivisionColumn]);

	//when the tab is changed
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	//this returns the index when tab changes
	function a11yProps(index: number) {
		//alert(index);
		return {
			id: `full-width-tab-${index}`,
			'aria-controls': `full-width-tabpanel-${index}`,
		};
	}

	return (
		//This is the tabs header for Manage Users
		<Box>
			<Grid className="settings-header">
				<span className="settings-header-text">Manage Users</span>
				<div className="flexrow">
					{active ? (
						<Grid className="flexrow">
							<AddManageUsers
								setRows={setOrderFilterGridRow}
								rows={orderFilterGridRow}
								filterRows={filterRows}
							/>
							<EditManageUsers
								filterRows={filterRows}
								setRows={setOrderFilterGridRow}
							/>
							<SetTemporaryPermissionsButton
								isActive={active}
								filterRows={filterRows}
							/>
						</Grid>
					) : null}
					{active ? (
						<DeactivateManageUsers
							filterRows={filterRows}
							setRows={setOrderFilterGridRow}
							rows={orderFilterGridRow}
						/>
					) : (
						<ActivateManageUsers
							filterRows={filterRows}
							setRows={setOrderFilterGridRow}
							rows={orderFilterGridRow}
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
							onClick={() => activeData(true)}
						/>
						<Tab
							label="Inactive"
							{...a11yProps(1)}
							onClick={() => activeData(false)}
						/>
						<Tab icon={<RefreshIcon />} {...a11yProps(2)} />
					</Tabs>
				</Box>
				{filterRows.length > 5 && (
					<Alert className="z-5">
						Cannot select more than 5 Users.
					</Alert>
				)}
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
					isActive={active}
					selectedDivision={division}
				/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ViewManageUsers
					isActive={active}
					selectedDivision={division}
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
						columns={columns}
						rowSelectionModel={rowSelectionModel}
						checkboxSelection
						disableRowSelectionOnClick
						onRowSelectionModelChange={onRowSelectionModelChange}
					/>
				</div>
			</div>
		</Box>
	);
}
