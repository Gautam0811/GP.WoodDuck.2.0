import * as React from 'react';
import { DndTable } from './DndTable';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

export interface DataItem {
	uuid: string;
	id: number;
	[name: string]: any;
	Default: string;
	[Mills: number]: any;
}

export function MillGroupsGrid() {
	const tableData: Array<DataItem> = [
		{ uuid: '1', id: 1, name: 'All Mills', Default: '', Mills: 7 },
		{ uuid: '2', id: 2, name: 'Rocky Cracks', Default: '', Mills: 11 },
		{ uuid: '3', id: 3, name: 'Eastern', Default: '', Mills: 14 },
		{ uuid: '4', id: 4, name: 'Studs', Default: '', Mills: 4 },
		{ uuid: '5', id: 4, name: 'Single Mills', Default: '', Mills: 2 },
		{ uuid: '6', id: 4, name: 'Reload', Default: '', Mills: 6 },
		{ uuid: '7', id: 4, name: 'New', Default: '', Mills: 21 },
	];

	return (
		<Container>
			<Paper style={{ padding: 10 }}>
				<DndTable items={tableData} />
			</Paper>
		</Container>
	);
}
