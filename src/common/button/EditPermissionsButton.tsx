// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography, Button, Grid, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Link } from "react-router-dom";

export function EditPermissionsButton(props: any) {
  const [post, setPost]: any = React.useState({});
  const [name, setName]: any = React.useState({});

  React.useEffect(() => {
    function fetchName() {
      let nameFetch = JSON.parse(localStorage.getItem("status") || "{}");
      setName(nameFetch);
    }
    fetchName();
  }, []);

  return (
      <Box>
      {/* <LoadingButton onClick={handleOpen} className="fs-10 col-005fa8"> */}
      <LoadingButton className="fs-10 col-005fa8">
        <div>
          <div>
            <EditIcon className="icontype1" />
          </div>
          <div>
            <span>Edit Permissions</span>
          </div>
        </div>
      </LoadingButton>
    </Box>
  );
}
