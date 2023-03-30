import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../features/dashboard";
import { Settings,ManageUsers } from "../features/settings";
import {Permissions,PermissionsData} from "../features/settings";


export function Navigator() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/settings/adminpermissions" element={<Permissions data={PermissionsData} />} />
          <Route path="/manageUsers" element={<ManageUsers/>} />
      
          {/* <Route path="/salesgrid" element={<SalesGrid />}></Route>
        <Route path="/productgroups" element={<ProductGroupsPage />}></Route>
        <Route path="/orders" element={<Orders/>} > </Route> 
        <Route path="/contracts" element={<NewContract/>} > </Route>
        <Route path="/Adminpermissions" element={<Permissions data={PermissionsData}/>} > </Route> */}
        </Routes>
    </div>
  );
}
