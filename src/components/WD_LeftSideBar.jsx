import * as React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
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

function WD_LeftSideBar() {
  const { collapseSidebar } = useProSidebar();

  //by default the sidebar is collapsed
  React.useEffect(() => {
    collapseSidebar();
  }, []);

  //all the buttons in the sidebar
  return (
    <div id="app" style={{ display: "flex", height: "100vh" }}>
      <Sidebar backgroundColor="#434C56" style={{ height: "100vh" }}>
        <Menu sx={{ px: -2 }} style={{ color: "#d6dee9", fontSize: "10px" }}>
          <Link to="/" style={{ color: "#d6dee9" }}>
            <MenuItem icon={<SpeedIcon style={{ fontSize: "16px" }} />}>
              Dashboard
            </MenuItem>
          </Link>
          <Link to="/salesgrid" style={{ color: "#d6dee9" }}>
            <MenuItem icon={<GridOnIcon style={{ fontSize: "16px" }} />}>
              Sales Grid
            </MenuItem>
          </Link>
          <Link to="/productgroups" style={{ color: "#d6dee9" }}>
            <MenuItem
              icon={<ShoppingCartOutlinedIcon style={{ fontSize: "16px" }} />}
            >
              Orders
            </MenuItem>
          </Link>
          <Link to="/customizedTabs" style={{ color: "#d6dee9" }}>
          <MenuItem
            icon={<RateReviewOutlinedIcon style={{ fontSize: "16px" }} />}
          >
            Master Quotes
          </MenuItem>
          </Link>
          
          <MenuItem
            icon={<RequestQuoteOutlinedIcon style={{ fontSize: "16px" }} />}
          >
            Quote Management
          </MenuItem>
          <MenuItem
            icon={<LocalShippingOutlinedIcon style={{ fontSize: "16px" }} />}
          >
            Shipments
          </MenuItem>
          <MenuItem
            icon={<ArrowCircleRightOutlinedIcon style={{ color: "black" }} />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          />
          <MenuItem icon={<ReceiptOutlinedIcon style={{ fontSize: "16px" }} />}>
            Invoices
          </MenuItem>
          <MenuItem icon={<EditOutlinedIcon style={{ fontSize: "16px" }} />}>
            Contracts
          </MenuItem>
          <MenuItem
            icon={<PersonOutlineOutlinedIcon style={{ fontSize: "16px" }} />}
          >
            People
          </MenuItem>
          <MenuItem
            icon={<BusinessOutlinedIcon style={{ fontSize: "16px" }} />}
          >
            Facilities
          </MenuItem>
          <MenuItem icon={<CachedOutlinedIcon style={{ fontSize: "16px" }} />}>
            Supply and Demand
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default WD_LeftSideBar;
