import React from "react";
import "./select.css";

function Select({
  name,
  label,
  options,
  keyR,
  value,
  selectedValue,
  onChange,
  className
}) {
  const handleOptionChange = (event) => {
    options = options === null ? [] : options;
    const selectedOptionValue = event.target.value;
    console.log(selectedOptionValue);
    onChange(selectedOptionValue);
  };
  return (
    <div className="field">
      <label className="label">{name}</label>
      <div className="control">
        <div className="select">
          <select className={className}
            name={keyR}
            onChange={handleOptionChange}
            value={selectedValue}
          >
            <option>{label}</option>
            {options !== undefined &&
              options.map((option) => (
                <option key={option[keyR]} value={option[keyR]}>
                  {option[value]}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Select;
