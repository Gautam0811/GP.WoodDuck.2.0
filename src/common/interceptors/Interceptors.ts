import axios from "axios";


const token = String(process.env.REACT_APP_MANAGE_PERMISSION_SET_TOKEN);

//This is the interceptor for the requests made by Axios API calls
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
 
//This is the interceptor for the responses received by Axios API calls
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