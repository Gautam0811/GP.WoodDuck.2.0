// WD_LeftSideBar
// Component Utility : The Component is created for rendering the left collapsable navigation bar in the app
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from "react";
import { Link } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import GridOnIcon from "@mui/icons-material/GridOn";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { Divider } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import { ShoppingCartOutlined } from "@mui/icons-material";
import "../../styles/styleMain.css";
import { useState } from "react";

function LeftSidebar() {
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

  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");

  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem("sidebar-collapsed", true.toString());
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem("sidebar-collapsed");
  };

  return (
    <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
      <div className="sidebar-items">
        <Link to="./" className="link-text">
          <div className="item">
            <SpeedIcon className="sidebar-icon" />{" "}
            <span className="sidebar-text">Dashboard</span>{" "}
          </div>
        </Link>
        <Link to="./salesgrid" className="link-text">
          <div className="item">
            <GridOnIcon className="sidebar-icon" />{" "}
            <span className="sidebar-text">Salesgrid</span>{" "}
          </div>
        </Link>
        <Link to="/orders" className="link-text">
          <div className="item" onClick={handleClickOrders}>
            <ShoppingCartOutlined className="sidebar-icon" />
            <span className="sidebar-text">Orders</span>
            {openOrders ? " " : " "}
          </div>
        </Link>
        <Collapse in={openOrders} timeout="auto">
          <div className="sidebar-text">
            <Link to="/productgroups" className="link-text">
              <ListItemButton className="padding-left">
                <span className="fontsize">Open</span>
              </ListItemButton>
            </Link>
            <ListItemButton className="padding-left">
              <span className="fontsize ">Late Fulfillment</span>
            </ListItemButton>
            <ListItemButton className="padding-left">
              <span className="fontsize ">Late Pickup</span>
            </ListItemButton>
            <ListItemButton className="padding-left">
              <span className="fontsize">Today</span>
            </ListItemButton>
            <ListItemButton className="padding-left">
              <span className="fontsize">All</span>
            </ListItemButton>
          </div>
        </Collapse>
        <Link to="./orders" className="link-text">
          <div className="item">
            <RateReviewOutlinedIcon className="sidebar-icon" />{" "}
            <span className="sidebar-text">Master Quotes</span>{" "}
          </div>
        </Link>
        <div className="item">
          <RequestQuoteOutlinedIcon className="sidebar-icon" />{" "}
          <span className="sidebar-text">Quote Management</span>{" "}
        </div>
        <div className="item">
          <LocalShippingOutlinedIcon className="sidebar-icon" />{" "}
          <span className="sidebar-text">Shipments</span>{" "}
        </div>
        <div className="arrow-item">
          <ArrowCircleLeftOutlinedIcon
            className="sidebar-arrow-icon"
            onClick={handleToggler}
          />
        </div>
        <div className="item" onClick={handleClickInvoices}>
          <ReceiptOutlinedIcon className="sidebar-icon" />
          <span className="sidebar-text">Invoices</span>
          {openInvoices ? " " : " "}
        </div>
        <Collapse in={openInvoices} timeout="auto">
          <div className="sidebar-text">
            <Link to="/salesgrid" className="link-text">
              <ListItemButton className="padding-left">
                <span className="fontsize">All</span>
              </ListItemButton>
            </Link>
            <ListItemButton className="padding-left">
              <span className="fontsize">Open</span>
            </ListItemButton>
            <ListItemButton className="padding-left">
              <span className="fontsize">Late</span>
            </ListItemButton>
            <ListItemButton className="padding-left">
              <span className="fontsize">Paid</span>
            </ListItemButton>
          </div>
        </Collapse>
        <Link to="/contracts" className="link-text">
          <div className="item" onClick={handleClickContracts}>
            <EditOutlinedIcon className="sidebar-icon" />
            <span className="sidebar-text">Contracts</span>
            {openContracts ? " " : " "}
          </div>
        </Link>
        <Collapse in={openContracts} timeout="auto">
          <div className="sidebar-text">
            <Link to="/salesgrid" className="link-text">
              <ListItemButton className="padding-left">
                <span className="fontsize">Active</span>
              </ListItemButton>
            </Link>
            <ListItemButton className="padding-left">
              <span className="fontsize">Inactive</span>
            </ListItemButton>
            <ListItemButton className="padding-left">
              <span className="fontsize">Mine</span>
            </ListItemButton>
            <ListItemButton className="padding-left">
              <span className="fontsize">All</span>
            </ListItemButton>
          </div>
        </Collapse>
        <Link to="/contracts" className="link-text">
          <div className="item">
            <PersonOutlineOutlinedIcon className="sidebar-icon" />{" "}
            <span className="sidebar-text">People</span>{" "}
          </div>
        </Link>
        <Link to="/contracts" className="link-text">
          <div className="item">
            <BusinessOutlinedIcon className="sidebar-icon" />{" "}
            <span className="sidebar-text">Facilities</span>{" "}
          </div>
        </Link>
        <Link to="/settings" className="link-text">
          <div className="item">
            <CachedOutlinedIcon className="sidebar-icon" />{" "}
            <span className="sidebar-text">Supply and Demand</span>{" "}
          </div>
        </Link>

        <Divider />
        <Link to="/contracts" className="link-text">
          <div className="item">
            <FormatListNumberedIcon className="sidebar-icon" />{" "}
            <span className="sidebar-text">Recent Items</span>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LeftSidebar;
