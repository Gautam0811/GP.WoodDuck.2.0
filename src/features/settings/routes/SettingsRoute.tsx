import React from "react";
import { Routes, Route } from "react-router-dom";
import Permissions from "../component/adminPermissions/Permissions";
import { PermissionsData } from "../services/Data";

export function SettingsRoute() {
  return (
    <div>
      <Routes>
        <Route path="/settings/adminpermissions" element={<Permissions data={PermissionsData} />}></Route>
      </Routes>
    </div>
  );
}
