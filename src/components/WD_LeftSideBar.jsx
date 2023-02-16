import * as React from "react";
import { Link } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import GridOnIcon from "@mui/icons-material/GridOn";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { Divider } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import { ShoppingCartOutlined } from "@mui/icons-material";
import "../styles/WD_Styles.css";
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
      localStorage.setItem("sidebar-collapsed", true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem("sidebar-collapsed");
  };

  return (
    <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
      <div className="sidebar-items">
        <Link to="./" style={{ color: "#ffffff", textDecoration: "none" }}>
          <div className="item">
            <SpeedIcon className="sidebar-icon" />{" "}
            <span className="sidebar-text">Dashboard</span>{" "}
          </div>
        </Link>
        <Link
          to="./salesgrid"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          <div className="item">
            <GridOnIcon className="sidebar-icon" />{" "}
            <span className="sidebar-text">Salesgrid</span>{" "}
          </div>
        </Link>
        <div className="item" onClick={handleClickOrders}>
          <ShoppingCartOutlined className="sidebar-icon" />
          <span className="sidebar-text">Orders</span>
          {openOrders ? " " : " "}
        </div>
        <Collapse in={openOrders} timeout="auto">
          <div component="div" disablePadding>
            <Link
              to="/productgroups"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              <ListItemButton sx={{ pl: 6 }}>
                <span className="fontsize">Open</span>
              </ListItemButton>
            </Link>
            <ListItemButton sx={{ pl: 6 }}>
              <span className="fontsize">Late Fulfillment</span>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <span className="fontsize">Late Pickup</span>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <span className="fontsize">Today</span>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <span className="fontsize">All</span>
            </ListItemButton>
          </div>
        </Collapse>
        <div className="item">
          <RateReviewOutlinedIcon className="sidebar-icon" />{" "}
          <span className="sidebar-text">Master Quotes</span>{" "}
        </div>
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
          <div component="div" disablePadding>
            <Link
              to="/salesgrid"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              <ListItemButton sx={{ pl: 6 }}>
                <span className="fontsize">All</span>
              </ListItemButton>
            </Link>
            <ListItemButton sx={{ pl: 6 }}>
              <span className="fontsize">Open</span>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <span className="fontsize">Late</span>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <span className="fontsize">Paid</span>
            </ListItemButton>
          </div>
        </Collapse>
        <div className="item" onClick={handleClickContracts}>
          <EditOutlinedIcon className="sidebar-icon" />
          <span className="sidebar-text">Contracts</span>
          {openContracts ? " " : " "}
        </div>
        <Collapse in={openContracts} timeout="auto">
          <div component="div" disablePadding>
            <Link
              to="/salesgrid"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              <ListItemButton sx={{ pl: 6 }}>
                <span className="fontsize">Active</span>
              </ListItemButton>
            </Link>
            <ListItemButton sx={{ pl: 6 }}>
              <span className="fontsize">Inactive</span>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <span className="fontsize">Mine</span>
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <span className="fontsize">All</span>
            </ListItemButton>
          </div>
        </Collapse>

        <div className="item">
          <PersonOutlineOutlinedIcon className="sidebar-icon" />{" "}
          <span className="sidebar-text">People</span>{" "}
        </div>
        <div className="item">
          <BusinessOutlinedIcon className="sidebar-icon" />{" "}
          <span className="sidebar-text">Facilities</span>{" "}
        </div>
        <div className="item">
          <CachedOutlinedIcon className="sidebar-icon" />{" "}
          <span className="sidebar-text">Supply and Demand</span>{" "}
        </div>
        <Divider />
        <div className="item">
          <FormatListNumberedIcon className="sidebar-icon" />{" "}
          <span className="sidebar-text">Recent Items</span>{" "}
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
