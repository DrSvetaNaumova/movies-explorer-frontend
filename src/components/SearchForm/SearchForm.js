import { React, useState, useEffect } from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import loop from './../../images/diploma-movies-loop.svg';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function SearchForm({
  word,
  keyWordString,
  setKeyWordString,
  filter,
  onlyShorts,
  onlyShortsCheckbox,
  setSearchWasDone,
}) {
  const { values, handleChange, isValid, resetForm } =
    useFormWithValidation();

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      setErrorMessage('Нужно ввести ключевое слово');
    } else {
      setKeyWordString(values.keyWord);
      setSearchWasDone(true);
      filter({word: values.keyWord, onlyShorts});
      setErrorMessage('');
    }
  };

  useEffect(() => {
    resetForm({ word });
  }, [resetForm, word]);

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit} noValidate>
          <div className="search__form-content">
            <img className="search__loop" src={loop} alt="значок лупы" />
            <input
              className="search__input"
              required
              id="keyWord"
              name="keyWord"
              type="text"
              placeholder="Фильм"
              minLength="1"
              maxLength="10"
              defaultValue={keyWordString || ''}
              onChange={handleChange}
            />

            <button type="submit" className="search__form-button" >
              Найти
            </button>
            <div className="search__spacer"></div>
          </div>

          <FilterCheckbox
            filter={filter}
            onlyShorts={onlyShorts}
            onlyShortsCheckbox={onlyShortsCheckbox}
          />
        </form>
      </div>
      <span className="search__error">{errorMessage}</span>

      <div className="search__bottom"></div>
    </section>
  );
}

export default SearchForm;
