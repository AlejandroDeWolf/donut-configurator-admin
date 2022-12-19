import React, { useState, useRef } from "react";
import { Oval } from "react-loader-spinner";

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);

  // error handling
  const [error, setError] = useState(false);

  const fetchLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      "https://adorable-red-sundress.cyclic.app/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }),
      }
    );
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } else {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="login__form">
      {loading && (
        <div className="login__form__loader">
          <Oval
            height={80}
            width={80}
            color="#e72c70"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#f5659a"
            strokeWidth={18}
            strokeWidthSecondary={18}
          />
        </div>
      )}

      {/* if not loading show form with error handling */}

      {!loading && (
        <div>
          <div className="login__form__title">
            <h2>Login</h2>
            <p>
              Welkom terug! Gelieve even in te loggen met jouw gegevens om
              verder te gaan naar het dashboard.
            </p>
          </div>

          {error && (
            <div className="form__error">
              <p>Gebruikersnaam of wachtwoord is niet correct.</p>
            </div>
          )}

          <form>
            <div className="form__group">
              <label htmlFor="username">Gebruikersnaam</label>
              <input
                type="text"
                name="username"
                id="username"
                ref={usernameRef}
              />
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

            <button
              type="submit"
              className="btn form__btn"
              onClick={fetchLogin}
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
