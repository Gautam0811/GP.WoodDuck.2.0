import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import { spacing } from '@mui/system';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import GridOnIcon from '@mui/icons-material/GridOn';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

function WD_LeftSideBar() {
  const { collapseSidebar } = useProSidebar();


  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar backgroundColor="#434C56" style={{ height: "100vh" }}>
        <Menu sx={{ px: -2 }} style={{color: "#d6dee9", fontSize: '12px' }}>

          <MenuItem icon={<SpeedIcon fontSize="small" />}>Dashboard</MenuItem>
          <MenuItem icon={<GridOnIcon fontSize="small" />}>Sales Grid</MenuItem>
          <MenuItem icon={<ShoppingCartOutlinedIcon fontSize="small"/>}>Orders</MenuItem>
          <MenuItem icon={<RateReviewOutlinedIcon fontSize="small"/>}>Master Quotes</MenuItem>
          <MenuItem icon={<RequestQuoteOutlinedIcon fontSize="small"/>}>Quote Management</MenuItem>
          <MenuItem icon={<LocalShippingOutlinedIcon fontSize="small"/>}>Shipments</MenuItem>
          <MenuItem 
            icon={<ArrowCircleLeftOutlinedIcon style={{color: "black" }}/>}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          />
          <MenuItem icon={<ReceiptOutlinedIcon fontSize="small" />}>Invoices</MenuItem>
          <MenuItem icon={<EditOutlinedIcon fontSize="small"/>}>Contracts</MenuItem>
          <MenuItem icon={<PersonOutlineOutlinedIcon fontSize="small"/>}>People</MenuItem>
          <MenuItem icon={<BusinessOutlinedIcon fontSize="small"/>}>Facilities</MenuItem>
          <MenuItem icon={<CachedOutlinedIcon fontSize="small"/>}>Supply and Demand</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
        </h1>
      </main>
    </div>
  );
}

export default WD_LeftSideBar;