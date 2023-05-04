// WD_DashboardMillForecasts
// Component Utility : The Component created to display the Mill Forecasts on the Dashboard
// Author Manas Dixit on 1-3-2023
// -------------------------
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import '../../../styles/StyleMain.css';
import LinearWithValueLabel from './LinearProgressBar';
import { DasboardMillForecastsrows } from '../services/DashboardData';

export default function DasboardMillForecasts() {
	return (
		<Box className="mr-16 my-32 bg-white box-shad-125grey justify-end">
			<Box className="mx-0 my-4">
				<Grid container alignItems="center">
					<Grid item xs className="pl-8">
						<Typography className="p-8 fs-20" component="div">
							Mill Forecasts
						</Typography>
					</Grid>
				</Grid>
				<Divider variant="middle" />
				<table className="w100 fs-11 lh-28">
					<thead className="col-42a5f5 bg-eeeeee">
						<tr>
							<th className="w32"></th>
							<th className="w38">INVENTORY</th>
							<th className="w30">NEXT 3 WEEKS</th>
						</tr>
					</thead>
					<tbody>
						{DasboardMillForecastsrows.map((row) => (
							<tr key={row.name}>
								<th
									className="col-42a5f5 font-weight-normal"
									scope="row"
								>
									{row.name}
								</th>
								<td>
									<LinearWithValueLabel
										Values={row.inventory}
									/>
								</td>
								<td>{row.nextweek}</td>
							</tr>
						))}
					</tbody>
				</table>
				<br />
				<br />
			</Box>
		</Box>
	);
}
