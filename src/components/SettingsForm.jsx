import React from "react";
import { useRef, useState } from "react";

const SettingsForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { oldPassword, newPassword } = this.state;

    fetch("http://localhost:5000/api/users/update-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  //   logout by removing token from local storage
  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <form>
      {/* update password */}
      <div className="form__group form__group--small">
        <label htmlFor="password">Wachtwoord</label>
        <input type="password" name="password" id="password" />
      </div>
      {/* update password confirmation */}
      <div className="form__group form__group--small">
        <label htmlFor="password">Wachtwoord bevestigen</label>
        <input type="password" name="password" id="passwordUpdate" />
      </div>

      {/* logout en update wachtwoord button */}
      <div className="form__group__buttons">
        <button
          type="submit"
          className="btn btn--secondary"
          onClick={logoutHandler}
        >
          Uitloggen
        </button>
        <button type="submit" className="btn btn__logout">
          Wijzig wachtwoord
        </button>
      </div>
    </form>
  );
};

export default SettingsForm;
