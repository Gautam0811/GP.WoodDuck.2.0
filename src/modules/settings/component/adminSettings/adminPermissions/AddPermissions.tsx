import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {
	GridRowsProp,
	GridRowModesModel,
	GridRowModes,
} from '@mui/x-data-grid';

interface AddProps {
	rows: any;
	setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
	setRowModesModel: (
		newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
	) => void;
}

export function AddPermissions(props: AddProps) {
	const { rows, setRows, setRowModesModel } = props;

	const handleClick = () => {
		let id: number = rows[rows.length - 1].id + 1;
		setRows((oldRows) => [...oldRows, { id }]);
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit, fieldToFocus: 'Role' },
		}));
	};

	return (
		<Box>
			<LoadingButton className="buttontype4" onClick={handleClick}>
				<div>
					<div>
						<AddOutlinedIcon className="icontype1" />
					</div>
					<div>
						<span>ADD</span>
					</div>
				</div>
			</LoadingButton>
		</Box>
	);
}
