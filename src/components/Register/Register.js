import React from 'react';

import FormContainer from '../FormContainer/FormContainer';
import Input from '../Input/Input';

function Register() {
  return (
    <>
      <FormContainer type={'register'} title={'Добро пожаловать!'}>
        <Input
          label={'Имя'}
          id={'name'}
          name={'name'}
          type={'text'}
          placeholder={'Светлана'}
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
          placeholder={''}
        />
      </FormContainer>
    </>
  );
}

export default Register;
