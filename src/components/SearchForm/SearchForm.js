import React from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import loop from './../../images/diploma-film-search-icon.png';

function SearchForm() {
  return (
    <>
      <section className="search">
        <div className="search__container">
          <img className="search__loop" src={loop} alt="значок лупы" />
          <form className="search__form">
            <input
              className="search__input"
              required
              id="search"
              name="search"
              type="text"
              placeholder="Фильм"
            />
            <button type="submit" className="search__form-button">
              Найти
            </button>
          </form>
          <div className="search__spacer"></div>
        </div>
        <FilterCheckbox filterCheckboxData={true} />
      </section>

      <div className="search__bottom"></div>
    </>
  );
}

export default SearchForm;
