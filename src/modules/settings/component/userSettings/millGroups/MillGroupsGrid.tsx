import * as React from 'react';
import { DndTable } from './DndTable';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

export interface DataItem {
	uuid: string;
	id: number;
	[name: string]: any;
	Default: boolean;
	[Mills: number]: any;
}

export function MillGroupsGrid() {
	const tableData: Array<DataItem> = [
		{ uuid: '1', id: 1, name: 'All Mills', Default: true, Mills: 7 },
		{ uuid: '2', id: 2, name: 'Rocky Cracks', Default: false, Mills: 11 },
		{ uuid: '3', id: 3, name: 'Eastern', Default: false, Mills: 14 },
		{ uuid: '4', id: 4, name: 'Studs', Default: false, Mills: 4 },
		{ uuid: '5', id: 5, name: 'Single Mills', Default: false, Mills: 2 },
		{ uuid: '6', id: 6, name: 'Reload', Default: false, Mills: 6 },
		{ uuid: '7', id: 7, name: 'New', Default: false, Mills: 21 },
	];

	return (
		<Container>
			<Paper style={{ padding: 10 }}>
				<DndTable items={tableData} />
			</Paper>
		</Container>
	);
}
