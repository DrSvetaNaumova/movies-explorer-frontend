import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__paragraph">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__items">
        <li className="techs__item">
          <div className="techs__item-title">HTML</div>
        </li>
        <li className="techs__item">
          <div className="techs__item-title">CSS</div>
        </li>
        <li className="techs__item">
          <div className="techs__item-title">JS</div>
        </li>
        <li className="techs__item">
          <div className="techs__item-title">React</div>
        </li>
        <li className="techs__item">
          <div className="techs__item-title">Git</div>
        </li>
        <li className="techs__item">
          <div className="techs__item-title">Express.js</div>
        </li>
        <li className="techs__item">
          <div className="techs__item-title">mongoDB</div>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
