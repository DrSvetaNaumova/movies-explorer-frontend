import React from 'react';
import { Link } from 'react-router-dom';
import './Bottom.css';

import BottomButton from '../BottomButton/BottomButton';

function Bottom({ type, isInactive }) {
  return type === 'register' ? (
    <>
      <BottomButton title={'Зарегистрироваться'} isInactive={isInactive}/>
      <div className="bottom">
        <div className="bottom__question">Уже зарегистрированы?</div>
        <Link to="/signin" className="bottom__link">
          Войти
        </Link>
      </div>
    </>
  ) : (
    <>
      <BottomButton title={'Войти'} isInactive={isInactive}/>
      <div className="bottom">
        <div className="bottom__question">Еще не зарегистрированы?</div>
        <Link to="/signup" className="bottom__link">
          Регистрация
        </Link>
      </div>
    </>
  );
}

export default Bottom;
