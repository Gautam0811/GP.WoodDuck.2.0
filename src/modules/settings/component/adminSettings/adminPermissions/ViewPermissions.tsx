import React, { useState } from 'react';
import {
	Grid,
	TextField,
	Button,
	Checkbox,
	TableCell,
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	Paper,
} from '@mui/material';

interface RowData {
	id: number;
	name: string;
	age: number;
}

interface Props {
	rows: RowData[];
	onSave: (data: RowData[]) => void;
}

var EditMode = false;

const ViewPermissions: React.FC<Props> = ({ rows, onSave }) => {
	const [editingRows, setEditingRows] = useState<Record<number, RowData>>({});
	const [selectedRows, setSelectedRows] = useState<number[]>([]);
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const handleCheckboxChange = (id: number) => {
		console.log(id);
		// selectedRows.include(id)
		console.log(selectedRows);
		if (isEditing) {
			if (selectedRows.includes(id)) {
				setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
				setEditingRows((prev) => {
					const { [id]: deleted, ...rest } = prev;
					return rest;
				});
			} else {
				setSelectedRows([...selectedRows, id]);
				setEditingRows((prev) => ({
					...prev,
					[id]: rows.find((row) => row.id === id) as RowData,
				}));
			}
		}
	};

	// const handleCreateNewRow = (values: Person) => {
	// 	tableData.push(values);
	// 	setTableData([...tableData]);
	//   };

	const handleEdit = (id: number, field: keyof RowData, value: any) => {
		setEditingRows((prev) => ({
			...prev,
			[id]: {
				...prev[id],
				[field]: value,
			},
		}));
	};

	const handleSave = () => {
		const editedRows = rows.map((row) =>
			editingRows[row.id] ? editingRows[row.id] : row,
		);
		onSave(editedRows);
		console.log(editedRows);
		//var a = document.getElementById("Age");
		// console.log(a.innerText);
		setEditingRows({});
		setSelectedRows([]);
		setIsEditing(false);
	};

	const handleEditClick = () => {
		EditMode = true;
		setIsEditing(true);
		console.log(selectedRows);
	};

	const handleCancelClick = () => {
		setEditingRows({});
		setSelectedRows([]);
		setIsEditing(false);
	};

	return (
		<TableContainer component={Paper}>
			<Grid container justifyContent="flex-end" mt={2}>
				<Grid item>
					<Button
						variant="contained"
						color="primary"
						onClick={handleSave}
					>
						Save
					</Button>
				</Grid>

				<Grid item>
					<Button
						variant="contained"
						color="primary"
						onClick={handleEditClick}
					>
						Edit
					</Button>
				</Grid>

				<Grid item>
					<Button
						variant="contained"
						color="primary"
						onClick={handleCancelClick}
					>
						Cancel
					</Button>
				</Grid>
			</Grid>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell padding="checkbox">
							<Checkbox
								indeterminate={
									selectedRows.length > 0 &&
									selectedRows.length < rows.length
								}
								checked={selectedRows.length === rows.length}
								onChange={() =>
									selectedRows.length === rows.length
										? setSelectedRows([])
										: setSelectedRows(
												rows.map((row) => row.id),
										  )
								}
							/>
						</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Age</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell padding="checkbox">
								<Checkbox
									checked={selectedRows.includes(row.id)}
									onChange={() =>
										handleCheckboxChange(row.id)
									}
								/>
							</TableCell>
							<TableCell>
								<TextField
									label="Name"
									value={
										editingRows[row.id]?.name ?? row.name
									}
									onChange={(e) =>
										handleEdit(
											row.id,
											'name',
											e.target.value,
										)
									}
									fullWidth
									disabled={!selectedRows.includes(row.id)}
									// disabled={true}
								/>
							</TableCell>
							<TableCell>
								<TextField
									label="Age"
									type="number"
									value={editingRows[row.id]?.age ?? row.age}
									onChange={(e) =>
										handleEdit(
											row.id,
											'age',
											e.target.value,
										)
									}
									fullWidth
									//disabled={true}
									disabled={!selectedRows.includes(row.id)}
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export { ViewPermissions };
