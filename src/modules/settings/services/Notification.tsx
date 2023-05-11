import { useState } from 'react';

import { Snackbar, Alert } from '@mui/material';

import { SnackbarOrigin } from '@mui/material/Snackbar';

export interface State extends SnackbarOrigin {
	openSnack: boolean;
}

export function Notification(props: any) {
	const { notify, setNotify, vertical, horizontal } = props;

	const [open, setOpen] = useState(true);

	const handleClose = (event: any, reason: any) => {
		setNotify({ ...notify, isOpen: false });
	}; // const [state, setState] = useState<State>({ //  openSnack: false, //  vertical: 'top', //  horizontal: 'right', // }); // const handleCloseSnack = () => { //  setState({ ...state, openSnack: false }); // };

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
