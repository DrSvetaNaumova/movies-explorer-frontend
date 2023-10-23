import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './NavigationVertical.css';
import Account from '../Account/Account';

function NavigationVertical({
  navigationVerticalIsOpen,
  closeNavigationVertical,
}) {
  const location = useLocation();
  // const navigate = useNavigate();
  return (
    <section
      className={`navigation-vertical ${
        navigationVerticalIsOpen === true ? 'navigation-vertical_opened' : ''
      }`}
    >
      <div className="navigation-vertical__links-account-container">
        <div className="navigation-vertical__links-container">
          <Link to="/"
            className={location.pathname === '/' ? 'navigation-vertical__link_active' : 'navigation-vertical__link'}
          >
            Главная
          </Link>

          <Link to="/movies"
            className={location.pathname === '/movies' ? 'navigation-vertical__link_active' : 'navigation-vertical__link'}
          >
            Фильмы
          </Link>

          <Link to="/saved-movies"
            className={location.pathname === '/saved-movies' ? 'navigation-vertical__link_active' : 'navigation-vertical__link'}
          >
            Сохраненные фильмы
          </Link>
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
