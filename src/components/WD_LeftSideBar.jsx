import * as React from "react";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
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

function WD_LeftSideBar() {
  const { collapseSidebar } = useProSidebar();

  React.useEffect(() => {
    collapseSidebar();
  }, []);

  return (
    <div id="app" style={{ display: "flex", height: "100vh" }}>
      <Sidebar backgroundColor="#434C56" style={{ height: "100vh" }}>
        <Menu sx={{ px: -2 }} style={{ color: "#d6dee9", fontSize: "10px" }}>
          <MenuItem icon={<SpeedIcon style={{ fontSize: "16px" }} />}>
            Dashboard
          </MenuItem>
          <MenuItem icon={<GridOnIcon style={{ fontSize: "16px" }} />}>
            Sales Grid
          </MenuItem>
          <MenuItem
            icon={<ShoppingCartOutlinedIcon style={{ fontSize: "16px" }} />}
          >
            Orders
          </MenuItem>
          <MenuItem
            icon={<RateReviewOutlinedIcon style={{ fontSize: "16px" }} />}
          >
            Master Quotes
          </MenuItem>
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
            icon={<ArrowCircleLeftOutlinedIcon style={{ color: "black" }} />}
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
