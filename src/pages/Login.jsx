import React, { useState, useRef } from "react";
import { Oval } from 'react-loader-spinner'

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  const fetchLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const response = await fetch(
      "https://adorable-red-sundress.cyclic.app/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      alert(error.message);
      return;
    } else {
      const data = await response.json();
      setLoading(false);

      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="login">
      <div className="login__hero">
        <h1>Welcome back <span className="login__hero__highlight">boss</span>!</h1>
      </div>

      <div className="login__form">
        {loading &&
          <div className="login__form__loader">
            <Oval
              height={80}
              width={80}
              color="#e72c70"
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#f5659a"
              strokeWidth={18}
              strokeWidthSecondary={18}
            />
          </div>
        }

        {!loading &&
          <div>
            <div className="login__form__title">
              <h2>Login</h2>
              <p>Welkom terug! Gelieve even in te loggen met
                jouw gegevens om verder te gaan naar het dashboard.</p>
            </div>
            <form>
              <div className="form__group">
                <label htmlFor="username">Gebruikersnaam</label>
                <input type="text" name="username" id="username" ref={usernameRef} />
              </div>
              <div className="form__group">
                <label htmlFor="password">Wachtwoord</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordRef}
                />
              </div>
              <button type="submit" className="btn form__btn" onClick={fetchLogin}>
                Login
              </button>
            </form></div>}
      </div>
    </div>
  );
};

export default Login;
