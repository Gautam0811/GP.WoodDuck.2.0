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
    <Box className="fs-12 flex-grow" >
      <AppBar className="bg-ffb74d position-static">
        <Toolbar>
          <FormControl
            
            className="bg-white position-relative min-width-120"
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
            component="div"
            className="gray fs-12 flex-grow position-relative left-16"
          >
            Offers
            <Typography className="font-black" component="div">
             {post.offers}
            </Typography>
          </Typography>
          <Typography
            component="div"
            className="gray fs-12 flex-grow position-relative"
          >
            Quotes
            <Typography className="font-black" component="div">
              {post.quotes}
            </Typography>
          </Typography>
          <Typography
            component="div"
            className="gray fs-12 flex-grow position-relative"
          >
            Orders
            <Typography className="font-black" component="div">
             {post.orders}
            </Typography>
          </Typography>
          <Typography
            component="div"
            className="col-red fs-12 flex-grow position-relative"

          >
            Fullfilments
            <Typography className="font-black" component="div" >
              {post.fullfilments}
            </Typography>
          </Typography>
          <Typography
            component="div"
            className="col-red fs-12 flex-grow position-relative"

          >
            Pickups
            <Typography className="font-black" component="div">
              {post.pickups}
            </Typography>
          </Typography>
          <Typography
            component="div"
            className="col-red fs-12 flex-grow position-relative"
          >
            A/R
            <Typography className="font-black"  component="div" >
              {post.ar}
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
