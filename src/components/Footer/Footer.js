import React from 'react';
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
        {/* на экранах шириной 1280 и 768 знак собаки и год раздельно (с пробелом), на экране 320px без пробела */}
        <p className="footer__copyright">© {year}</p>
        <nav className="footer__brands">
          <a
            className="footer__brand"
            href="https://practicum.yandex.ru/"
            rel="noreferrer"
            target="_blank"
          >
            Яндекс.Практикум
          </a>

          <a
            className="footer__brand"
            href="https://github.com/"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
