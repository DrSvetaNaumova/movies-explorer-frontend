import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NavigationHorizontal.css';
import Account from '../Account/Account';

function NavigationHorizontal() {
  const navigate = useNavigate();
  return (
    <section className="navigation-horizontal">
      <nav className="navigation-horizontal__movies-container">
        <a
          className="navigation-horizontal__movies"
          href="http://localhost:3000/movies"
          onClick={() => navigate('/movies')}
        >
          Фильмы
        </a>
        <a
          className="navigation-horizontal__saved-movies"
          href="http://localhost:3000/saved-movies"
          onClick={() => navigate('/saved-movies')}
        >
          Сохраненные фильмы
        </a>
      </nav>
      <Account />
    </section>
  );
}

export default NavigationHorizontal;
