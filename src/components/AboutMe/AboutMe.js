import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

import photo from './../../images/diploma-photo-2023.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__text">
          <h3 className="about-me__name">Светлана</h3>
          <h4 className="about-me__profession">Фронтенд-разработчик, 55 лет</h4>
          <p className="about-me__paragraph">
            Я родилась и живу в Санкт-Петербурге. После окончания медицинского
            института 9 лет работала врачом-анестезиологом, потом 5 лет
            занималась продвижением лекарственных средств. Последние 14 лет
            работала в сфере клинических исследований лекарственных средств. У
            меня есть муж и два взрослых сына.
          </p>
          <Link
            to="https://github.com/DrSvetaNaumova"
            rel="noreferrer"
            target="_blank"
          >
            <p className="about-me__github">Github</p>
          </Link>
        </div>
        <img
          className="about-me__photo"
          src={photo}
          alt="портрет взрослой женщины со стрижкой каре"
        />
      </div>
    </section>
  );
}

export default AboutMe;
