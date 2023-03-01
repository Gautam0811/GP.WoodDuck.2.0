// WD_OrdersHeader
// Component Utility : The Component is created to render the header of the Orders page
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CommentIcon from '@mui/icons-material/Comment';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

export default function WD_OrdersHeader() {
  return (
    //This is the header for orders
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#f1f4fb",
        paddingTop: "15px",
        paddingBottom: "15px",
        width: "100%",
      }}
    >
      <Stack direction="row" spacing={6}>
      <Typography style={{ paddingLeft: "25px", fontWeight: "bold" }}>
            Orders
          </Typography>
        <Stack direction="row" spacing={1}>
        <Divider orientation="vertical" flexItem />
          <Button href="#text-buttons">Custom</Button>
          <Divider orientation="vertical" flexItem />
          <Button href="#text-buttons">Open</Button>
          <Divider orientation="vertical" flexItem />
          <Button href="#text-buttons">Late Fulfillment</Button>
          <Divider orientation="vertical" flexItem />
          <Button href="#text-buttons">Late Pickup</Button>
          <Divider orientation="vertical" flexItem />
          <Button href="#text-buttons">All</Button>
          <Divider orientation="vertical" flexItem />
          <Button href="#text-buttons" startIcon={<RefreshIcon />}></Button>
          <Divider orientation="vertical" flexItem />
          <Button href="#text-buttons" startIcon={<CommentIcon />}>Custom Views</Button>
          <Divider orientation="vertical" flexItem />
          <Button href="#text-buttons" startIcon={<CommentIcon />}>Custom Standard Views</Button>
        </Stack>
      </Stack>
    </div>
  );
}
