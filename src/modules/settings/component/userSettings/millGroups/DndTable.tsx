import React, { useState } from 'react';
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult,
	ResponderProvided,
	DraggableProvided,
	DroppableProvided,
	DraggableStateSnapshot,
} from '@hello-pangea/dnd';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Button,
	TextField,
} from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';
import { DataItem } from './MillGroupsGrid';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function changeChecked(array: boolean[], index: number, checked: boolean) {
	return [...array.slice(0, index), checked, ...array.slice(index + 1)];
}

export const DndTable: React.FC<{ items: DataItem[] }> = ({ items }) => {
	// cache the items provided via props in state
	const [localItems, setLocalItems] = useState<Array<DataItem>>(items);
	const [checked, setChecked] = React.useState(
		localItems.map(({ Default }) => Default),
	);
	const [rowIndex, setRowIndex] = React.useState(-1);
	const [colIndex, setColIndex] = React.useState(-1);
	const [selectedEdit, setSelectedEdit] = React.useState(false);

	const handleTextFieldChange = (
		rowInd: number,
		colName: string,
		value: string,
	) => {
		localItems[rowInd][colName] = value;
	};

	const handleCheckboxChange = (value: boolean, index: number) => {
		const newValue = [
			...checked.slice(0, index),
			value,
			...checked.slice(index + 1),
		];
		setChecked(newValue);
		localItems[index]['Default'] = value;
	};

	const handleExit = (index: number) => {
		setRowIndex(-1);
		setColIndex(-1);
	};

	const handleDelete = (postIndex: number) => {
		setLocalItems((prevPosts: any) =>
			prevPosts.filter((_: any, index: any) => index !== postIndex),
		);
	};

	const handleEdit = (index: number) => {
		setSelectedEdit(!selectedEdit);
		if (selectedEdit === false) {
			setRowIndex(index);
			setColIndex(0);
		}
		if (selectedEdit === true) {
			setRowIndex(-1);
			setColIndex(-1);
		}
	};

	const handleDragEnd = (
		result: DropResult,
		provided?: ResponderProvided,
	) => {
		if (!result.destination) {
			return;
		}

		if (result.destination.index === result.source.index) {
			return;
		}

		setLocalItems((prev: any) => {
			const temp = [...prev];
			const d = temp[result.destination!.index];
			temp[result.destination!.index] = temp[result.source.index];
			temp[result.source.index] = d;

			return temp;
		});
	};

	return (
		<TableContainer>
			<Table>
				<colgroup>
					<col style={{ width: '5%' }} />
					<col style={{ width: '20%' }} />
					<col style={{ width: '20%' }} />
					<col style={{ width: '20%' }} />
					<col style={{ width: '20%' }} />
				</colgroup>
				<TableHead>
					<TableRow>
						<TableCell align="left">&nbsp;</TableCell>
						<TableCell>Id</TableCell>
						<TableCell align="right">Name </TableCell>
						<TableCell align="right">Default</TableCell>
						<TableCell align="right">Mills</TableCell>
					</TableRow>
				</TableHead>
				<DragDropContext onDragEnd={handleDragEnd}>
					<Droppable droppableId="droppable" direction="vertical">
						{(droppableProvided: DroppableProvided) => (
							<TableBody
								ref={droppableProvided.innerRef}
								{...droppableProvided.droppableProps}
							>
								{localItems.map(
									//row and index
									(item: DataItem, index: number) => (
										<Draggable
											key={item.uuid}
											draggableId={item.uuid}
											index={index}
										>
											{(
												draggableProvided: DraggableProvided,
												snapshot: DraggableStateSnapshot,
											) => {
												return (
													<TableRow
														key={item.name}
														ref={
															draggableProvided.innerRef
														}
														{...draggableProvided.draggableProps}
														style={{
															...draggableProvided
																.draggableProps
																.style,
															background:
																snapshot.isDragging
																	? 'rgba(245,245,245, 0.75)'
																	: 'none',
														}}
													>
														<TableCell align="left">
															<div
																{...draggableProvided.dragHandleProps}
															>
																<ReorderIcon />
															</div>
														</TableCell>
														<TableCell>
															{item.id}
														</TableCell>
														<TableCell align="right">
															{rowIndex ===
																index &&
															colIndex === 0 ? (
																<TextField
																	placeholder={
																		item.name
																	}
																	name="mills"
																	defaultValue={
																		localItems[
																			index
																		][
																			'name'
																		]
																	}
																	onChange={(
																		event,
																	) =>
																		handleTextFieldChange(
																			index,
																			'name',
																			event
																				.target
																				.value,
																		)
																	}
																	onKeyPress={(
																		e,
																	) => {
																		if (
																			e.key ===
																			'Enter'
																		) {
																			handleExit(
																				index,
																			);
																		}
																	}}
																/>
															) : (
																item.name
															)}
														</TableCell>
														<TableCell align="right">
															{rowIndex ===
																index &&
															colIndex === 0 ? (
																<Checkbox
																	checked={
																		checked[
																			index
																		]
																	}
																	onChange={(
																		event,
																	) =>
																		handleCheckboxChange(
																			(
																				event.target as HTMLInputElement
																			)
																				.checked,
																			index,
																		)
																	}
																	checkedIcon={
																		<CheckBoxIcon />
																	}
																></Checkbox>
															) : (
																<div>
																	{item.Default ? (
																		<CheckBoxIcon></CheckBoxIcon>
																	) : (
																		<br />
																	)}
																</div>
															)}
														</TableCell>
														<TableCell align="right">
															{rowIndex ===
																index &&
															colIndex === 0 ? (
																<TextField
																	placeholder={
																		item.Mills
																	}
																	defaultValue={
																		localItems[
																			index
																		][
																			'Mills'
																		]
																	}
																	onChange={(
																		event,
																	) =>
																		handleTextFieldChange(
																			index,
																			'Mills',
																			event
																				.target
																				.value,
																		)
																	}
																	onKeyPress={(
																		e,
																	) => {
																		if (
																			e.key ===
																			'Enter'
																		) {
																			handleExit(
																				index,
																			);
																		}
																	}}
																/>
															) : (
																item.Mills
															)}
														</TableCell>
														<TableCell>
															<Button
																style={{
																	marginRight:
																		-8,
																}}
																onClick={() =>
																	handleEdit(
																		index,
																	)
																}
															>
																Edit
															</Button>
															<Button
																onClick={() =>
																	handleDelete(
																		index,
																	)
																}
															>
																Delete
															</Button>
														</TableCell>
													</TableRow>
												);
											}}
										</Draggable>
									),
								)}
								{droppableProvided.placeholder}
							</TableBody>
						)}
					</Droppable>
				</DragDropContext>
			</Table>
		</TableContainer>
	);
};
