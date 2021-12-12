import React from "react";
import propTypes from "prop-types";

export default function InputSelect({
  isDisabled,
  onChange,
  options,
  value,
  name,
  className,
  selectDefault,
}) {
  return (
    <select
      className={["form-select", className, isDisabled ? "disabled" : ""].join(
        " "
      )}
      disabled={isDisabled}
      onChange={onChange}
      value={value}
      name={name}
    >
      <option value="">{selectDefault}</option>
      {options.map((item, index) => (
        <option {...item} key={index} />
      ))}
    </select>
  );
}

InputSelect.propTypes = {
  isDisabled: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  isLoading: propTypes.bool,
  onChange: propTypes.func,
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    })
  ),
};
