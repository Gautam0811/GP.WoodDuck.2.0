/* eslint-disable react/jsx-key */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
	GridRowsProp,
	GridRowModesModel,
	GridRowModes,
	DataGrid,
	GridColDef,
	GridRowParams,
	MuiEvent,
	GridToolbarContainer,
	GridActionsCellItem,
	GridEventListener,
	GridRowId,
	GridRowModel,
} from '@mui/x-data-grid';
import {
	randomCreatedDate,
	randomTraderName,
	randomUpdatedDate,
	randomId,
} from '@mui/x-data-grid-generator';

const initialRows: GridRowsProp = [
	{
		id: 1,
		name: randomTraderName(),
		age: 25,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate(),
	},
	{
		id: 2,
		name: randomTraderName(),
		age: 36,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate(),
	},
	{
		id: 3,
		name: randomTraderName(),
		age: 19,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate(),
	},
	{
		id: 4,
		name: randomTraderName(),
		age: 28,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate(),
	},
	{
		id: 5,
		name: randomTraderName(),
		age: 23,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate(),
	},
];

interface EditToolbarProps {
	rowsIds: any;
	rows: any;
	rowModesModel: any;
	setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
	setRowModesModel: (
		newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
	) => void;
}

function EditToolbar(props: EditToolbarProps) {
	const { rowsIds, rows, rowModesModel, setRows, setRowModesModel } = props;

	const handleClick = () => {
		var id = rows[rows.length - 1].id + 1;
		setRows((oldRows) => [
			...oldRows,
			{ id, name: '', age: '', isNew: true },
		]);
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
		}));
	};
	const handleEditClick = (rowsIds: GridRowId[]) => () => {
		rowsIds.forEach(function (id: GridRowId) {
			console.log(id);
			setRowModesModel({
				...rowModesModel,
				[id]: { mode: GridRowModes.Edit },
			});
		});
	};

	return (
		<GridToolbarContainer>
			<Button
				color="primary"
				startIcon={<AddIcon />}
				onClick={handleClick}
			>
				Add record
			</Button>
			<Button
				color="primary"
				startIcon={<EditIcon />}
				onClick={handleEditClick(rowsIds)}
			/>
		</GridToolbarContainer>
	);
}

export function ViewPermissions() {
	const [rows, setRows] = React.useState(initialRows);
	const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
		{},
	);
	const [rowsIds, setRowIds] = React.useState<GridRowId[]>([]);

	const handleRowEditStart = (
		params: GridRowParams,
		event: MuiEvent<React.SyntheticEvent>,
	) => {
		event.defaultMuiPrevented = true;
	};

	const addToRowId = (id: any) => () => {
		rowsIds.push(id);
		console.log(rowsIds);
	};

	console.log(rowsIds);

	const onRowSelectionModelChange = (ids: any) => {
		addToRowId(ids);
		console.log(rowsIds);
	};

	const handleRowEditStop: GridEventListener<'rowEditStop'> = (
		params,
		event,
	) => {
		event.defaultMuiPrevented = true;
	};

	const handleEditClick = (id: any) => () => {
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.Edit },
		});
	};

	const handleSaveClick = (id: GridRowId) => () => {
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.View },
		});
	};

	const handleDeleteClick = (id: GridRowId) => () => {
		setRows(rows.filter((row) => row.id !== id));
	};

	const handleCancelClick = (id: GridRowId) => () => {
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.View, ignoreModifications: true },
		});

		const editedRow = rows.find((row) => row.id === id);
		if (editedRow!.isNew) {
			setRows(rows.filter((row) => row.id !== id));
		}
	};

	const processRowUpdate = (newRow: GridRowModel) => {
		const updatedRow = { ...newRow, isNew: false };
		setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
		return updatedRow;
	};

	const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
		setRowModesModel(newRowModesModel);
	};

	const columns: GridColDef[] = [
		{
			field: 'actions',
			type: 'actions',
			headerName: 'Actions',
			width: 100,
			cellClassName: 'actions',
			getActions: ({ id }) => {
				return [
					<GridActionsCellItem
						icon={<SaveIcon />}
						label="Save"
						onClick={addToRowId(id)}
					/>,
				];
			},
		},
		// {
		// 	field: 'actions',
		// 	type: 'actions',
		// 	headerName: 'Actions',
		// 	width: 100,
		// 	cellClassName: 'actions',
		// 	getActions: ({ id }) => {
		// 		const isInEditMode =
		// 			rowModesModel[id]?.mode === GridRowModes.Edit;

		// 		if (isInEditMode) {
		// 			return [
		// 				<GridActionsCellItem
		// 					icon={<SaveIcon />}
		// 					label="Save"
		// 					onClick={handleSaveClick(id)}
		// 				/>,
		// 				<GridActionsCellItem
		// 					icon={<CancelIcon />}
		// 					label="Cancel"
		// 					className="textPrimary"
		// 					onClick={handleCancelClick(id)}
		// 					color="inherit"
		// 				/>,
		// 			];
		// 		}

		// 		return [
		// 			<GridActionsCellItem
		// 				icon={<EditIcon />}
		// 				label="Edit"
		// 				className="textPrimary"
		// 				onClick={handleEditClick(id)}
		// 				color="inherit"
		// 			/>,
		// 			<GridActionsCellItem
		// 				icon={<DeleteIcon />}
		// 				label="Delete"
		// 				onClick={handleDeleteClick(id)}
		// 				color="inherit"
		// 			/>,
		// 		];
		// 	},
		// },
		{ field: 'name', headerName: 'Name', width: 180, editable: true },
		{ field: 'age', headerName: 'Age', type: 'number', editable: true },
		{
			field: 'dateCreated',
			headerName: 'Date Created',
			type: 'date',
			width: 180,
			editable: true,
		},
		{
			field: 'lastLogin',
			headerName: 'Last Login',
			type: 'dateTime',
			width: 220,
			editable: true,
		},
	];

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
				rows={rows}
				columns={columns}
				// checkboxSelection
				// onRowSelectionModelChange={(ids) => console.log(ids)}
				editMode="row"
				rowModesModel={rowModesModel}
				onRowModesModelChange={handleRowModesModelChange}
				onRowEditStart={handleRowEditStart}
				onRowEditStop={handleRowEditStop}
				processRowUpdate={processRowUpdate}
				slots={{
					toolbar: EditToolbar,
				}}
				slotProps={{
					toolbar: {
						rowsIds,
						rows,
						rowModesModel,
						setRows,
						setRowModesModel,
					},
				}}
			/>
		</Box>
	);
}
