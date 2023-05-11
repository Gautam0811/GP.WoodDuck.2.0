// WD_SiteSettings
// Component Utility : The Component is created to render site settings tab in the Settings page
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import { ShoppingCartOutlined } from '@mui/icons-material';

export function SiteSettings() {
	const [manageUsers, setmanageUsers] = useState(false);
	const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
	const [isExpanded, setIsExpanded] = useState(
		sidebarCollapsed ? false : true,
	);

	const [data, setData]: any = useState({});
	useEffect(() => {
		setData(JSON.parse(localStorage.getItem('status')!));
	}, []);

	const handleClickManageUsers = () => {
		setmanageUsers(!manageUsers);
	};
	return (
		<Box className="border-radius-5  box-shad-125grey w30 bg-white mx-32 my-8">
			<Grid container>
				<Grid item xs>
					<Typography
						className="p-4 pl-16 fs-16 bg-grey-white font-bold"
						component="div"
					>
						SITE SETTINGS
					</Typography>
				</Grid>
			</Grid>
			<Stack spacing={0.2} className="p-8">
				<Link to="#" className="text-dec-none">
					<Typography className="col-005fa8">
						Mass Price Updates
					</Typography>
				</Link>
				<Link to="#" className="text-dec-none">
					<Typography className="col-005fa8">
						Mass Price Mill Groups
					</Typography>
				</Link>
				<Link to="#" className="text-dec-none">
					<Typography className="col-005fa8">
						Mass Price Product Groups
					</Typography>
				</Link>
				<Link to="#" className="text-dec-none">
					<Typography className="col-005fa8">
						Mill Threat Levels
					</Typography>
				</Link>
				{data.isAdmin && (
					<Link to="/settings/manageUsers" className="text-dec-none">
						<Typography className="col-005fa8">
							Manage Users
						</Typography>
					</Link>
				)}
				<Link to="#" className="text-dec-none">
					<Typography className="col-005fa8">Salespersons</Typography>
				</Link>
				<Link to="#" className="text-dec-none">
					<Typography className="col-005fa8">Tweakers</Typography>
				</Link>
				<Link to="#" className="text-dec-none">
					<Typography className="col-005fa8">
						Cross Reference Data
					</Typography>
				</Link>
				{data.isAdmin && (
					<Link
						to="/settings/managepermissions"
						className="text-dec-none"
					>
						<Typography className="col-005fa8">
							Manage Permission Sets and Controls
						</Typography>
					</Link>
				)}
			</Stack>
			<br />
		</Box>
	);
}
