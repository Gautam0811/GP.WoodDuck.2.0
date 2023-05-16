// WD_header-middle-section
// Component Utility : The Component created for rendering a header navigation bar for all the pages in the app
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../../../styles/StyleMain.css';

export function MiddleHeader() {
	//The actual implementation will have call to a API.
	const [post, setPost]: any = useState({
		offers: 250,
		quotes: 350,
		orders: 460,
		fullfilments: 350,
		pickups: 40,
		ar: 36,
	});
	const [name, setName]: any = useState({});

	useEffect(
		() => setName(JSON.parse(localStorage.getItem('status') || '{}')),
		[],
	);

	return (
		// View for header middle section
		<Box className="fs-12 flex-grow">
			<AppBar className="bg-ffb74d position-static">
				<Toolbar>
					<FormControl className="bg-white position-relative min-width-120">
						<Select
							labelId="demo-select-small"
							id="demo-select-small"
							value={parseInt(name.id, 10)}
							label="Name"
							style={{ height: 50 }}
						>
							<MenuItem value={name.id}>
								{name.firstname + ' ' + name.lastname}
							</MenuItem>
						</Select>
					</FormControl>
					<Typography
						component="div"
						className="gray fs-9 flex-grow position-relative header-options"
					>
						<p className="font-weight-bold">OFFERS</p>
						<Typography className="font-black" component="div">
							{post.offers}
						</Typography>
					</Typography>
					<Typography
						component="div"
						className="gray fs-9 flex-grow position-relative header-options"
					>
						<p className="font-weight-bold">OPEN QUOTES</p>
						<Typography className="font-black" component="div">
							{post.quotes}
						</Typography>
					</Typography>
					<Typography
						component="div"
						className="gray fs-9 flex-grow position-relative header-options"
					>
						<p className="font-weight-bold">OPEN ORDERS</p>
						<Typography className="font-black" component="div">
							{post.orders}
						</Typography>
					</Typography>
					<Typography
						component="div"
						className="col-red fs-9 flex-grow position-relative header-options"
					>
						<p className="font-weight-bold">LATE FULFILLMENT</p>
						<Typography className="font-black" component="div">
							{post.fullfilments}
						</Typography>
					</Typography>
					<Typography
						component="div"
						className="col-red fs-9 flex-grow position-relative header-options"
					>
						<p className="font-weight-bold">LATE PICKUP</p>
						<Typography className="font-black" component="div">
							{post.pickups}
						</Typography>
					</Typography>
					<Typography
						component="div"
						className="col-red fs-9 flex-grow position-relative header-options"
					>
						<p className="font-weight-bold">A/R ISSUES</p>
						<Typography className="font-black" component="div">
							{post.ar}
						</Typography>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
