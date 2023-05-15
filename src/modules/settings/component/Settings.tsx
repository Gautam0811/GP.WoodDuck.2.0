// WD_Settings
// Component Utility : The Component is created to render settings page
// Author Ananya Dhar on 1-5-2023
// -------------------------
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { UserSettings, SiteSettings, AdminSettings } from './index';

export function Settings() {
	const [data, setData]: any = useState({});
	useEffect(() => {
		setData(JSON.parse(localStorage.getItem('status')!));
	}, []);
	return (
		<Grid className="w100">
			{/* settings header part */}
			<div className="bg-grey-white p-16">
				<span className="settings-header-text">Settings</span>
			</div>

			{/* settings main section */}
			<Grid className="w100 flexrow justify-space-evenly">
				<UserSettings />
				{data.isAdmin && <AdminSettings />}
				<SiteSettings />
			</Grid>
		</Grid>
	);
}
