import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../modules/dashboard";
import { Settings,ManageUsers } from "../modules/settings";
import {Permissions} from "../modules/settings";
import { MillGroups} from "../modules/settings/component/userSettings/millGroups";


//This is global Router function for Navigating all pages.
export function Navigator() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/settings/*" element={<Settings />}/>
          <Route path="/settings/adminpermissions" element={<Permissions/>} />
          <Route path="/manageUsers" element={<ManageUsers/>} />
          <Route path="/millGroups" element={<MillGroups/>} />
        </Routes>
    </div>
  );
}
