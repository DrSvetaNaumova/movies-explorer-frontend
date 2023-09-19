import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

import Logo from './../Logo/Logo';
import NavigationHorizontal from '../NavigationHorizontal/NavigationHorizontal';
import NavigationVertical from '../NavigationVertical/NavigationVertical';

function Header({ loggedIn, headerClassName }) {
  const navigate = useNavigate();

  const [navigationVerticalIsOpen, setNavigationVerticalIsOpen] =
    useState(false);

  function openNavigationVertical() {
    setNavigationVerticalIsOpen(true);
  }

  function closeNavigationVertical() {
    setNavigationVerticalIsOpen(false);
  }

  if (loggedIn) {
    return (
      <>
        <header className={headerClassName}>
          <Logo />
          <NavigationHorizontal />
          <button
            className="header__burger"
            type="button"
            onClick={openNavigationVertical}
          ></button>
        </header>
        <NavigationVertical
          navigationVerticalIsOpen={navigationVerticalIsOpen}
          closeNavigationVertical={closeNavigationVertical}
        />
      </>
    );
  } else {
    return (
      <>
        <header className={headerClassName}>
          <Logo />
          <nav className="header__authorization">
            <a
              href="http://localhost:3000/signup"
              className="header__registration"
              onClick={() => navigate('/signup')}
            >
              Регистрация
            </a>
            <a
              href="http://localhost:3000/signin"
              className="header__login"
              onClick={() => navigate('/signin')}
            >
              Войти
            </a>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
