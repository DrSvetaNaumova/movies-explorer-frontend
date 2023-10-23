import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import Logo from './../Logo/Logo';
import NavigationHorizontal from '../NavigationHorizontal/NavigationHorizontal';
import NavigationVertical from '../NavigationVertical/NavigationVertical';

function Header({ loggedIn, headerClassName }) {
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
            <Link to="/signup" className="header__registration">
              Регистрация
            </Link>
            <Link to="/signin" className="header__login">
              Войти
            </Link>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
