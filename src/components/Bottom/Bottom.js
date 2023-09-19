import React from 'react';
import './Bottom.css';

import BottomButton from '../BottomButton/BottomButton';

function Bottom({ type }) {
  return type === 'register' ? (
    <>
      <BottomButton title={'Зарегистрироваться'} statusActive={true} />
      <div className="bottom">
        <div className="bottom__question">Уже зарегистрированы?</div>
        <a className="bottom__link" href="http://localhost:3000/signin">
          Войти
        </a>
      </div>
    </>
  ) : (
    <>
      <BottomButton title={'Войти'} statusActive={true} />
      <div className="bottom">
        <div className="bottom__question">Еще не зарегистрированы?</div>
        <a className="bottom__link" href="http://localhost:3000/signup">
          Регистрация
        </a>
      </div>
    </>
  );
}

export default Bottom;
