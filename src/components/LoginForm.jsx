import React from "react";

const Form = () => {
  return (
    <form>
      <div className="form__group">
        <label htmlFor="username">Gebruikersnaam</label>
        <input type="text" name="username" id="username" />
      </div>
      <div className="form__group">
        <label htmlFor="password">Wachtwoord</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit" className="btn form__btn">
        Login
      </button>
    </form>
  );
};

export default Form;
