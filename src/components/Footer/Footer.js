import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__navigation">
        <p className="footer__copyright">© {year}</p>
        <ul className="footer__brands">
          <li>
            <Link
              to="https://practicum.yandex.ru/"
              className="footer__brand"
              target="_blank"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/"
              className="footer__brand"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
