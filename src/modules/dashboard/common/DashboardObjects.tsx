import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function DashboardObjects(props: any) {
	return (
		<Box className="mx-32 w90 bg-white box-shad-125grey">
			<Box className="my-20 mx-40">
				<Grid container alignItems="center">
					<Grid item xs>
						<Typography
							gutterBottom
							className="pt-16"
							variant="h6"
							component="div"
						>
							{props.title}
						</Typography>
					</Grid>
					<Grid item>
						<FormControl fullWidth className="col-blue">
							<NativeSelect
								defaultValue={10}
								inputProps={{
									name: 'age',
									id: 'uncontrolled-native',
								}}
							>
								<option value={10}>24 hours</option>
								<option value={20}>7 days</option>
								<option value={30}>30 days</option>
								<option value={40}>6 months</option>
								<option value={50}>12 months</option>
							</NativeSelect>
						</FormControl>
					</Grid>
				</Grid>
				<Divider variant="middle" />
				<br />
				<Stack direction="row" spacing={props.spacing}>
					{props.data.map((row: any) => (
						// eslint-disable-next-line react/jsx-key
						<Typography variant="subtitle2" className="col-42a5f5">
							{row.header}
							<Typography
								variant="h5"
								className="font-black flex-start pt-16"
							>
								{row.value}
							</Typography>
							{row.trend === '0' ? (
								<Typography
									variant="caption"
									color={'#42a5f5'}
									className="flex-start "
								>
									{row.growth}
								</Typography>
							) : row.trend === '+' ? (
								<Typography
									variant="caption"
									className="col-green flex-start"
								>
									{row.growth}
									<ArrowUpwardIcon className="fs-med" />
								</Typography>
							) : (
								<Typography
									variant="caption"
									className="col-red flex-start"
								>
									{row.growth}
									<ArrowDownwardIcon className="fs-med" />
								</Typography>
							)}
						</Typography>
					))}
				</Stack>
				<br />
			</Box>
		</Box>
	);
}
