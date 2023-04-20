import { useState, useEffect } from 'react';

import {
	Table,
	TableHead,
	TableCell,
	TableRow,
	TableBody,
	Button,
	styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
	width: 90%;
	margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
	& > th {
		font-size: 20px;
		background: grey;
	}
`;

const TRow = styled(TableRow)`
	& > td {
		font-size: 18px;
	}
`;

const millGroups: any = [
	{ id: 1, name: 'All Mills', Default: '', Mills: 7 },
	{ id: 2, name: 'Rpcky Cracks', Default: '', Mills: 11 },
	{ id: 3, name: 'Eastern', Default: '', Mills: 14 },
	{ id: 4, name: 'Studs', Default: '', Mills: 4 },
	{ id: 4, name: 'Single Mills', Default: '', Mills: 2 },
	{ id: 4, name: 'Reload', Default: '', Mills: 6 },
	{ id: 4, name: 'New', Default: '', Mills: 21 },
];

export function MillGroupsGrid() {
	return (
		<StyledTable>
			<TableHead>
				<THead>
					<TableCell>Id</TableCell>
					<TableCell>Name</TableCell>
					<TableCell>Default</TableCell>
					<TableCell>Mills</TableCell>
					<TableCell></TableCell>
				</THead>
			</TableHead>
			<TableBody>
				{millGroups.map((millGroup: any) => (
					<TRow key={millGroup.id}>
						<TableCell>{millGroup.id}</TableCell>
						<TableCell>{millGroup.name}</TableCell>
						<TableCell>{millGroup.Default}</TableCell>
						<TableCell>{millGroup.Mills}</TableCell>
						<TableCell>
							<Button style={{ marginRight: 10 }}>Edit</Button>
							<Button>Delete</Button>
						</TableCell>
					</TRow>
				))}
			</TableBody>
		</StyledTable>
	);
}
