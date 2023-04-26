// Profile Modal component
// Component Utility : This Component is created for displaying profile information after a user clicks on his/her Profile Avatar.
// Author Ananya Dhar on 24-3-2023
// -------------------------

import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

import '../../../../../styles/StyleMain.css';
import { Grid, Stack, Avatar, Modal, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';

export function Profile() {
	const [post, setPost]: any = useState({});
	const [name, setName]: any = useState({});

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const userInfo = useSelector((state: any) => state.loginInfo);
	console.log('userInfo' + userInfo);
	const userData = userInfo.find(
		(user: { userName: any }) =>
			user.userName ===
			JSON.parse(localStorage.getItem('status') || '{}').name,

		// console.log("user.userName"+user.userName)
	);

	// React.useEffect((() => setName(JSON.parse(localStorage.getItem('status') || '{}'))), []);

	useEffect(() => {
		function fetchName() {
			let nameFetch = JSON.parse(localStorage.getItem('status') || '{}');
			setName(nameFetch);
		}
		fetchName();
	}, []);

	// var nameByChar =
	//   JSON.parse(localStorage.getItem("status") || "{}").firstname.charAt(0) +
	//   JSON.parse(localStorage.getItem("status") || "{}").lastname.charAt(0);

	var nameByChar;
	if (nameByChar !== null && nameByChar !== '') {
		nameByChar =
			JSON.parse(localStorage.getItem('status') || '{}').firstname.charAt(
				0,
			) +
			JSON.parse(localStorage.getItem('status') || '{}').lastname.charAt(
				0,
			);
	}

	const logout = () => {
		localStorage.clear();
		window.location.reload();
	};

	useEffect(() => {
		window.addEventListener('storage', logout);
	}, [logout]);

	return (
		<Grid>
			<Button onClick={handleOpen}>
				<Stack spacing={1}>
					<Avatar
						className="bg-005fa8 fs-16"
						sx={{ height: '48px', width: '48px', ml: '.5rem' }}
					>
						{nameByChar}
					</Avatar>
				</Stack>
			</Button>
			<Modal open={open} onClose={handleClose}>
				<Box className="modal-header-right ">
					<Typography className="pl">
						<Grid className="font-black icons-menu" component="div">
							<IconButton
								size="small"
								color="primary"
								aria-label="menu"
							>
								<MenuIcon fontSize="small" />
							</IconButton>
							<IconButton
								size="small"
								color="primary"
								aria-label="menu"
							>
								<HelpOutlinedIcon fontSize="small" />
							</IconButton>
							<IconButton
								size="small"
								color="primary"
								aria-label="menu"
							>
								<CalculateTwoToneIcon fontSize="small" />
							</IconButton>
							<Link to="/settings">
								<IconButton
									size="small"
									color="primary"
									aria-label="menu"
								>
									<SettingsIcon fontSize="small" />
								</IconButton>
							</Link>
							<IconButton
								size="small"
								color="primary"
								aria-label="show 8 new mails"
							>
								<Badge badgeContent={8} color="error">
									<EmailOutlinedIcon fontSize="small" />
								</Badge>
							</IconButton>
						</Grid>
					</Typography>
					<hr className="icons-menu" />
					<div className="mobile-icon pt-16">
						<AccountBoxIcon className="col-005fa8 mr-8"></AccountBoxIcon>
						<Typography component="h2" className="col-005fa8">
							{name.firstname + ' ' + name.lastname}
						</Typography>
					</div>
					<div className="mobile-icon">
						<EmailIcon className="col-005fa8 mr-8"></EmailIcon>
						<Typography className="col-005fa8">
							{userData && userData.email ? userData.email : ''}
						</Typography>
					</div>
					<div className="mobile-icon">
						<KeyIcon className="col-005fa8 mr-8"></KeyIcon>
						<Typography className="col-005fa8">
							Permission Set:{' '}
							{userData && userData.permissionSet
								? userData.permissionSet
								: ''}
						</Typography>
					</div>
					<div className="">
						<Button className="col-005fa8" onClick={logout}>
							<LogoutIcon className="mr-4" /> Logout
						</Button>
					</div>
				</Box>
			</Modal>
		</Grid>
	);
}
