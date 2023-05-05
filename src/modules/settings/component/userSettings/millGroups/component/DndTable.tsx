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
} from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';
import { DataItem } from './MillGroupsGrid';

export const DndTable: React.FC<{ items: DataItem[] }> = ({ items }) => {
	// cache the items provided via props in state
	const [localItems, setLocalItems] = useState<Array<DataItem>>(items);

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
					<col style={{ width: '35%' }} />
					<col style={{ width: '20%' }} />
					<col style={{ width: '20%' }} />
					<col style={{ width: '20%' }} />
				</colgroup>
				<TableHead>
					<TableRow>
						<TableCell align="left">&nbsp;</TableCell>
						<TableCell>Id</TableCell>
						<TableCell>Name</TableCell>
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
														<TableCell>
															{item.name}
														</TableCell>
														<TableCell align="right">
															{item.Default}
														</TableCell>
														<TableCell align="right">
															{item.Mills}
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
