import React from 'react';
import './Login.css';

import FormContainer from '../FormContainer/FormContainer';
import Input from '../Input/Input';

function Login() {
  return (
    <main className="login">
      <FormContainer type={'login'} title={'Рады видеть!'}>
        <Input
          label={'E-mail'}
          id={'email'}
          name={'email'}
          type={'text'}
          placeholder={'sveta@yandex.ru'}
          minLength="2"
          maxLength="30"
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

export default Login;
