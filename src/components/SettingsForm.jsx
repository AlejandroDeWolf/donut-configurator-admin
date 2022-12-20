import React, { useRef, useState } from "react";
import { Oval } from "react-loader-spinner";

const SettingsForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const password = useRef();
  const newPassword = useRef();

  const token = localStorage.getItem("token");

  const updatePassword = async (e) => {
    e.preventDefault();
    setLoading(true);

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
    if (data.message) {
      setLoading(false);
      setError(true);
    } else {
      setLoading(false);
      setSuccess(true);
    }
  };

  return (
    <>
      {loading && (
        <div className="settings__form__loader">
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

      {success && !loading && (
        <div className="form__success form__success--settings">
          <p>Wachtwoord is gewijzigd.</p>
        </div>
      )}

      {error && !loading && (
        <div className="form__error form__error--settings">
          <p>Er is iets misgegaan, probeer het opnieuw.</p>
        </div>
      )}

      {!loading && (
        <form>
          <div className="form__group form__group--small">
            <label htmlFor="password">Huidig wachtwoord</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={password}
            />
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
          <button
            type="submit"
            className="btn btn__logout"
            onClick={updatePassword}
          >
            Wijzig wachtwoord
          </button>
        </form>
      )}
    </>
  );
};

export default SettingsForm;
