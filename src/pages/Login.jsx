import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div>
        <h1>Welcome back Boss!</h1>
      </div>
      <div>
        <div>
          <h2>Login</h2>
          <p>
            Welkom terug, gelieve in te loggen om naar het admin paneel te gaan.
          </p>
        </div>

        <div className="form">
          <form>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form__group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <button type="submit" className="btn form__btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
