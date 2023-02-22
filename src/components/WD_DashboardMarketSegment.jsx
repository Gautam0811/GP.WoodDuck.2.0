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


function createData(industrialvalue, nationalvalue,retailvalue,treatervalue,trussvalue,wholesalevalue,othersvalue,industrialchange, nationalchange,retailchange,treaterchange,trusschange,wholesalechange,otherschange,industrialchangevalue, nationalchangevalue,retailchangevalue,treaterchangevalue,trusschangevalue,wholesalechangevalue,otherschangevalue) {
  return { industrialvalue, nationalvalue,retailvalue,treatervalue,trussvalue,wholesalevalue,othersvalue,industrialchange, nationalchange,retailchange,treaterchange,trusschange,wholesalechange,otherschange,industrialchangevalue, nationalchangevalue,retailchangevalue,treaterchangevalue,trusschangevalue,wholesalechangevalue,otherschangevalue,key:Math.random()};
}

const rows = [
  createData ('0%','0%','0%','0%','0%','0%','0%','noChange','noChange','noChange','decrease','noChange','noChange','increase','0%','0%','0%','-1%','0%','0%','100%'),
  ];

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
            {rows.map((row) => ( row.industrialchange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.industrialvalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.industrialchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.industrialchange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.industrialvalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.industrialchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.industrialchange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.industrialvalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.industrialchangevalue}
            </Typography></Typography>))}

          </Typography>

          
          <Typography variant="h7" color={"#42a5f5"}>
            National
            {rows.map((row) => ( row.nationalchange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.nationalvalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.nationalchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.nationalchange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.nationalvalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.nationalchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.nationalchange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.nationalvalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.nationalchangevalue}
            </Typography></Typography>))}
          </Typography>

          <Typography variant="h7" color={"#42a5f5"}>
            Retail
            {rows.map((row) => ( row.retailchange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.retailvalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.retailchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.retailchange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.retailvalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.retailchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.industrialchange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.retailvalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.industrialchangevalue}
            </Typography></Typography>))}
          </Typography>

          <Typography variant="h7" color={"#42a5f5"}>
            Treater
            {rows.map((row) => ( row.treaterchange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.treatervalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.treaterchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.treaterchange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.treatervalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.treaterchangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.treaterchange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.treatervalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.treaterchangevalue}
            </Typography></Typography>))}
          </Typography>

          <Typography variant="h7" color={"#42a5f5"}>
            Truss
           {rows.map((row) => ( row.trusschange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.trussvalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.trusschangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.trusschange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.trussvalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.trusschangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.trusschange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.trussvalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.trusschangevalue}
            </Typography></Typography>))}
          </Typography>

          <Typography variant="h7" color={"#42a5f5"}>
            Wholesale
            {rows.map((row) => ( row.wholesalechange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.wholesalevalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.wholesalechangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.wholesalechange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.wholesalevalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.wholesalechangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.wholesalechange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.wholesalevalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.wholesalechangevalue}
            </Typography></Typography>))}
          </Typography>

          <Typography variant="h7" color={"#42a5f5"}>
            Other
            {rows.map((row) => ( row.otherschange === 'decrease' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.othersvalue}
            </Typography>
            <Typography variant="caption" color={"red"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowDownwardIcon style={{fontSize:"medium"}}/>{row.otherschangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.otherschange === 'increase' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.othersvalue}
            </Typography>
            <Typography variant="caption" color={"green"} sx={{display: 'flex', justifyContent: 'start'}}>
            <ArrowUpwardIcon style={{fontSize:"medium"}}/>{row.otherschangevalue}
            </Typography></Typography>))}

            {rows.map((row) => ( row.otherschange === 'noChange' &&
            <Typography key={row.key}>
            <Typography variant="h5" color={"black"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.othersvalue}
            </Typography>
            <Typography variant="caption" color={"#42a5f5"} sx={{display: 'flex', justifyContent: 'start'}}>
                {row.otherschangevalue}
            </Typography></Typography>))}
          </Typography>

        </Stack>
        <br/>
      </Box>
    </Box>
  );
}
