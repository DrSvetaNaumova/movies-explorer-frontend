import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Account.css';
import profile from './../../images/diploma-profile.png';

function Account() {
  const navigate = useNavigate();
  return (
    <div className="account" onClick={() => navigate('/profile')}>
      <div className="account__account">Аккаунт</div>
      <img className="account__icon" src={profile} alt="логотип-человек" />
    </div>
  );
}

export default Account;
