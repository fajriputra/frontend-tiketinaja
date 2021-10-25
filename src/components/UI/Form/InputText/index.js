import React from "react";
import propTypes from "prop-types";

import "./input-text.scss";

const InputText = React.forwardRef(
  (
    {
      name,
      type,
      value,
      readOnly,
      isDisabled,
      placeholder,
      outerClassName,
      prepend,
      inputClassName,
      onKeyUp,
      onKeyPress,
      onChange,
    },
    ref
  ) => (
    <>
      <div className={["input-text", outerClassName].join(" ")}>
        <div className="input-group">
          {prepend && (
            <div className="input-group-prepend">
              <span className="input-group-text">{prepend}</span>
            </div>
          )}
          <input
            readOnly={readOnly}
            type={type}
            name={name}
            value={value}
            disabled={isDisabled}
            className={["form-control", inputClassName].join(" ")}
            placeholder={placeholder}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onKeyPress={onKeyPress}
            ref={ref}
          />
        </div>
      </div>
    </>
  )
);

export default InputText;

InputText.defaultProps = {
  type: "text",
};

InputText.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  onKeyUp: propTypes.func,
  placeholder: propTypes.string,
  inputClassName: propTypes.string,
};
