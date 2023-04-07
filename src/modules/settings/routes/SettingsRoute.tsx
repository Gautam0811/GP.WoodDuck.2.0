import React from "react";
import { Routes, Route } from "react-router-dom";
import {Login } from "../../../globalPages/login";

export function SettingsRoute() {
  return (
    <div>
     <Routes>
        <Route path="customSetting" element={<Login />} />
      </Routes>
    </div>
  );
}
