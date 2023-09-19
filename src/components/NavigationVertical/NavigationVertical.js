import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NavigationVertical.css';
import Account from '../Account/Account';

function NavigationVertical({
  navigationVerticalIsOpen,
  closeNavigationVertical,
}) {
  const navigate = useNavigate();
  return (
    <section
      className={`navigation-vertical ${
        navigationVerticalIsOpen === true ? 'navigation-vertical_opened' : ''
      }`}
    >
      <div className="navigation-vertical__links-account-container">
        <div className="navigation-vertical__links-container">
          <a
            className="navigation-vertical__link navigation-vertical__link_type_main"
            href="http://localhost:3000/"
            onClick={() => navigate('/')}
          >
            Главная
          </a>

          <a
            className="navigation-vertical__link navigation-vertical__link_type_movies navigation-vertical__link_active"
            href="http://localhost:3000/movies"
            onClick={() => navigate('/movies')}
          >
            Фильмы
          </a>

          <a
            className="navigation-vertical__link navigation-vertical__link_type_saved-movies"
            href="http://localhost:3000/saved-movies"
            onClick={() => navigate('/saved-movies')}
          >
            Сохраненные фильмы
          </a>
        </div>
        <Account />
        <button
          className="navigation-vertical__close-button"
          type="button"
          onClick={closeNavigationVertical}
        ></button>
      </div>
    </section>
  );
}

export default NavigationVertical;
