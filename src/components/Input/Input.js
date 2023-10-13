import React from 'react';
import './Input.css';

function Input({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  minLength,
  maxLength,
  error,
  onChange,
  pattern,
}) {
  return (
    <>
      <div className="input">
        <label className="input__label">{label}</label>
        <input
          className={`input__input input__input_type_${label}`}
          required
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          minLength={minLength}
          maxLength={maxLength}
          error={error}
          onChange={onChange}
          pattern={pattern}
        />
        <span className={!error ? 'input__error' : 'input__error_visible'}>
          {error}
        </span>
      </div>
    </>
  );
}

export default Input;
