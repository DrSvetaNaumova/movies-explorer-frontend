import React from 'react';
import './Login.css';

import FormContainer from '../FormContainer/FormContainer';
import Input from '../Input/Input';
import { useFormWithValidation } from '../../utils/useFormWithValidation';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin, loggedIn }) => {
  const navigate = useNavigate();
  if (loggedIn) {
    navigate('/movies');
  }
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
    resetForm();
  };

  return (
    <main className="login">
      <FormContainer
        type={'login'}
        title={'Рады видеть!'}
        onSubmit={handleSubmit}
        isInactive={!isValid}
      >
        <Input
          label={'E-mail'}
          id={'email'}
          name={'email'}
          type={'text'}
          placeholder={'sveta@yandex.ru'}
          minLength="2"
          maxLength="30"
          value={values.email || ''}
          error={errors.email}
          onChange={handleChange}
          pattern="^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]+$"
        />
        <Input
          label={'Пароль'}
          id={'password'}
          name={'password'}
          type={'password'}
          placeholder={'Пароль'}
          minLength="6"
          maxLength="20"
          value={values.password || ''}
          error={errors.password}
          onChange={handleChange}
        />
      </FormContainer>
    </main>
  );
};

export default Login;
