import React from "react";

import { LoginForm } from "../components";

const Login = () => {
  return (
    <div className="login">
      <div className="login__hero">
        <h1>Welcome back boss!</h1>
      </div>

      <div className="login__form">
        <div className="login__form--title">
          <h2>Login</h2>
          <p>Welcome back, please login below to go to the admin panel.</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
