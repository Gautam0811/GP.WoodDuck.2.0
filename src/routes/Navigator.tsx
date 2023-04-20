import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../modules/dashboard";
import { Settings,ManageUsers } from "../modules/settings";
import {Permissions} from "../modules/settings";
import { MillGroups} from "../modules/settings/component/userSettings/millGroups";


export function Navigator() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/settings/*" element={<Settings />}/>
          <Route path="/settings/adminpermissions" element={<Permissions/>} />
          <Route path="/manageUsers" element={<ManageUsers />} />
          <Route path="/millGroups" element={<MillGroups/>} />
          
          {/* <Route path="/salesgrid" element={<SalesGrid />}></Route>
        <Route path="/productgroups" element={<ProductGroupsPage />}></Route>
        <Route path="/orders" element={<Orders/>} > </Route> 
        <Route path="/contracts" element={<NewContract/>} > </Route>
        <Route path="/Adminpermissions" element={<Permissions data={PermissionsData}/>} > </Route> */}
        </Routes>
    </div>
  );
}
