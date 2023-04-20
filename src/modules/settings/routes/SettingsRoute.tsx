import React from "react";
import { Routes, Route } from "react-router-dom";
import {Login } from "../../../globalPages/login";


//This is Nested Router function for Navigating Settings pages.
export function SettingsRoute() {
  return (
    <div>
     <Routes>
        <Route path="customSetting" element={<Login />} />
      </Routes>
    </div>
  );
}
