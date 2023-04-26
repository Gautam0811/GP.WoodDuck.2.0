// Profile Modal component
// Component Utility : This Component is created for displaying profile information after a user clicks on his/her Profile Avatar.
// Author Ananya Dhar on 24-3-2023
// -------------------------

import * as React from 'react';
import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import SpeedIcon from '@mui/icons-material/Speed';
import GridOnIcon from '@mui/icons-material/GridOn';
import { ShoppingCartOutlined } from '@mui/icons-material';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import '../../../styles/LeftSideBar.css';
import '../../../styles/StyleMain.css';
import { Grid, Stack, Modal, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function LeftSideBar_Small_Screen() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [openOrders, setOpenOrders] = React.useState(false);
	const handleClickOrders = () => {
		setOpenOrders(!openOrders);
	};

	const [openInvoices, setOpenInvoices] = React.useState(false);
	const handleClickInvoices = () => {
		setOpenInvoices(!openInvoices);
	};

	const [openContracts, setOpenContracts] = React.useState(false);
	const handleClickContracts = () => {
		setOpenContracts(!openContracts);
	};

	return (
		<Grid>
			<Button onClick={handleOpen}>
				<Stack spacing={1}>
					<MenuIcon className="hamburger-menu"></MenuIcon>
				</Stack>
			</Button>
			<Modal open={open} onClose={handleClose}>
				<div className="Sidebar ">
					<Link to="./" className="link-text">
						<div className="mobile-icon mt-32">
							<SpeedIcon className="sidebar-icon" />{' '}
							<Typography className="sidebar-text fs-12">
								Dashboard
							</Typography>{' '}
						</div>
					</Link>
					<Link to="./salesgrid" className="link-text">
						<div className="mobile-icon">
							<GridOnIcon className="sidebar-icon" />{' '}
							<Typography className="sidebar-text fs-12">
								Salesgrid
							</Typography>{' '}
						</div>
					</Link>
					<Link to="/orders" className="link-text">
						<div
							className="mobile-icon"
							onClick={handleClickOrders}
						>
							<ShoppingCartOutlined className="sidebar-icon" />
							<Typography className="sidebar-text fs-12">
								Orders
							</Typography>
							{openOrders ? ' ' : ' '}
						</div>
					</Link>
					<Link to="./orders" className="link-text">
						<div className="mobile-icon">
							<RateReviewOutlinedIcon className="sidebar-icon" />{' '}
							<Typography className="sidebar-text fs-12">
								Master Quotes
							</Typography>{' '}
						</div>
					</Link>
					<div className="mobile-icon">
						<RequestQuoteOutlinedIcon className="sidebar-icon" />{' '}
						<Typography className="sidebar-text fs-12">
							Quote Management
						</Typography>{' '}
					</div>
					<div className="mobile-icon">
						<LocalShippingOutlinedIcon className="sidebar-icon" />{' '}
						<Typography className="sidebar-text fs-12">
							Shipments
						</Typography>{' '}
					</div>
					<div className="mobile-icon" onClick={handleClickInvoices}>
						<ReceiptOutlinedIcon className="sidebar-icon" />
						<Typography className="sidebar-text fs-12">
							Invoices
						</Typography>
						{openInvoices ? ' ' : ' '}
					</div>
					<Link to="/contracts" className="link-text">
						<div
							className="mobile-icon"
							onClick={handleClickContracts}
						>
							<EditOutlinedIcon className="sidebar-icon" />
							<Typography className="sidebar-text fs-12">
								Contracts
							</Typography>
							{openContracts ? ' ' : ' '}
						</div>
					</Link>
					<Link to="/contracts" className="link-text">
						<div className="mobile-icon">
							<PersonOutlineOutlinedIcon className="sidebar-icon" />{' '}
							<Typography className="sidebar-text fs-12">
								People
							</Typography>{' '}
						</div>
					</Link>
					<Link to="/contracts" className="link-text">
						<div className="mobile-icon">
							<BusinessOutlinedIcon className="sidebar-icon" />{' '}
							<Typography className="sidebar-text fs-12">
								Facilities
							</Typography>{' '}
						</div>
					</Link>
					<Link to="/settings" className="link-text">
						<div className="mobile-icon">
							<CachedOutlinedIcon className="sidebar-icon" />{' '}
							<Typography className="sidebar-text fs-12">
								Supply and Demand
							</Typography>{' '}
						</div>
					</Link>
					<Divider />
					<Link to="/contracts" className="link-text">
						<div className="mobile-icon">
							<FormatListNumberedIcon className="sidebar-icon" />{' '}
							<Typography className="sidebar-text fs-12">
								Recent Items
							</Typography>{' '}
						</div>
					</Link>
				</div>
			</Modal>
		</Grid>
	);
}
