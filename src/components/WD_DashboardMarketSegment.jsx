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

export default function WD_DashboardMarketSegment() {
  return (
    <Box sx={{ mx: 4,my: 1, width: "90%", bgcolor: "white", boxShadow: '1px 2px 5px grey'}}>
      <Box sx={{ my: 2.5, mx: 5}}>
        <Grid container alignItems="center" >
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              Market Segments
            </Typography>
          </Grid>
          <Grid item>
            <FormControl fullWidth sx={{ color: "blue" }}>
              <NativeSelect
                defaultValue={10}
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
        <br />
        <Stack direction="row" spacing={6}>
          <Typography variant="h7" color={"#42a5f5"}>
            Industrial
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                0%
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                0%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            National
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                0%
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                0%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            Retail
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                0%
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                0%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            Treater
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                0%
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
                <ArrowDownwardIcon style={{fontSize:"medium"}}/>-1%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            Truss
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                0%
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                0%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            Wholesale
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                0%
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                0%
            </Typography>
          </Typography>
          <Typography variant="h7" color={"#42a5f5"}>
            Other
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                100%
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
                <ArrowUpwardIcon style={{fontSize:"medium"}}/>100%
            </Typography>
          </Typography>
        </Stack>
        <br/>
      </Box>
    </Box>
  );
}
