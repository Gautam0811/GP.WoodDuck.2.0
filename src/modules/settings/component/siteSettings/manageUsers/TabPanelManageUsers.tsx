/*Component Name : TabPanelManageUsers
 Utility : This component is used to display the Tabs
 Author Ananya Dhar 04-05-2023-------------------------   */
import { Box, Typography } from '@mui/material';

interface TabPanelProps {
	children: React.ReactNode;
	value: number;
	index: number;
}
export function TabPanelManageUsers(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
