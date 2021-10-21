import React from "react";
import propTypes from "prop-types";

import "./input-text.scss";

const InputText = React.forwardRef(
  (
    { name, type, value, placeholder, inputClassName, onChange, onKeyPress },
    ref
  ) => (
    <>
      <input
        type={type}
        name={name}
        value={value}
        className={["form-control", inputClassName].join(" ")}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
        ref={ref}
      />
    </>
  )
);

export default InputText;

InputText.defaultProps = {
  type: "text",
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string,
  placeholder: propTypes.string,
  inputClassName: propTypes.string,
};
