// ManageDefaultUserSettings
// Component Utility : The Component is created to display the default user settings for admin.
// Author Mitravardhan Singh Raghav on 11-05-2023
// -------------------------
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';
import { CloseButton } from '../../../../../common/button';
import { Tab, Tabs } from '@mui/material';
import { TabPanel } from './TabPanel';

export function ManageDefaultSetting() {
	const [data, setData]: any = useState({});
	const [value, setValue] = useState(0);
	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};
	const handleDefaultMillGroupsClick = () => {
		// handle the click event for "Manage Default Mill Groups" link
		console.log("Clicked 'Manage Default Mill Groups'");
	};

	const handleDefaultProductGroupsClick = () => {
		// handle the click event for "Manage Default Product Groups" link
		console.log("Clicked 'Manage Default Product Groups'");
	};

	const handleDefaultCustomSettingsClick = () => {
		// handle the click event for "Manage Default Custom Settings" link
		console.log("Clicked 'Manage Default Custom Settings'");
	};

	const handleQuoteManagementDefaultViewsClick = () => {
		// handle the click event for "Manage Quote Management Default Views" link
		console.log("Clicked 'Manage Quote Management Default Views'");
	};

	const handleMasterQuotesDefaultViewsClick = () => {
		// handle the click event for "Manage Master Quotes Default Views" link
		console.log("Clicked 'Manage Master Quotes Default Views'");
	};

	useEffect(() => {
		setData(JSON.parse(localStorage.getItem('status')!));
	}, []);

	console.log('Subdivision', data.subdivision);
	return (
		//This is the tabs header for Manage User Settings
		<Box>
			<Grid className="default-settings-header">
				<span className="default-settings-header-text">
					Manage Default Setting
				</span>
				<CloseButton />
			</Grid>
			{data.subdivision === 'SL' ? (
				<Grid>
					<Box className="border-radius-5 box-shad-125grey w85 bg-white mx-32 my-8">
						<Grid>
							<Grid item xs>
								<Typography
									className="font-bold p-4 pl-16 fs-16 bg-grey-white col-005fa8"
									component="div"
								>
									Lumber
								</Typography>
							</Grid>
							<Grid className="flexcolumn w85">
								<Grid
									container
									className="w85 p-16 justify-space-between"
								>
									<Typography
										component={RouterLink}
										to="#"
										className="pb-16 col-005fa8"
										onClick={handleDefaultMillGroupsClick}
									>
										Manage Default Mill Groups
									</Typography>
									<Typography
										component={RouterLink}
										to="#"
										className="pb-16 col-005fa8"
										onClick={
											handleDefaultProductGroupsClick
										}
									>
										Manage Default Product Groups
									</Typography>
									<Typography
										component={RouterLink}
										to="#"
										className="pb-16 col-005fa8"
										onClick={
											handleDefaultCustomSettingsClick
										}
									>
										Manage Default Custom Settings
									</Typography>
								</Grid>
								<Grid container className="w85 p-16">
									<Typography
										component={RouterLink}
										to="#"
										className="pb-16 col-005fa8"
										onClick={
											handleQuoteManagementDefaultViewsClick
										}
									>
										Manage Quote Management Default Views
									</Typography>
									<Typography
										component={RouterLink}
										to="#"
										className="pb-16 col-005fa8"
										onClick={
											handleMasterQuotesDefaultViewsClick
										}
									>
										Manage Master Quotes Default Views
									</Typography>
								</Grid>
							</Grid>
							<Grid className="pb-64"></Grid>
						</Grid>
						<br />
					</Box>
				</Grid>
			) : (
				<Grid>
					<Box className="border-radius-5 box-shad-125grey w85 bg-white mx-32 my-8">
						<Grid>
							<Grid>
								<Tabs
									value={value}
									onChange={handleChange}
									aria-label="tabs"
								>
									<Tab label="OSB" />
									<Tab label="Plywood" />
								</Tabs>
								<TabPanel value={value} index={0}>
									<Box className=" w85 bg-white mx-32 my-8">
										<Grid>
											<Grid className="flexcolumn w85">
												<Grid
													container
													className="w85 p-16 justify-space-between"
												>
													<Typography
														component={RouterLink}
														to="#"
														className="pb-16 col-005fa8"
														onClick={
															handleDefaultMillGroupsClick
														}
													>
														Manage Default Mill
														Groups
													</Typography>
													<Typography
														component={RouterLink}
														to="#"
														className="pb-16 col-005fa8"
														onClick={
															handleDefaultProductGroupsClick
														}
													>
														Manage Default Product
														Groups
													</Typography>
													<Typography
														component={RouterLink}
														to="#"
														className="pb-16 col-005fa8"
														onClick={
															handleDefaultCustomSettingsClick
														}
													>
														Manage Default Custom
														Settings
													</Typography>
												</Grid>
												<Grid
													container
													className="w85 p-16"
												>
													<Typography
														component={RouterLink}
														to="#"
														className="pb-16 col-005fa8"
														onClick={
															handleQuoteManagementDefaultViewsClick
														}
													>
														Manage Quote Management
														Default Views
													</Typography>
													<Typography
														component={RouterLink}
														to="#"
														className="pb-16 col-005fa8"
														onClick={
															handleMasterQuotesDefaultViewsClick
														}
													>
														Manage Master Quotes
														Default Views
													</Typography>
												</Grid>
											</Grid>
											<Grid className="pb-64"></Grid>
										</Grid>
										<br />
									</Box>
								</TabPanel>
								<TabPanel value={value} index={1}>
									<Box className=" w85 bg-white mx-32 my-8">
										<Grid>
											<Grid className="flexcolumn w85">
												<Grid
													container
													className="w85 p-16 justify-space-between"
												>
													<Typography
														component={RouterLink}
														to="#"
														className="pb-16 col-005fa8"
														onClick={
															handleDefaultMillGroupsClick
														}
													>
														Manage Default Mill
														Groups
													</Typography>
													<Typography
														component={RouterLink}
														to="#"
														className="pb-16 col-005fa8"
														onClick={
															handleDefaultProductGroupsClick
														}
													>
														Manage Default Product
														Groups
													</Typography>
													<Typography
														component={RouterLink}
														to="#"
														className="pb-16 col-005fa8"
														onClick={
															handleDefaultCustomSettingsClick
														}
													>
														Manage Default Custom
														Settings
													</Typography>
												</Grid>
												<Grid
													container
													className="w85 p-16"
												>
													<Typography
														component={RouterLink}
														to="#"
														className="pb-16 col-005fa8"
														onClick={
															handleQuoteManagementDefaultViewsClick
														}
													>
														Manage Quote Management
														Default Views
													</Typography>
													<Typography
														component={RouterLink}
														to="#"
														className="pb-16 col-005fa8"
														onClick={
															handleMasterQuotesDefaultViewsClick
														}
													>
														Manage Master Quotes
														Default Views
													</Typography>
												</Grid>
											</Grid>
											<Grid className="pb-64"></Grid>
										</Grid>
										<br />
									</Box>
								</TabPanel>
							</Grid>
							<Grid className="pb-64"></Grid>
						</Grid>
						<br />
					</Box>
				</Grid>
			)}
		</Box>
	);
}
