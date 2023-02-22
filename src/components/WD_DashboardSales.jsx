import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";

function createData(
  quotesvalue,
  salesavevalue,
  salesvolvalue,
  inboundvalue,
  outboundvalue,
  abovevalue,
  atvalue,
  belowvalue,
  quoteschange,
  salesavechange,
  salesvolchange,
  inboundchange,
  outboundchange,
  abovechange,
  atchange,
  belowchange,
  quoteschangevalue,
  salesavechangevalue,
  salesvolchangevalue,
  inboundchangevalue,
  outboundchangevalue,
  abovechangevalue,
  atchangevalue,
  belowchangevalue
) {
  return {
    quotesvalue,
    salesavevalue,
    salesvolvalue,
    inboundvalue,
    outboundvalue,
    abovevalue,
    atvalue,
    belowvalue,
    quoteschange,
    salesavechange,
    salesvolchange,
    inboundchange,
    outboundchange,
    abovechange,
    atchange,
    belowchange,
    quoteschangevalue,
    salesavechangevalue,
    salesvolchangevalue,
    inboundchangevalue,
    outboundchangevalue,
    abovechangevalue,
    atchangevalue,
    belowchangevalue,
    key: Math.random(),
  };
}

const rows = [
  createData(
    895,
    "$376",
    396,
    19,
    0,
    69,
    3,
    1291,
    "increase",
    "decrease",
    "increase",
    "increase",
    "noChange",
    "increase",
    "increase",
    "increase",
    "0.8%",
    "-0.1%",
    "4.1%",
    "7.3%",
    "0%",
    "0.7%",
    "100%",
    "1.9%"
  ),
];

export default function WD_DasboardSales() {
  return (
    <Box
      sx={{
        mx: 4,
        my: 1,
        width: "90%",
        bgcolor: "white",
        boxShadow: "1px 2px 5px grey",
      }}
    >
      <Box sx={{ my: 2.5, mx: 5 }}>
        <Grid container alignItems='center'>
          <Grid item xs>
            <Typography gutterBottom variant='h6' component='div'>
              Sales
            </Typography>
          </Grid>
          <Grid item>
            <FormControl fullWidth sx={{ color: "blue" }}>
              <NativeSelect
                defaultValue={20}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>24 hours</option>
                <option value={20}>7 days</option>
                <option value={30}>30 days</option>
                <option value={40}>6 months</option>
                <option value={50}>12 months</option>
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
        <Divider variant='middle' />
        <Grid>
          <Link
            to='/#'
            style={{
              color: "#42a5f5",
              textDecoration: "none",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            Recommended Price
          </Link>
        </Grid>
        <br />
        <Stack direction='row' spacing={3.5}>
          <Typography variant='h7' color={"#42a5f5"}>
            Quotes
            {rows.map(
              (row) =>
                row.quoteschange === "decrease" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.quotesvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"red"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowDownwardIcon style={{ fontSize: "medium" }} />
                      {row.quoteschangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.quoteschange === "increase" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.quotesvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"green"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowUpwardIcon style={{ fontSize: "medium" }} />
                      {row.quoteschangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.quoteschange === "noChange" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.quotesvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"#42a5f5"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.quoteschangevalue}
                    </Typography>
                  </Typography>
                )
            )}
          </Typography>

          <Typography variant='h7' color={"#42a5f5"}>
            Sales Ave
            {rows.map(
              (row) =>
                row.salesavechange === "decrease" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.salesavevalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"red"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowDownwardIcon style={{ fontSize: "medium" }} />
                      {row.salesavechangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.salesavechange === "increase" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.salesavevalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"green"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowUpwardIcon style={{ fontSize: "medium" }} />
                      {row.salesavechangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.salesavechange === "noChange" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.salesavevalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"#42a5f5"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.salesavechangevalue}
                    </Typography>
                  </Typography>
                )
            )}
          </Typography>

          <Typography variant='h7' color={"#42a5f5"}>
            Sales Vol
            {rows.map(
              (row) =>
                row.salesvolchange === "decrease" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.salesvolvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"red"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowDownwardIcon style={{ fontSize: "medium" }} />
                      {row.salesvolchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.salesvolchange === "increase" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.salesvolvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"green"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowUpwardIcon style={{ fontSize: "medium" }} />
                      {row.salesvolchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.salesvolchange === "noChange" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.salesvolvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"#42a5f5"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.salesvolchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
          </Typography>

          <Typography variant='h7' color={"#42a5f5"}>
            Inbound
            {rows.map(
              (row) =>
                row.inboundchange === "decrease" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.inboundvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"red"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowDownwardIcon style={{ fontSize: "medium" }} />
                      {row.inboundchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.inboundchange === "increase" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.inboundvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"green"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowUpwardIcon style={{ fontSize: "medium" }} />
                      {row.inboundchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.inboundchange === "noChange" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.inboundvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"#42a5f5"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.inboundchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
          </Typography>

          <Typography variant='h7' color={"#42a5f5"}>
            Outbound
            {rows.map(
              (row) =>
                row.outboundchange === "decrease" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.outboundvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"red"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowDownwardIcon style={{ fontSize: "medium" }} />
                      {row.outboundchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.outboundchange === "increase" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.outboundvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"green"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowUpwardIcon style={{ fontSize: "medium" }} />
                      {row.outboundchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.outboundchange === "noChange" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.outboundvalue}
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"#42a5f5"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.outboundchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
          </Typography>

          <Typography variant='h7' color={"#42a5f5"}>
            Above
            {rows.map(
              (row) =>
                row.abovechange === "decrease" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.abovevalue}
                      <Typography sx={{ lineHeight: 1 }}>%</Typography>
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"red"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowDownwardIcon style={{ fontSize: "medium" }} />
                      {row.abovechangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.abovechange === "increase" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.abovevalue}
                      <Typography sx={{ lineHeight: 1 }}>%</Typography>
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"green"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowUpwardIcon style={{ fontSize: "medium" }} />
                      {row.abovechangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.abovechange === "noChange" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.abovevalue}
                      <Typography sx={{ lineHeight: 1 }}>%</Typography>
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"#42a5f5"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.abovechangevalue}
                    </Typography>
                  </Typography>
                )
            )}
          </Typography>

          <Typography variant='h7' color={"#42a5f5"}>
            At
            {rows.map(
              (row) =>
                row.atchange === "decrease" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.atvalue}
                      <Typography sx={{ lineHeight: 1 }}>%</Typography>
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"red"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowDownwardIcon style={{ fontSize: "medium" }} />
                      {row.atchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.atchange === "increase" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.atvalue}
                      <Typography sx={{ lineHeight: 1 }}>%</Typography>
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"green"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowUpwardIcon style={{ fontSize: "medium" }} />
                      {row.atchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.atchange === "noChange" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.atvalue}
                      <Typography sx={{ lineHeight: 1 }}>%</Typography>
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"#42a5f5"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.atchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
          </Typography>

          <Typography variant='h7' color={"#42a5f5"}>
            Below
            {rows.map(
              (row) =>
                row.belowchange === "decrease" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.belowvalue}
                      <Typography sx={{ lineHeight: 1 }}>%</Typography>
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"red"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowDownwardIcon style={{ fontSize: "medium" }} />
                      {row.belowchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.belowchange === "increase" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.belowvalue}
                      <Typography sx={{ lineHeight: 1 }}>%</Typography>
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"green"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      <ArrowUpwardIcon style={{ fontSize: "medium" }} />
                      {row.belowchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
            {rows.map(
              (row) =>
                row.belowchange === "noChange" && (
                  <Typography key={row.key}>
                    <Typography
                      variant='h5'
                      color={"black"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.belowvalue}
                      <Typography sx={{ lineHeight: 1 }}>%</Typography>
                    </Typography>
                    <Typography
                      variant='caption'
                      color={"#42a5f5"}
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {row.belowchangevalue}
                    </Typography>
                  </Typography>
                )
            )}
          </Typography>
        </Stack>
        <br />
      </Box>
    </Box>
  );
}
