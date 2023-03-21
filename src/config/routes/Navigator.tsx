import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../features/components/dashboard/Dashboard";
import LeftSideBar from "../../pages/common/LeftSideBar";
import Footer from "../../pages/common/Footer";

export function Navigator() {
  return (
    <div>
      <div className="flexrow">
        <LeftSideBar />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            {" "}
          </Route>
          {/* <Route path="/salesgrid" element={<SalesGrid />}></Route>
        <Route path="/productgroups" element={<ProductGroupsPage />}></Route>
        <Route path="/settings" element={<Settings/>} > </Route>   
        <Route path="/orders" element={<Orders/>} > </Route> 
        <Route path="/contracts" element={<NewContract/>} > </Route>
        <Route path="/Adminpermissions" element={<Permissions data={PermissionsData}/>} > </Route> */}
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
