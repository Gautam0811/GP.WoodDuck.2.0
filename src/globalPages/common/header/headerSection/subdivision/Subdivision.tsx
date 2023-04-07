// Subdivision
// Component Utility : The Component created for displaying subdivision in the right header section
// Author Ananya Dhar on 29-03-2023
// -------------------------

import * as React from "react";
import Typography from "@mui/material/Typography";
import "../../../../../styles/StyleMain.css";
import { Grid, Modal, Button, Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export function Subdivision() {
  const [name, setName]: any = React.useState({});
  React.useEffect(() => {
    function fetchName() {
      let nameFetch = JSON.parse(localStorage.getItem("status") || "{}");
      setName(nameFetch);
    }
    fetchName();
  }, []);


  const [subdivision, setSubdivision] = React.useState(name.subdivision);

  const handleChange = (event: SelectChangeEvent) => {
    setSubdivision(event.target.value);
  };


  return (
    // View for Subdivision section
    <Grid className="flex-end col-005fa8">
      <Grid>
        <FormControl variant="standard" className="col-005fa8">
        <Select
          id="demo-simple-select-standard"
          value={subdivision}
          onChange={handleChange}
          className="col-005fa8"
        >
          <MenuItem value={10} className="col-005fa8">SL</MenuItem>
          <MenuItem value={20} className="col-005fa8">SP</MenuItem>
        </Select>
        
      </FormControl>
      
      </Grid>
    </Grid>
  );
}
