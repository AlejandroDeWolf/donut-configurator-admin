import React from "react";

import { InputField } from "../components";

const Form = () => {
  return (
    <form>
      <InputField type="text" name="username" id="username" label="Username" />
      <InputField
        type="password"
        name="password"
        id="password"
        label="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
