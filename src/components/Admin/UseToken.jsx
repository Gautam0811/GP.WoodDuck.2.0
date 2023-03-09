// UseToken
// Component Utility : The Component is Created for creating Token Generation for login functionality and Authentication 
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import { useState } from 'react';

export default function UseToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    //console.log("tokenString :" +tokenString);
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}