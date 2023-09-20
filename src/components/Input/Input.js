import React from 'react';
import './Input.css';

function Input({label, id, name, type, placeholder}) {
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
        />
        <span className="input__error">
          Что-то пошло не так...
        </span>
      </div>
    </>
  );
}

export default Input;
