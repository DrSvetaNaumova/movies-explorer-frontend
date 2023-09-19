import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="checkbox">
<input className="checkbox__input" type="checkbox" id="switch" /><label className="checkbox__label" htmlFor="switch"></label>
      <div className="checkbox__shorts">Короткометражки</div>
    </div>
  );
}

export default FilterCheckbox;
