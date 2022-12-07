import React from "react";

const Form = () => {
  return (
    <form>
      <div className="form__group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form__group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
