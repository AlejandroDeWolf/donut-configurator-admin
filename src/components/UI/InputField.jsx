import React from "react";

// input field component with value defined by props
const InputField = (props) => {
  return (
    <div className="form__group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputField;
