import React from "react";

// Styles
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...allotherProps }) => (
  <div className="group">
    {/* Based on label value ,css class will be apllied to the label tag */}
    <input className="form-input" onChange={handleChange} {...allotherProps} />
    {label ? (
      <label
        className={`${
          allotherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
