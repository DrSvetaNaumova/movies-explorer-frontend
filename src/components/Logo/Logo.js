import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Logo.css';
import logo from './../../images/diploma-logo.svg';

function Logo() {
  const navigate = useNavigate();
  return (
    <img
      className="logo"
      src={logo}
      alt="логотип: белый смайлик на фоне зеленого квадрата с закругленными краями"
      onClick={() => navigate('/')}
    />
  );
}

export default Logo;
