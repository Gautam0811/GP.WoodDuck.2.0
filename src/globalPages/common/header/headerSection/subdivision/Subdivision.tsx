// Subdivision
// Component Utility : The Component created for displaying subdivision in the right header section
// Author Ananya Dhar on 29-03-2023
// -------------------------

import * as React from "react";
import Typography from "@mui/material/Typography";
import "../../../../../styles/StyleMain.css";
import { Grid, Modal, Button, Box} from "@mui/material";
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    // View for Subdivision section
    <Grid className="flex-end">
      <Button onClick={handleOpen}>
        <Typography className="col-005fa8">{name.subdivision}</Typography>
        {open ? (
          <ArrowDropUpIcon className="col-005fa8" />
        ) : (
          <ArrowDropDownIcon className="col-005fa8" />
        )}
      </Button>
      <Grid>
        <Modal open={open} onClose={handleClose}>
          <Box className="flexcolumn modal-header-subdivision ">
            <Button className="col-005fa8">SL</Button>
            <Button className="col-005fa8">SP</Button>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
}
