// WD_Buttons
// Component Utility : The Component is created to provide all the buttons that are to be used in WoodDuck 2.0
// Author Ananya Dhar on 1-3-2023
// -------------------------
import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import RocketIcon from "@mui/icons-material/Rocket";

export function SetTemporaryPermissionsButton() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  return (
    <Box>
      <LoadingButton className="fs-10 col-005fa8">
        <div>
          <div>
            <RocketIcon className="icontype1" />
          </div>
          <div>
            <span>Set Temporary Permissions</span>
          </div>
        </div>
      </LoadingButton>
    </Box>
  );
}
