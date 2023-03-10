import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as themes from '../src/theme/schema.json';
import { setToLS } from './utils/Storage';
import {axiosRequest,axiosResponse} from './services/Interceptors';
import { store } from './state/store/Store';
import { Provider } from 'react-redux';

axiosRequest();
axiosResponse();

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(themes.default);
  setToLS('all-themes', themes.default);
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
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
