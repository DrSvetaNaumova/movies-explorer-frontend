import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationHorizontal.css';
import Account from '../Account/Account';

function NavigationHorizontal() {
  return (
    <section className="navigation-horizontal">
      <nav className="navigation-horizontal__movies-container">
        <Link to="/movies"
          className="navigation-horizontal__movies"
        >
          Фильмы
        </Link>
        <Link to="/saved-movies"
          className="navigation-horizontal__saved-movies"
        >
          Сохраненные фильмы
        </Link>
      </nav>
      <Account />
    </section>
  );
}

export default NavigationHorizontal;
