import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "../../features/businessComponents/dashboard/Dashboard"

export default function Routers() {
    return(
    <Routes>
        <Route path="/" element={<Dashboard/>}> </Route>
        {/* <Route path="/salesgrid" element={<SalesGrid />}></Route>
        <Route path="/productgroups" element={<ProductGroupsPage />}></Route>
        <Route path="/settings" element={<Settings/>} > </Route>   
        <Route path="/orders" element={<Orders/>} > </Route> 
        <Route path="/contracts" element={<NewContract/>} > </Route>
        <Route path="/Adminpermissions" element={<Permissions data={PermissionsData}/>} > </Route> */}
    </Routes>
    )

}
