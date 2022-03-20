import React, { useState, useRef } from "react";
import "./loginPage.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const userEmailRef = useRef("");
  const userPasswordRef = useRef("");
  const [loginFailInfo, setLoginFailInfo] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  function logInStart() {
    const userEmail = userEmailRef?.current?.value;
    const userPassword = userPasswordRef?.current?.value;
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoginFailInfo("");
        console.log("LOGIN SUCCESSFUL!");
        console.log("user: ");
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error: " + errorMessage);
        if (
          errorMessage.includes("invalid-email") ||
          errorMessage.includes("user-not-found") ||
          errorMessage.includes("wrong-password")
        ) {
          setLoginFailInfo("Email or Password invalid");
          console.log("loginFailInfo = " + loginFailInfo);
        }
      });
  }
  function passwordOnKeyUp(event) {
    if (event.key === "Enter") {
      logInStart();
    }
  }

  function goToSignUpPage() {
    navigate("/signUpPage");
  }

  return (
    <div className="login-page-body">
      <img className="login-page-logo" src="./images/Logo/Logo.png" alt="" />
      <form className="login-page-form" autoComplete="off">
        <h2 className="login-page-welcome-text">
          Log Into Cocktail Is Everywhere
        </h2>
        <div className="login-page-input-region login-page-email-region">
          <input
            className="login-page-email"
            type="text"
            name="email"
            ref={userEmailRef}
            required
          />
          <label htmlFor="email" className="login-page-label-email">
            <span className="login-page-content login-page-content-email">
              Email Address
            </span>
          </label>
        </div>
        <div className="login-page-input-region login-page-password-region">
          <input
            className="login-page-password"
            type="password"
            name="password"
            ref={userPasswordRef}
            onKeyUp={passwordOnKeyUp}
            required
          />
          <label htmlFor="password" className="login-page-label-password">
            <span className="login-page-content login-page-content-password">
              Password
            </span>
          </label>
        </div>
        {/* Not doing this cuz security problem. */}
        {/* <div className="login-page-rmb-region">
          <input
            className="login-page-checkbox-rmb"
            type="checkbox"
            name="rememberMe"
          />
          <label htmlFor="rememberMe" className="login-page-label-rmb">
            Remember me
          </label>
        </div> */}
        <p className="login-page-fail-info">{loginFailInfo}</p>
        <button
          className="login-page-login-btn"
          type="button"
          onClick={logInStart}
        >
          Log In
        </button>
        <button
          className="login-page-sign-up-btn"
          type="button"
          onClick={goToSignUpPage}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
export default LoginPage;
