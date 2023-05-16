import Box from '@mui/material/Box';
interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}
export function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Box>
	);
}
