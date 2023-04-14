import axios from "axios";


let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJheWFuIiwiZW1haWwiOiJheWFubWl0cmFAdGVzdC5jb20ifQ.u6wke52xNwkEEZ11ZfjfPiJL9O6ME7pW8cbOQT7FZgA';

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