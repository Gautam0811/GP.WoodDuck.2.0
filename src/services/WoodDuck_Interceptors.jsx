// WD_Interceptors
// Component Utility : These are the request and response interceptors used to add headers to API calls
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import axios from "axios";
import UseToken from "../components/Admin/UseToken";
import {logger} from "../utils/helper";

const tokenString = localStorage.getItem('token');
const userToken = JSON.parse(tokenString);
export function axiosRequest() {
  axios.interceptors.request.use(
    (request) => {
      logger(request);
      request.headers.genericKey = "Request_gpWoodDUCK2.0";
      request.headers.Token = userToken.token;
      return request;
    },
    (error) => {
      logger(error);
      return Promise.reject(error);
    }
  );
}

export function axiosResponse() {
  axios.interceptors.response.use(
    (response) => {
      logger(response);
      response.headers.className = "Response_gpWoodDUCK2.0";
      response.headers.Token=userToken.token;
      return response;
    },
    (error) => {      
      logger(error);
      return Promise.reject(error);
    }
  );
}
