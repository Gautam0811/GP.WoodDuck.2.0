import axios from "axios";


const token = String(process.env.REACT_APP_MANAGE_PERMISSION_SET_TOKEN);

export function axiosRequest() {
    axios.interceptors.request.use(
      (request) => {
        console.log(request);
        request.headers['Authorization'] = `Bearer ${token}`;
        return request;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
  }
  
  export function axiosResponse() {
    axios.interceptors.response.use(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {      
        console.log(error);
        return Promise.reject(error);
      }
    );
  }