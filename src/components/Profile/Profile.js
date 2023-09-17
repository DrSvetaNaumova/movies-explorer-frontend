import React from 'react';
import './Profile.css';

import Header from './../Header/Header';
import BottomButton from '../BottomButton/BottomButton';

function Profile({ profileIsUpdated }) {
  if (profileIsUpdated) {
    return (
      <>
        <Header loggedIn={true} headerClassName={'header'} />

        <section className="profile">
          <h1 className="profile__hello">Привет, Виталий!</h1>
          <form className="profile__container">
            <div className="profile__inputs">
              <div className="profile__input-container">
                <label className="profile__input-label">Имя</label>

                <input
                  className="profile__input-input profile__input-input_type_name"
                  required
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Виталий"
                />
                <span className="profile__error_visible">
                  Что-то пошло не так...
                </span>
              </div>

              <div className="profile__input-container">
                <label className="profile__input-label">E-mail</label>
                <input
                  className="profile__input-input profile__input-input_type_email"
                  required
                  id="email"
                  name="email"
                  type="text"
                  placeholder="pochta@yandex.ru"
                />
                <span className="profile__error">Что-то пошло не так...</span>
              </div>
            </div>

            <div className="profile__bottom">
              <span className="profile__error-on-server">
                При обновлении профиля произошла ошибка.
              </span>
              <BottomButton title={'Сохранить'} statusActive={true} />
            </div>
          </form>
        </section>
      </>
    );
  } else {
    return (
      <>
        <Header loggedIn={true} headerClassName={'header'} />

        <section className="profile">
          <h1 className="profile__hello">Привет, Виталий!</h1>
          <form className="profile__container">
            <div className="profile__inputs">
              <div className="profile__input-container">
                <label className="profile__input-label">Имя</label>

                <input
                  className="profile__input-input profile__input-input_type_name"
                  required
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Виталий"
                />
                <span className="profile__error_visible">
                  Что-то пошло не так...
                </span>
              </div>

              <div className="profile__input-container">
                <label className="profile__input-label">E-mail</label>
                <input
                  className="profile__input-input profile__input-input_type_email"
                  required
                  id="email"
                  name="email"
                  type="text"
                  placeholder="pochta@yandex.ru"
                />
                <span className="profile__error">Что-то пошло не так...</span>
              </div>
            </div>

            <div className="profile__bottom">
              <button className="profile__button profile__button-edit">
                Редактировать
              </button>
              <button className="profile__button profile__button-exit">
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default Profile;
