/*Component Name :Notification 
 Utility : This componenet is used to display the permission set view page.
 Author Gautam Malhotra 02-05-2023-------------------------   */

import Box from '@mui/material/Box';
import {
	GridRowsProp,
	GridRowModesModel,
	DataGrid,
	MuiEvent,
	GridEventListener,
	GridRowModel,
	GridCellParams,
} from '@mui/x-data-grid';
import { BindPermissionGrid } from '../../../index';
import { getPermissionSet } from '../../../services/PermissionService';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { CloseButton } from '../../../../../common/button';
import { AddPermissions } from './AddPermissions';
import { EditPermissions } from './EditPermissions';
import { DeletePermissions } from './DeletePermissions';
import { SavePermissions } from './SavePermissions';
import { CancelPermissions } from './CancelPermissions';
import { columns } from '../../../services/PermissionBind';

export function ViewPermissions() {
	const [permissionRows, setPermissionRows] = useState<GridRowsProp>([]);
	// const [rows, setRows] = useState(permissionRows);
	const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
	const [filterRows, setFilterRows] = useState<GridRowsProp>([]);
	const [add, setAdd] = useState(false);

	useEffect(() => {
		getPermissionSet().then((permissionset: any) => {
			setPermissionRows(BindPermissionGrid(permissionset));
		});
	}, []);

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
		setPermissionRows((prevRows) =>
			prevRows.map((row) => (row.id === newRow.id ? updatedRow : row)),
		);
		//console.log(updatedRow);
		return updatedRow;
	};
	console.log(permissionRows);
	const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
		setRowModesModel(newRowModesModel);
	};

	return (
		<Box>
			<Grid className="settings-header">
				<span className="settings-header-text">
					Manage Permission Sets
				</span>
				<div className="flexrow">
					<CancelPermissions
						filterRows={filterRows}
						rowModesModel={rowModesModel}
						setRowModesModel={setRowModesModel}
					/>
					<SavePermissions
						filterRows={filterRows}
						rowModesModel={rowModesModel}
						setRowModesModel={setRowModesModel}
						add={add}
						permissionRows={permissionRows}
						setPermissionRows={setPermissionRows}
					/>
					<DeletePermissions
						filterRows={filterRows}
						rowModesModel={rowModesModel}
						permissionRows={permissionRows}
						setPermissionRows={setPermissionRows}
						setRowModesModel={setRowModesModel}
					/>
					<AddPermissions
						permissionRows={permissionRows}
						setPermissionRows={setPermissionRows}
						setRowModesModel={setRowModesModel}
						rowModesModel={rowModesModel}
						filterRows={filterRows}
						setAdd={setAdd}
					/>
					<EditPermissions
						filterRows={filterRows}
						rowModesModel={rowModesModel}
						setRowModesModel={setRowModesModel}
						setAdd={setAdd}
					/>
					<CloseButton />
				</div>
			</Grid>
			<Grid className="bg-white flexrow justify-space-between pl-16 w100 align-items-center">
				<div>
					<div className="h-400 w-1050">
						<DataGrid
							rows={permissionRows}
							columns={columns}
							editMode="cell"
							rowModesModel={rowModesModel}
							checkboxSelection
							disableRowSelectionOnClick
							onRowSelectionModelChange={
								onRowSelectionModelChange
							}
							isRowSelectable={(params) =>
								params.row.Role !== 'Administrator'
							}
							onRowModesModelChange={handleRowModesModelChange}
							onCellEditStart={handleCellEditStart}
							onCellEditStop={handleCellEditStop}
							processRowUpdate={processRowUpdate}
						/>
					</div>
				</div>
			</Grid>
		</Box>
	);
}
