import React from 'react';

import FormContainer from '../FormContainer/FormContainer';
import Input from '../Input/Input';

function Login() {
  return (
    <FormContainer type={'login'} title={'Рады видеть!'}>
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
        placeholder={''}
      />
    </FormContainer>
  );
}

export default Login;
