import React, { useContext } from 'react';
import { useEffect } from 'react';
import './Profile.css';

import Header from './../Header/Header';
import BottomButton from '../BottomButton/BottomButton';
import { useFormWithValidation } from '../../utils/useFormWithValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({
  editUser,
  editUserIsPossible,
  setEditUserIsPossible,
  handleEditUser,
  signOut,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm({ email: currentUser.email, name: currentUser.name }, {}, false);
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    editUser({ name: values.name, email: values.email });
    setEditUserIsPossible(false);
    resetForm();
  }

  if (editUserIsPossible) {
    return (
      <>
        <Header loggedIn={true} headerClassName={'header'} />
        <main className="profile">
          <section className="profile__section">
            <h1 className="profile__hello">Привет, {currentUser.name}!</h1>
            <form className="profile__container" onSubmit={handleSubmit}>
              <div className="profile__inputs">
                <div className="profile__input-container">
                  <label className="profile__input-label">Имя</label>

                  <input
                    className="profile__input-input profile__input-input_type_name"
                    required
                    id="name"
                    name="name"
                    type="text"
                    placeholder={currentUser.name}
                    minLength="2"
                    maxLength="30"
                    value={values.name || ''}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я\s\-]+$"
                    disabled={false}
                  />
                  <span
                    className={
                      !errors.name ? 'profile__error' : 'profile__error_visible'
                    }
                  >
                    {errors.name}
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
                    placeholder={currentUser.email}
                    value={values.email || ''}
                    onChange={handleChange}
                    pattern="^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]+$"
                    disabled={false}
                  />
                  <span
                    className={
                      !errors.email
                        ? 'profile__error'
                        : 'profile__error_visible'
                    }
                  >
                    {errors.email}
                  </span>
                </div>
              </div>

              <div className="profile__bottom">
                <span className="profile__error-on-server">
                  При обновлении профиля произошла ошибка.
                </span>
                <BottomButton
                  title={'Сохранить'}
                  isInactive={
                    !isValid ||
                    (values.name === currentUser.name &&
                      values.email === currentUser.email)
                  }
                />
              </div>
            </form>
          </section>
        </main>
      </>
    );
  } else if (!editUserIsPossible) {
    return (
      <>
        <Header loggedIn={true} headerClassName={'header'} />
        <main className="profile">
          <section className="profile__section">
            <h1 className="profile__hello">Привет, {currentUser.name}!</h1>
            <form
              className="profile__container"
              onSubmit={() => handleEditUser}
            >
              <div className="profile__inputs">
                <div className="profile__input-container">
                  <label className="profile__input-label">Имя</label>

                  <input
                    className="profile__input-input profile__input-input_type_name"
                    required
                    id="name"
                    name="name"
                    type="text"
                    value={values.name || ''}
                    placeholder={currentUser.name}
                    disabled={true}
                  />
                  <span className="profile__error"></span>
                </div>

                <div className="profile__input-container">
                  <label className="profile__input-label">E-mail</label>
                  <input
                    className="profile__input-input profile__input-input_type_email"
                    required
                    id="email"
                    name="email"
                    type="text"
                    value={values.email || ''}
                    placeholder={currentUser.email}
                    disabled={true}
                  />
                  <span className="profile__error"></span>
                </div>
              </div>

              <div className="profile__bottom">
                <button
                  className="profile__button profile__button-edit"
                  type="button"
                  onClick={() => setEditUserIsPossible(true)}
                >
                  Редактировать
                </button>
                <button
                  className="profile__button profile__button-exit"
                  type="button"
                  onClick={signOut}
                >
                  Выйти из аккаунта
                </button>
              </div>
            </form>
          </section>
        </main>
      </>
    );
  }
}

export default Profile;
