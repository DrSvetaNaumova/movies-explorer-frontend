import React from 'react';
import { Link } from 'react-router-dom';
import arrow from './../../images/diploma-arrow-icon.svg';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__lines">
        <li className="portfolio__line">
          <Link
            to="https://drsvetanaumova.github.io/how-to-learn"
            className="portfolio__link"
            target="_blank"
          >
            <h3 className="portfolio__subtitle">Статичный сайт</h3>
            <img className="portfolio__arrow" src={arrow} alt="белая стрелка" />
          </Link>
        </li>
        <li className="portfolio__line">
          <Link
            to="https://drsvetanaumova.github.io/russian-travel"
            className="portfolio__link"
            target="_blank"
          >
            <h3 className="portfolio__subtitle">Адаптивный сайт</h3>
            <img className="portfolio__arrow" src={arrow} alt="белая стрелка" />
          </Link>
        </li>
        <li className="portfolio__line">
          <Link
            to="https://github.com/DrSvetaNaumova/react-mesto-api-full-gha"
            className="portfolio__link"
            target="_blank"
          >
            <h3 className="portfolio__subtitle">Одностраничное приложение</h3>
            <img className="portfolio__arrow" src={arrow} alt="белая стрелка" />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
