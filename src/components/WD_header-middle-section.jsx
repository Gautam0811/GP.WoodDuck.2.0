import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
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
  const baseURL = "https://localhost:44351/employee/";
  const [name, setName] = React.useState("");
  const [post, setPost] = React.useState({});
  const [id, setId] = React.useState(1001);

  function getCustomerData() {
    return axios.get(baseURL+id)
      .then((response) => {
        const customerList = response.data;
        console.log(customerList);
        return customerList;
      })
  }

  React.useEffect(() => {
    getCustomerData().then((customerData) => {
      setPost(customerData);
    });
  }, [id]);

  const handleChange = (event) => {
    setId(event.target.value);
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
              value={id}
              label="Name"
              onChange={handleChange}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="1001">DAVID KLEKAMP</MenuItem>
              <MenuItem value="1002">HANNAH </MenuItem>
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
              {post.offers}
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
              {post.quotes}
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
              {post.orders}
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
              {post.fullfilments}
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
              {post.pickups}
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
              {post.ar}
            </Typography>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            color={"primary"}
            align="center"
            sx={{ flexGrow: 1, position: "absolute", right: 10 }}
          >
            {post.name}
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
