import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__content">
        <h3 className="about-project__subtitle about-project__subtitle_type_1">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="about-project__paragraph about-project__paragraph_type_1">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>

        <h3 className="about-project__subtitle about-project__subtitle_type_2">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__paragraph about-project__paragraph_type_2">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>

      <div className="about-project__navtab-items">
        <div className="about-project__navtab-column">
          <div className="about-project__navtab-item about-project__navtab-item_color_green">
            <div className="about-project__navtab-item-text">1 неделя</div>
          </div>
          <div className="about-project__navtab-item">
            <div className="about-project__navtab-item-text about-project__navtab-item-text_under">
              Back-end
            </div>
          </div>
        </div>
        <div className="about-project__navtab-column">
          <div className="about-project__navtab-item about-project__navtab-item_color_grey">
            <div className="about-project__navtab-item-text">4 недели</div>
          </div>
          <div className="about-project__navtab-item">
            <div className="about-project__navtab-item-text about-project__navtab-item-text_under">
              Front-end
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
