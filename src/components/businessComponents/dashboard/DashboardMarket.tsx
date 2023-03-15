// WD_DashboardMarketPOV
// Component Utility : The Component created to display the Market POV on the Dashboard 
// Author Manas Dixit on 1-3-2023
// -------------------------
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { green, red } from "@mui/material/colors";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";

export default function DashboardMarket(props) {
  return (
    <Box
      sx={{
        mx: 4,
        my: 4,
        width: "90%",
        bgcolor: "white",
        boxShadow: "1px 2px 5px grey",
      }}
    >
      <Box sx={{ my: 2.5, mx: 4 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              {props.title}
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <br />
        <Stack direction="row" spacing={props.spacing}>
          {props.data.map((row) => (
            <Typography variant="h7" color={"black"} sx={{ ml: 4 }}>
              {row.week}
              <Typography
                variant="h5"
                color={"black"}
                sx={{ display: "flex", justifyContent: "start", pt: 2 }}
                key={row.key}
              >
                {row.trend === "0" ? (
                  <Typography
                    variant="caption"
                    color={"#42a5f5"}
                    sx={{ display: "flex", justifyContent: "start" }}
                  >
                    {row.trend}
                  </Typography>
                ) : row.trend === "+" ? (
                  <NorthIcon sx={{ fontSize: "28px", color: green[400] }} />
                ) : (
                  <SouthIcon sx={{ fontSize: "28px", color: red[400] }} />
                )}
                {row.weekvalue}
                <Typography sx={{ lineHeight: 1 }}>%</Typography>
              </Typography>
            </Typography>
          ))}
          <Divider orientation="vertical" flexItem />
          <Typography variant="h7" color={"BLACK"}>
            Pricing Power
            <Typography
              variant="caption"
              color={"black"}
              sx={{ display: "flex", justifyContent: "start", pt: 2 }}
            >
              <SignalCellular4BarIcon
                size="large"
                sx={{ fontSize: "38px", color: green[400] }}
              />
              <Typography sx={{ pl: 4, fontSize: "24px" }}>4.4</Typography>
            </Typography>
          </Typography>
        </Stack>
        <br />
      </Box>
    </Box>
  );
}
