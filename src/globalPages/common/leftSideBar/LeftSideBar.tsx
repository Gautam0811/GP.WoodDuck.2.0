// LeftSideBar
// Component Utility : The Component is created for rendering the left collapsable navigation bar in the app
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from 'react';
import { Link } from 'react-router-dom';
import SpeedIcon from '@mui/icons-material/Speed';
import GridOnIcon from '@mui/icons-material/GridOn';
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
import { Divider, Typography } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import { ShoppingCartOutlined } from '@mui/icons-material';
import '../../../styles/LeftSideBar.css';
import '../../../styles/StyleMain.css';
import { useState } from 'react';

export function LeftSideBar() {
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

	const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');

	const [isExpanded, setIsExpanded] = useState(
		sidebarCollapsed ? false : true,
	);

	const handleToggler = () => {
		if (isExpanded) {
			setIsExpanded(false);
			localStorage.setItem('sidebar-collapsed', true.toString());
			return;
		}
		setIsExpanded(true);
		localStorage.removeItem('sidebar-collapsed');
	};

	return (
		<div className={isExpanded ? 'Sidebar' : 'Sidebar collapsed'}>
			<div className="sidebar-items">
				<Link to="./" className="link-text">
					<div className="item">
						<SpeedIcon className="sidebar-icon" />{' '}
						<Typography className="sidebar-text fs-12">
							Dashboard
						</Typography>{' '}
					</div>
				</Link>
				<Link to="./salesgrid" className="link-text">
					<div className="item">
						<GridOnIcon className="sidebar-icon" />{' '}
						<Typography className="sidebar-text fs-12">
							Salesgrid
						</Typography>{' '}
					</div>
				</Link>
				<Link to="/orders" className="link-text">
					<div className="item" onClick={handleClickOrders}>
						<ShoppingCartOutlined className="sidebar-icon" />
						<Typography className="sidebar-text fs-12">
							Orders
						</Typography>
						{openOrders ? ' ' : ' '}
					</div>
				</Link>
				<Collapse in={openOrders} timeout="auto">
					<div className="sidebar-text">
						<Link to="/productgroups" className="link-text">
							<ListItemButton className="padding-left">
								<Typography className="fs-12">Open</Typography>
							</ListItemButton>
						</Link>
						<ListItemButton className="padding-left">
							<Typography className="fs-12 ">
								Late Fulfillment
							</Typography>
						</ListItemButton>
						<ListItemButton className="padding-left">
							<Typography className="fs-12 ">
								Late Pickup
							</Typography>
						</ListItemButton>
						<ListItemButton className="padding-left">
							<Typography className="fs-12">Today</Typography>
						</ListItemButton>
						<ListItemButton className="padding-left">
							<Typography className="fs-12">All</Typography>
						</ListItemButton>
					</div>
				</Collapse>
				<Link to="./orders" className="link-text">
					<div className="item">
						<RateReviewOutlinedIcon className="sidebar-icon" />{' '}
						<Typography className="sidebar-text fs-12">
							Master Quotes
						</Typography>{' '}
					</div>
				</Link>
				<div className="item">
					<RequestQuoteOutlinedIcon className="sidebar-icon" />{' '}
					<Typography className="sidebar-text fs-12">
						Quote Management
					</Typography>{' '}
				</div>
				<div className="item">
					<LocalShippingOutlinedIcon className="sidebar-icon" />{' '}
					<Typography className="sidebar-text fs-12">
						Shipments
					</Typography>{' '}
				</div>
				{isExpanded ? (
					<div className="flex-end arrow-item">
						<ArrowCircleLeftOutlinedIcon
							className="sidebar-arrow-icon"
							onClick={handleToggler}
						/>
					</div>
				) : (
					<div className="arrow-item">
						<ArrowCircleRightOutlinedIcon
							className="sidebar-arrow-icon"
							onClick={handleToggler}
						/>
					</div>
				)}
				<div className="item" onClick={handleClickInvoices}>
					<ReceiptOutlinedIcon className="sidebar-icon" />
					<Typography className="sidebar-text fs-12">
						Invoices
					</Typography>
					{openInvoices ? ' ' : ' '}
				</div>
				<Collapse in={openInvoices} timeout="auto">
					<div className="sidebar-text">
						<Link to="/salesgrid" className="link-text">
							<ListItemButton className="padding-left">
								<Typography className="fs-12">All</Typography>
							</ListItemButton>
						</Link>
						<ListItemButton className="padding-left">
							<Typography className="fs-12">Open</Typography>
						</ListItemButton>
						<ListItemButton className="padding-left">
							<Typography className="fs-12">Late</Typography>
						</ListItemButton>
						<ListItemButton className="padding-left">
							<Typography className="fs-12">Paid</Typography>
						</ListItemButton>
					</div>
				</Collapse>
				<Link to="/contracts" className="link-text">
					<div className="item" onClick={handleClickContracts}>
						<EditOutlinedIcon className="sidebar-icon" />
						<Typography className="sidebar-text fs-12">
							Contracts
						</Typography>
						{openContracts ? ' ' : ' '}
					</div>
				</Link>
				<Collapse in={openContracts} timeout="auto">
					<div className="sidebar-text fs-12">
						<Link to="/salesgrid" className="link-text">
							<ListItemButton className="padding-left">
								<Typography className="fs-12">
									Active
								</Typography>
							</ListItemButton>
						</Link>
						<ListItemButton className="padding-left">
							<Typography className="fs-12">Inactive</Typography>
						</ListItemButton>
						<ListItemButton className="padding-left">
							<Typography className="fs-12">Mine</Typography>
						</ListItemButton>
						<ListItemButton className="padding-left">
							<Typography className="fs-12">All</Typography>
						</ListItemButton>
					</div>
				</Collapse>
				<Link to="/contracts" className="link-text">
					<div className="item">
						<PersonOutlineOutlinedIcon className="sidebar-icon" />{' '}
						<Typography className="sidebar-text fs-12">
							People
						</Typography>{' '}
					</div>
				</Link>
				<Link to="/contracts" className="link-text">
					<div className="item">
						<BusinessOutlinedIcon className="sidebar-icon" />{' '}
						<Typography className="sidebar-text fs-12">
							Facilities
						</Typography>{' '}
					</div>
				</Link>
				<Link to="/settings" className="link-text">
					<div className="item">
						<CachedOutlinedIcon className="sidebar-icon" />{' '}
						<Typography className="sidebar-text fs-12">
							Supply and Demand
						</Typography>{' '}
					</div>
				</Link>

				<Divider />
				<Link to="/contracts" className="link-text">
					<div className="item">
						<FormatListNumberedIcon className="sidebar-icon" />{' '}
						<Typography className="sidebar-text fs-12">
							Recent Items
						</Typography>{' '}
					</div>
				</Link>
			</div>
		</div>
	);
}
