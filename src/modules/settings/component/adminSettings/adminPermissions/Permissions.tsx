import React, { useState } from 'react';
import { ViewPermissions } from './ViewPermissions';

interface RowData {
	id: number;
	name: string;
	age: number;
}

const Permissions: React.FC = () => {
	const [rows, setRows] = useState<RowData[]>([
		{ id: 1, name: 'Alice', age: 25 },
		{ id: 2, name: 'Bob', age: 30 },
		{ id: 3, name: 'Charlie', age: 35 },
	]);

	const handleSave = (newRows: RowData[]) => {
		setRows(newRows);
	};

	return (
		<div>
			<ViewPermissions rows={rows} onSave={handleSave} />
		</div>
	);
};

export { Permissions };
