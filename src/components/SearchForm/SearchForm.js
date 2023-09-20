import React from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import loop from './../../images/diploma-movies-loop.svg';

function SearchForm() {
  return (
    <section className='search'>
      <div className="search__container">
        <form className="search__form">
          <div className="search__form-content">
            <img className="search__loop" src={loop} alt="значок лупы" />

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
            <div className="search__spacer"></div>
          </div>

          <FilterCheckbox filterCheckboxData={true} />
        </form>
      </div>

      <div className="search__bottom"></div>
    </section>
  );
}

export default SearchForm;
