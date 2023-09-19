import React from 'react';
import arrow from './../../images/diploma-arrow-icon.svg';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__lines">
        <li className="portfolio__line">
          <a
            className="portfolio__link"
            href="https://drsvetanaumova.github.io/how-to-learn"
            rel="noreferrer"
            target="_blank"
          >
            <h3 className="portfolio__subtitle">Статичный сайт</h3>
            <img className="portfolio__arrow" src={arrow} alt="белая стрелка" />
          </a>
        </li>
        <li className="portfolio__line">
          <a
            className="portfolio__link"
            href="https://drsvetanaumova.github.io/russian-travel"
            rel="noreferrer"
            target="_blank"
          >
            <h3 className="portfolio__subtitle">Адаптивный сайт</h3>
            <img className="portfolio__arrow" src={arrow} alt="белая стрелка" />
          </a>
        </li>
        <li className="portfolio__line">
          <a
            className="portfolio__link"
            href="https://github.com/DrSvetaNaumova/react-mesto-api-full-gha"
            rel="noreferrer"
            target="_blank"
          >
            <h3 className="portfolio__subtitle">Одностраничное приложение</h3>
            <img className="portfolio__arrow" src={arrow} alt="белая стрелка" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
