import * as React from 'react';
import { DndTable } from './DndTable';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { AddButton } from '../../../../../common/button';

export interface DataItem {
	uuid: string;
	id: number;
	[name: string]: any;
	Default: boolean;
	[Mills: number]: any;
}

var tableData: Array<DataItem> = [
	{ uuid: '1', id: 1, name: 'All Mills', Default: true, Mills: 7 },
	{ uuid: '2', id: 2, name: 'Rocky Cracks', Default: false, Mills: 11 },
	{ uuid: '3', id: 3, name: 'Eastern', Default: false, Mills: 14 },
	{ uuid: '4', id: 4, name: 'Studs', Default: true, Mills: 4 },
	{ uuid: '5', id: 4, name: 'Single Mills', Default: false, Mills: 2 },
	{ uuid: '6', id: 4, name: 'Reload', Default: true, Mills: 6 },
	{ uuid: '7', id: 4, name: 'New', Default: false, Mills: 21 },
];

export function MillGroupsGrid() {
	const handleAddData = () => {
		tableData = [
			...tableData,
			{ uuid: '', id: 0, name: '', Default: false, Mills: 0 },
		];
		console.log(tableData);
	};

	return (
		<div>
			<AddButton onClick={() => handleAddData()} />
			<Container>
				<Paper style={{ padding: 10 }}>
					<DndTable items={tableData} />
				</Paper>
			</Container>
		</div>
	);
}
