import axios from "axios";
import WD_UseToken from "../components/Admin/WD_UseToken";


const tokenString = localStorage.getItem('token');
const userToken = JSON.parse(tokenString);
export function axiosRequest() {
  axios.interceptors.request.use(
    (request) => {
      console.log(request);
      request.headers.genericKey = "Request_gpWoodDUCK2.0";
      request.headers.Token = userToken.token;
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export function axiosResponse() {
  axios.interceptors.response.use(
    (response) => {
      console.log(response);
      response.headers.className = "Response_gpWoodDUCK2.0";
      response.headers.Token=userToken.token;
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
