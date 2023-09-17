import React from 'react';
import './Promo.css';
import figure from './../../images/diploma-promo-logo.png';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img
        className="promo__logo"
        src={figure}
        alt="фигура-спираль белого цвета"
      />
    </section>
  );
}

export default Promo;
