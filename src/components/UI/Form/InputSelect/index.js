import React from "react";
import propTypes from "prop-types";

const InputSelect = ({ className, isDisabled, onChange, options, value }) => {
  return (
    <select
      className={["form-select", className, isDisabled ? "disabled" : ""].join(
        " "
      )}
      disabled={isDisabled}
      onChange={onChange}
      value={value}
    >
      {options?.map((item, index) => (
        <option value={item.id} key={index}>
          {item.value}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;

InputSelect.propTypes = {
  isDisabled: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  isLoading: propTypes.bool,
  onChange: propTypes.func,
};
