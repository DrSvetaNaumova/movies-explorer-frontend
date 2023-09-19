import React from 'react';
import './Register.css';

import FormContainer from '../FormContainer/FormContainer';
import Input from '../Input/Input';

function Register() {
  return (
    <main className="register">
      <FormContainer type={'register'} title={'Добро пожаловать!'}>
        <Input
          label={'Имя'}
          id={'name'}
          name={'name'}
          type={'text'}
          placeholder={'Светлана'}
          minLength="2"
          maxLength="30"
        />

        <Input
          label={'E-mail'}
          id={'email'}
          name={'email'}
          type={'text'}
          placeholder={'sveta@yandex.ru'}
        />
        <Input
          label={'Пароль'}
          id={'password'}
          name={'password'}
          type={'password'}
          placeholder={'Пароль'}
          minLength="6"
          maxLength="20"
        />
      </FormContainer>
    </main>
  );
}

export default Register;
