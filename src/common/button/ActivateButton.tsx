import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import { GridRowsProp } from '@mui/x-data-grid';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

interface EditToolbarProps {
	filterRows: GridRowsProp;
	onClick: () => void;
}

export function ActivateButton(props: EditToolbarProps) {
	const { filterRows, onClick } = props;

	return (
		<Box>
			<LoadingButton
				onClick={onClick}
				disabled={!filterRows.length || filterRows.length > 5}
				className="buttontype6"
			>
				<div>
					<div>
						<AddOutlinedIcon className="icontype1" />
					</div>
					<div>
						<span>Activate</span>
					</div>
				</div>
			</LoadingButton>
		</Box>
	);
}
