import React from 'react';
import './FilterCheckbox.css';
import filterActive from './../../images/diploma-film-filter-icon-active.png';
import filterInactive from './../../images/diploma-film-filter-icon-inactive.png';

function FilterCheckbox({ filterCheckboxData }) {
  return (
    <div className="filter__container">
      <img
        className="filter__icon"
        src={`${filterCheckboxData === true ? filterActive : filterInactive}`}
        alt="фильтр"
      />
      <div className="filter__shorts">Короткометражки</div>
    </div>
  );
}

export default FilterCheckbox;
