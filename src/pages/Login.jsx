import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="login">
      <div className="login__hero">
        <h1>Welcome back <span className="login__hero__highlight">boss</span>!</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
