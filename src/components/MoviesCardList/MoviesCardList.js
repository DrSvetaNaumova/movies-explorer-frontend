import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies">
      <div className="movies__container">
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
        <MoviesCard type={'all'} />
      </div>
    </section>
  );
}

export default MoviesCardList;
