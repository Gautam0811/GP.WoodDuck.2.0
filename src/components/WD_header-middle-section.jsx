import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import CalculateTwoToneIcon from "@mui/icons-material/CalculateTwoTone";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function WD_headerMiddleSection() {
  const [name, setName] = React.useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#ffb74d" }}>
        <Toolbar>
          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              position: "relative",
              left: 300,
            }}
            style={{ background: "white" }}
          >
            <InputLabel id="demo-select-small">Name</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={name}
              label="Name"
              onChange={handleChange}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={"DAVID KLEKAMP"}>DAVID KLEKAMP</MenuItem>
              <MenuItem value={"HANNAH"}>HANNAH </MenuItem>
            </Select>
          </FormControl>
          <Typography
            variant="h10"
            component="div"
            color={"grey"}
            sx={{ flexGrow: 1, position: "relative", left: 300 }}
          >
            Offers
            <Typography variant="caption" component="div" color={"black"}>
              0
            </Typography>
          </Typography>
          <Typography
            variant="h10"
            component="div"
            color={"grey"}
            sx={{ flexGrow: 1, position: "relative", left: 180 }}
          >
            Quotes
            <Typography variant="caption" component="div" color={"black"}>
              3
            </Typography>
          </Typography>
          <Typography
            variant="h10"
            component="div"
            color={"grey"}
            sx={{ flexGrow: 1, position: "relative", left: 60 }}
          >
            Orders
            <Typography variant="caption" component="div" color={"black"}>
              314
            </Typography>
          </Typography>
          <Typography
            variant="h10"
            component="div"
            color={"red"}
            sx={{ flexGrow: 1, position: "relative", left: -60 }}
          >
            Fullfilments
            <Typography variant="caption" component="div" color={"black"}>
              276
            </Typography>
          </Typography>
          <Typography
            variant="h10"
            component="div"
            color={"red"}
            sx={{ flexGrow: 1, position: "relative", left: -180 }}
          >
            Pickups
            <Typography variant="caption" component="div" color={"black"}>
              10
            </Typography>
          </Typography>
          <Typography
            variant="h10"
            component="div"
            color={"red"}
            sx={{ flexGrow: 1, position: "relative", left: -300 }}
          >
            A/R
            <Typography variant="caption" component="div" color={"black"}>
              0
            </Typography>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            color={"primary"}
            align='center'
            sx={{ flexGrow: 1, position: "absolute", right: 10}}
          >
            {name}
            <Typography variant="caption" component="div" color={"black"}>
              <IconButton size="small" color="primary" aria-label="menu">
                <MenuIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="menu">
                <HelpOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="menu">
                <CalculateTwoToneIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="menu">
                <SettingsIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="menu">
                <EmailOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="menu">
                <LogoutOutlinedIcon fontSize="small" />
              </IconButton>
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
