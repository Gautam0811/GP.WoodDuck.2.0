// WD_header-middle-section
// Component Utility : The Component created for rendering a header navigation bar for all the pages in the app
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../../../styles/StyleMain.css";
import getCustomerData from "../services/HeaderServices";

export  function MiddleHeader() {
  const [post, setPost]:any = React.useState({});
  const [name, setName]:any = React.useState({});

  React.useEffect((() => setName(JSON.parse(localStorage.getItem('status') || '{}'))), []);

  React.useEffect(() => {
    getCustomerData(name.id).then((customerData:any) => {
      setPost(customerData);
    });
  }, [name]);
  
  return (
    // View for header middle section
    <Box className="fontsize" sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#ffb74d" }}>
        <Toolbar>
          <FormControl
            sx={{
            minWidth: 120,
            position: "relative",
            }}
            style={{ background: "white" }}
          >
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={parseInt(name.id, 10)}
              label="Name"
              >
              <MenuItem value={name.id}>{name.name}</MenuItem>
            </Select>
          </FormControl>
          <Typography
            variant="caption"
            component="div"
            color={"grey"}
            sx={{ flexGrow: 1, position: "relative",left:10 }}
          >
            Offers
            <Typography variant="caption" component="div" color={"black"}  aria-label="aa">
             {post.offers}
            </Typography>
          </Typography>
          <Typography
            variant="caption"
            component="div"
            color={"grey"}
            sx={{ flexGrow: 1, position: "relative"}}
          >
            Quotes
            <Typography variant="caption" component="div" color={"black"}>
              {post.quotes}
            </Typography>
          </Typography>
          <Typography
            variant="caption"
            component="div"
            color={"grey"}
            sx={{ flexGrow: 1, position: "relative"}}
          >
            Orders
            <Typography variant="caption" component="div" color={"black"}>
             {post.orders}
            </Typography>
          </Typography>
          <Typography
            variant="caption"
            component="div"
            color={"red"}
            sx={{ flexGrow: 1, position: "relative"}}
          >
            Fullfilments
            <Typography variant="caption" component="div" color={"black"}>
              {post.fullfilments}
            </Typography>
          </Typography>
          <Typography
            variant="caption"
            component="div"
            color={"red"}
            sx={{ flexGrow: 1, position: "relative"}}
          >
            Pickups
            <Typography variant="caption" component="div" color={"black"}>
              {post.pickups}
            </Typography>
          </Typography>
          <Typography
            variant="caption"
            component="div"
            color={"red"}
            sx={{ flexGrow: 1, position: "relative" }}
          >
            A/R
            <Typography variant="caption" component="div" color={"black"}>
              {post.ar}
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
