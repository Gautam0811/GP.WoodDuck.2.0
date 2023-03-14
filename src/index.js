import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as themes from '../src/theme/schema.json';
import { setToLS } from '../src/utils/storage';
import {axiosRequest,axiosResponse} from './services/WD_Interceptors';

axiosRequest();
axiosResponse();

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(themes.default);
  setToLS('all-themes', themes.default);
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);