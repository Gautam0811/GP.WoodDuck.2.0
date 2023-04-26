// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export function DeleteButton() {
	return (
		<Box>
			<Box>
				<LoadingButton className="fs-10 col-005fa8">
					<div>
						<div>
							<CloseOutlinedIcon className="icontype1" />
						</div>
						<div>
							<span>DELETE</span>
						</div>
					</div>
				</LoadingButton>
			</Box>
		</Box>
	);
}
