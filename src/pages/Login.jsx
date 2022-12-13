import React from "react";

import { LoginForm } from "../components";

const Login = () => {
  return (
    <div className="login">
      <div className="login__hero">
        <h1>Welcome back <span className="login__hero__highlight">boss</span>!</h1>
      </div>

      <div className="login__form">
        <div className="login__form__title">
          <h2>Login</h2>
          <p>Welkom terug! Gelieve even in te loggen met
            jouw gegevens om verder te gaan naar het dashboard.</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
