// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { GridRowsProp } from '@mui/x-data-grid';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

interface AddButtonProps {
	filterRows: GridRowsProp;
	onClick: () => void;
}

export function AddButton(props: AddButtonProps) {
	const { onClick, filterRows } = props;
	return (
		<Box>
			<LoadingButton
				onClick={onClick}
				disabled={filterRows.length >= 1}
				className="buttontype6"
			>
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
