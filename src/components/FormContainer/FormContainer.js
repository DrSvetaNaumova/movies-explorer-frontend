import React from 'react';
import './FormContainer.css';
import Logo from '../Logo/Logo';
import Bottom from '../Bottom/Bottom';

function FormContainer({
  children,
  type,
  title,
  onSubmit,
  isInactive,
}) {
  return (
    <>
      <form className="form" onSubmit={onSubmit} formNoValidate>
        <div className="form__logo-title-container">
          <Logo />
          <h1 className="form__title">{title}</h1>
        </div>
        <div className="form__inputs-container">{children}</div>
        <Bottom type={type} isInactive={isInactive} />
      </form>
    </>
  );
}

export default FormContainer;
