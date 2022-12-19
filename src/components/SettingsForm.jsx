import React from "react";
import { useRef, useState } from "react";

const SettingsForm = () => {
  const [error, setError] = useState(false);

  const password = useRef();
  const newPassword = useRef();

  const token = localStorage.getItem("token");

  const updatePassword = async (e) => {
    e.preventDefault();

    const passwordValue = password.current.value;
    const newPasswordValue = newPassword.current.value;

    const response = await fetch(
      "https://adorable-red-sundress.cyclic.app/users/update",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword: passwordValue,
          newPassword: newPasswordValue,
          token: token,
        }),
      }
    );
    const data = await response.json();
    if (data.status === 200) {
      console.log("password updated");
    } else {
      setError(true);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      {error && (
        <div className="form__error form__error--settings">
          <p>Er is iets misgegaan, probeer het opnieuw.</p>
        </div>
      )}
      <form>
        <div className="form__group form__group--small">
          <label htmlFor="password">Huidig wachtwoord</label>
          <input type="password" name="password" id="password" ref={password} />
        </div>
        <div className="form__group form__group--small">
          <label htmlFor="password">Nieuw wachtwoord</label>
          <input
            type="password"
            name="password"
            id="passwordUpdate"
            ref={newPassword}
          />
        </div>

        <div className="form__group__buttons">
          <button
            type="submit"
            className="btn btn--secondary"
            onClick={logoutHandler}
          >
            Uitloggen
          </button>
          <button
            type="submit"
            className="btn btn__logout"
            onClick={updatePassword}
          >
            Wijzig wachtwoord
          </button>
        </div>
      </form>
    </>
  );
};

export default SettingsForm;
