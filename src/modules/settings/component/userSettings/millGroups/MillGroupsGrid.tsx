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
	DataGridPro,
	GridColDef,
	GridRowOrderChangeParams,
	GridRowParams,
	MuiEvent,
	GridToolbarContainer,
	GridActionsCellItem,
	GridEventListener,
	GridRowId,
	GridRowModel,
} from '@mui/x-data-grid-pro';
import { randomId } from '@mui/x-data-grid-generator';

const init_rows: GridRowsProp = [
	{ id: 0, uuid: '1', name: 'All Mills', default: true, mills: 7 },
	{ id: 1, uuid: '2', name: 'Rocky Cracks', default: false, mills: 11 },
	{ id: 2, uuid: '3', name: 'Eastern', default: false, mills: 14 },
	{ id: 3, uuid: '4', name: 'Studs', default: true, mills: 4 },
	{ id: 4, uuid: '4', name: 'Single Mills', default: false, mills: 2 },
	{ id: 5, uuid: '4', name: 'Reload', default: true, mills: 6 },
	{ id: 6, uuid: '4', name: 'New', default: false, mills: 21 },
];

interface EditToolbarProps {
	setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
	setRowModesModel: (
		newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
	) => void;
}

function AddNewRow(props: EditToolbarProps) {
	const { setRows, setRowModesModel } = props;

	const handleClick = () => {
		const id = randomId();
		setRows((oldRows) => [
			...oldRows,
			{
				id,
				uuid: '',
				name: '',
				default: 'boolean',
				mills: Number,
				isNew: true,
			},
		]);
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
		}));
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
		</GridToolbarContainer>
	);
}

function updateRowPosition(
	initialIndex: number,
	newIndex: number,
	rows: Array<GridRowModel>,
): Promise<any> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const rowsClone = [...rows];
			const row = rowsClone.splice(initialIndex, 1)[0];
			rowsClone.splice(newIndex, 0, row);
			resolve(rowsClone);
		}, Math.random() * 500 + 100); // simulate network latency
	});
}

export function MillGroupsGrid() {
	const [rows, setRows] = React.useState(init_rows);
	const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
		{},
	);

	const handleRowEditStart = (
		params: GridRowParams,
		event: MuiEvent<React.SyntheticEvent>,
	) => {
		event.defaultMuiPrevented = true;
	};

	const handleRowEditStop: GridEventListener<'rowEditStop'> = (
		params,
		event,
	) => {
		event.defaultMuiPrevented = true;
	};

	const handleEditClick = (id: GridRowId) => () => {
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

	const handleRowOrderChange = async (params: GridRowOrderChangeParams) => {};

	const columns: GridColDef[] = [
		{ field: 'uuid', editable: true, headerName: 'uuid', width: 200 },
		{ field: 'name', editable: true, headerName: 'Name', width: 300 },
		{
			field: 'default',
			type: 'boolean',
			editable: true,
			headerName: 'Default',
			width: 200,
		},
		{ field: 'mills', editable: true, headerName: 'Mills', width: 200 },
		{
			field: 'actions',
			type: 'actions',
			headerName: 'Actions',
			width: 100,
			cellClassName: 'actions',
			getActions: ({ id }) => {
				const isInEditMode =
					rowModesModel[id]?.mode === GridRowModes.Edit;

				if (isInEditMode) {
					return [
						<GridActionsCellItem
							key={id}
							icon={<SaveIcon />}
							label="Save"
							onClick={handleSaveClick(id)}
						/>,
						<GridActionsCellItem
							key={id}
							icon={<CancelIcon />}
							label="Cancel"
							className="textPrimary"
							onClick={handleCancelClick(id)}
							color="inherit"
						/>,
					];
				}

				return [
					<GridActionsCellItem
						key={id}
						icon={<EditIcon />}
						label="Edit"
						className="textPrimary"
						onClick={handleEditClick(id)}
						color="inherit"
					/>,
					<GridActionsCellItem
						key={id}
						icon={<DeleteIcon />}
						label="Delete"
						onClick={handleDeleteClick(id)}
						color="inherit"
					/>,
				];
			},
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
			<DataGridPro
				sx={{ pl: 5 }}
				rows={rows}
				columns={columns}
				editMode="row"
				rowReordering
				onRowOrderChange={handleRowOrderChange}
				rowModesModel={rowModesModel}
				onRowModesModelChange={handleRowModesModelChange}
				onRowEditStart={handleRowEditStart}
				onRowEditStop={handleRowEditStop}
				processRowUpdate={processRowUpdate}
				slots={{
					toolbar: AddNewRow,
				}}
				slotProps={{
					toolbar: { setRows, setRowModesModel },
				}}
			/>
		</Box>
	);
}
