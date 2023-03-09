// Login
// Component Utility : The Component is Created for the Login Functionality and having a Login landing page 
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import React, { useContext,useState,useEffect } from "react";
import ReactDOM from "react-dom";
import { loginUser } from "../../services/Api";
import PropTypes from "prop-types";
import "../../styles/WD_StyleMain.css";
import wdContext from "../../context/claim/Context";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from "../../state/State";



export default function Login({ setToken }) {
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
  const dispatch=useDispatch();
  const {loginData}=bindActionCreators(actionCreators,dispatch);
  const amount= useSelector(state => state.amount)
  console.log("amount : " +amount);
// console.log("amount : " +loginData(100));
  const context = useContext(wdContext);
  const {getClaims}=context;
  console.log("context: "+ getClaims)

  const envValue =process.env.REACT_APP_ENV;
  console.log("envValue :"+envValue);
  const userclaim=[
    {
      username:"admin",
      isAdmin: true,
  },
    {
      username: "Ananya",
      isAdmin: false,
    },
    {
      username: "Gautam",
      isAdmin: false,
    },
    {
        username:"Abhishek",
        isAdmin: false,
      },
  ]

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

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
