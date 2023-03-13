import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    request.headers.genericKey = "Request_gpWoodDUCK2.0";
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    response.headers.className = "Response_gpWoodDUCK2.0";
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(themes.default);
//   setToLS('all-themes', themes.default);
   root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const Index = () => {
//   console.log(themes.default);
//   setToLS("all-themes", themes.default);

//   return <App />;
// };

// ReactDOM.render(<Index />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
