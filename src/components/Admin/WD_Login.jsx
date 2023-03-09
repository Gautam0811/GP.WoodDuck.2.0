// WD_Login
// Component Utility : The Component is Created for the Login Functionality and having a Login landing page 
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { loginUser } from "../../services/WD_API";
import PropTypes from "prop-types";

import "../../styles/WD_StyleMain.css";


export default function WD_Login({ setToken }) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  // User Login info 

  //This is hard coded data for now it will be replaces by API call once the backend architecture is confirmed
  const database = [
    {
      id:"1001",
      username:"admin",
      password:"admin@123",
      isAdmin: true,
  },
    {
      id:"1002",
      username: "Ananya",
      password: "password@123",
      isAdmin: false,
    },
    {
      id:"1003",
      username: "Gautam",
      password: "password@456",
      isAdmin: false,
    },
    {
      id:"1004",
      username:"Abhishek",
      password:"password@789",
      isAdmin: false,
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value); //put it in LocalStore

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        const token = await loginUser({
          userData,
        });
        setToken(token);
        setIsLoggedin(true);
        const status = {name:userData.username, isAdmin:userData.isAdmin, id:userData.id};
        localStorage.setItem("status", JSON.stringify(status));
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="login-input-container">
          <label>Username </label>
          <input type="text" className="size-large" name="uname" placeholder="Username" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="login-input-container">
          <label>Password </label>
          <input type="password" name="pass" placeholder="Password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="login-button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="login-title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
}

WD_Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
