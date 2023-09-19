import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies">
      <ul className="movies__container">
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
        <li>
          <MoviesCard type={'all'} />
        </li>
      </ul>
    </section>
  );
}

export default MoviesCardList;
