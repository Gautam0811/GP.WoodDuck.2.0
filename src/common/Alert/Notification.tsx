/*Component Name :Notification 
 Utility : This componenet is used todisplay the Toast Meesage.
 Author Krishna Choudharyn 06-03-2023-------------------------   */

import { Snackbar, Alert } from '@mui/material';
import { SnackbarOrigin } from '@mui/material/Snackbar';
export interface State extends SnackbarOrigin {
	openSnack: boolean;
}
export function Notification(props: any) {
	const { notify, setNotify } = props;

	const handleClose = (event: any, reason: any) => {
		setNotify({ ...notify, isOpen: false });
	};

	return (
		<Snackbar
			onClose={handleClose}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={notify.isOpen}
			autoHideDuration={2000}
		>
			<Alert severity={notify.type}>{notify.message}</Alert>
		</Snackbar>
	);
}
