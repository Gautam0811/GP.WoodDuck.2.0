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
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";

export default function DashboardMarket(props:any) {
  return (
    <Box
      className="mx-32 my-32 w90 bg-white box-shad-125grey"
    >
      <Box className="my-20 mx-32">
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom className="pt-16" variant="h6" component="div">
              {props.title}
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <br />
        <Stack direction="row" spacing={props.spacing}>
          {props.data.map((row:any) => (
            <Typography variant="subtitle2" className="font-black ml-32">
              {row.week}
              <Typography
                variant="h6"
                key={row.key}
                className="pt-16 flex-start font-black"
              >
                {row.trend === "0" ? (
                  <Typography
                    variant="caption"
                    className="flex-start bg-42a5f5"
                  >
                    {row.trend}
                  </Typography>
                ) : row.trend === "+" ? (
                  <NorthIcon className="fs-28 green-3cb043"  />
                ) : (
                  <SouthIcon className="fs-28 red-d0312d"  />
                )}
                {row.weekvalue}
                <Typography>%</Typography>
              </Typography>
            </Typography>
          ))}
          <Divider orientation="vertical" flexItem />
          <Typography variant="subtitle2">
            Pricing Power
            <Typography
              variant="caption"
              color={"black"}
              className="flex-start pt-16"
            >
              <SignalCellular4BarIcon
                fontSize="large"
                className="fs-28 green-3cb043"
              />
              <Typography className="fs-24 pl-32">4.4</Typography>
            </Typography>
          </Typography>
        </Stack>
        <br />
      </Box>
    </Box>
  );
}
