import React from 'react';
import './select.css'


function Select({ name, label, options,keyR,value ,selectedValue, onChange}) {
  
  const handleOptionChange = (event) => {
    const selectedOptionValue = event.target.value;
    console.log(selectedOptionValue);
    onChange(selectedOptionValue);
  };
  return (
    <div className="field">
      <label className="label">{name}</label>
      <div className="control">
        <div className="select">
          <select name={keyR}  onChange={handleOptionChange} value={selectedValue}>
            <option >{label}</option>
            {options.map((option) => (
              
              <option  key={option[keyR]} value={option[keyR]}>
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
