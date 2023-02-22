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


function createData(onhandvalue, orderfilevalue,orderreadyvalue,shipmentsvalue,productionvalue,onhandchange, orderfilechange,orderreadychange,shipmentschange,productionchange,onhandchangevalue, orderfilechangevalue,orderreadychangevalue,shipmentschangevalue,productionchangevalue) {
  return { onhandvalue, orderfilevalue,orderreadyvalue,shipmentsvalue,productionvalue,onhandchange, orderfilechange,orderreadychange,shipmentschange,productionchange,onhandchangevalue, orderfilechangevalue,orderreadychangevalue,shipmentschangevalue,productionchangevalue,key:Math.random()};
}

const rows = [
  createData ('49643k','294404k','13%','0k','0.00007911318k','noChange','increase','increase','noChange','noChange','0%','0.1%','0.5%','0%','0%'),
  ];


export default function WD_DasboardMills() {
  return (
    <Box sx={{ mx: 4,my: 4, width: "90%", bgcolor: "white", boxShadow: '1px 2px 5px grey'}}>
      <Box sx={{ my: 4, mx: 5}}>
        <Grid container alignItems="center" >
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              Mills
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
        <Stack direction="row" spacing={4}>
          <Typography variant="h7" color={"#42a5f5"}>
            On-hand

            {rows.map((row) => ( row.onhandchange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.onhandvalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.onhandchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.onhandchange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.onhandvalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.onhandchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.onhandchange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.onhandvalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
            {row.onhandchangevalue}
            </Typography></Typography>))}

          </Typography>



          <Typography variant="h7" color={"#42a5f5"}>
            Order File
            {rows.map((row) => ( row.orderfilechange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.orderfilevalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.orderfilechangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.orderfilechange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.orderfilevalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.orderfilechangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.orderfilechange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.orderfilevalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
            {row.orderfilechangevalue}
            </Typography></Typography>))}
          </Typography>

          <Typography variant="h7" color={"#42a5f5"}>
            Order Ready
            {rows.map((row) => ( row.orderreadychange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.orderreadyvalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.orderreadychangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.orderreadychange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.orderreadyvalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.orderreadychangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.orderreadychange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.orderreadyvalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
            {row.orderreadychangevalue}
            </Typography></Typography>))}
          </Typography>

          <Typography variant="h7" color={"#42a5f5"}>
            Shipments
            {rows.map((row) => ( row.shipmentschange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.shipmentsvalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.shipmentschangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.shipmentschange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.shipmentsvalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.shipmentschangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.shipmentschange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.shipmentsvalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
            {row.shipmentschangevalue}
            </Typography></Typography>))}
          </Typography>


          <Typography variant="h7" color={"#42a5f5"}>
            Production
            {rows.map((row) => ( row.productionchange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.productionvalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.productionchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.productionchange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.productionvalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.productionchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.productionchange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
               {row.productionvalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
            {row.productionchangevalue}
            </Typography></Typography>))}
          </Typography>


        </Stack>
        <br/>
      </Box>
    </Box>
  );
}











