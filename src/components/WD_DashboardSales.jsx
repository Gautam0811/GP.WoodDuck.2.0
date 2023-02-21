import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from "react-router-dom";

export default function WD_DasboardSales() {
  return (
    <Box sx={{ mx: 4,my: 1, width: "90%", bgcolor: "white", boxShadow: '1px 2px 5px grey'}}>
      <Box sx={{ my: 2.5, mx: 5}}>
        <Grid container alignItems="center" >
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
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
        <Divider variant="middle" />
        <Grid>
          <Link to="/#" style={{ color: "#42a5f5", textDecoration: "none", display: 'flex', justifyContent: 'flex-end' }}>
            Recommended Price
          </Link>
        </Grid>
        <br />
        <Stack direction="row" spacing={3.5}>
          <Typography variant="h7" color={"#42a5f5"}>
            Quotes
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                895
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
                <ArrowUpwardIcon style={{fontSize:"medium"}}/>0.8%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            Sales Ave
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                $376
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
                <ArrowDownwardIcon style={{fontSize:"medium"}}/>-0.1%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            Sales Vol
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                396
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
                <ArrowUpwardIcon style={{fontSize:"medium"}}/>4.1%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            Inbound
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                19
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
                <ArrowUpwardIcon style={{fontSize:"medium"}}/>7.3%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            Outbound
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                0
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                0
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            Above
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                69 <Typography sx={{lineHeight:1}}>%</Typography>
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
                <ArrowUpwardIcon style={{fontSize:"medium"}}/>0.7%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            At
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                3 <Typography sx={{lineHeight:1}}>%</Typography>
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
                <ArrowUpwardIcon style={{fontSize:"medium"}}/>100%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            Bellow
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                1291 <Typography sx={{lineHeight:1}}>%</Typography>
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
                <ArrowUpwardIcon style={{fontSize:"medium"}}/>1.9%
            </Typography>
          </Typography>
        </Stack>
        <br/>
      </Box>
    </Box>
  );
}
