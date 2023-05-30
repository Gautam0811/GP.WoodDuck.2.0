// // WD_Buttons
// // Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// // Author Ananya Dhar on 1-3-2023
// // -------------------------
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import { GridRowsProp } from '@mui/x-data-grid';
import BlockIcon from '@mui/icons-material/Block';

interface DeactivateToolbarProps {
	filterRows: GridRowsProp;
	onClick: () => void;
}

export function DeactivateButton(props: DeactivateToolbarProps) {
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
						<BlockIcon className="icontype1" />
					</div>
					<div>
						<span>Deactivate</span>
					</div>
				</div>
			</LoadingButton>
		</Box>
	);
}
