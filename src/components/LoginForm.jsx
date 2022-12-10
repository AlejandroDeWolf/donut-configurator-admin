import React from "react";
import { useRef } from "react";

const Form = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const fetchLogin = async (e) => {
    e.preventDefault();

    // get username and password from form
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

    // error handling
    if (!response.ok) {
      const error = await response.json();
      console.log(error);
      console.log(username);
      return;
    } else {
      const data = await response.json();
      console.log(data);
      // store token in local storage
      localStorage.setItem("token", data.token);
      // redirect to admin page
      window.location.href = "/dashboard";
    }
  };

  return (
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
    </form>
  );
};

export default Form;
