// Login
// Component Utility : The Component is Created for the Login Functionality and having a Login landing page
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import React, { useEffect, useContext, useState } from "react";
import "../../styles/StyleMain.css";
import { ClaimContext } from "../../context/claim/Claims";

export function Login() {
  const [errorMessages, setErrorMessages]: any = useState({});
  const context: any = useContext(ClaimContext);

  function loginUser(credentials: { userData: any }) {
    const data = { token: "test123" };
    return data;
  }
  // User Login info
  useEffect(() => {
    context.ClaimsData();
  }, []);
  //This is hard coded data for now it will be replaces by API call once the backend architecture is confirmed
  const loginInfo = context.claims;

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = loginInfo.find(
      (user: { username: any }) => user.username === uname.value
    ); //put it in LocalStore

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: "invalid password" });
      } else {
        let token: any = loginUser({
          userData,
        });
        localStorage.setItem("token", token);
        const status = {
          name: userData.username,
          isAdmin: userData.isAdmin,
          id: userData.id,
        };
        localStorage.setItem("status", JSON.stringify(status));
        window.location.reload();
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: "invalid username" });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="login-input-container">
          <label>Username </label>
          <input
            type="text"
            className="size-large"
            name="uname"
            placeholder="Username"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="login-input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            placeholder="Password"
            autoComplete="on"
            required
          />
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
