import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useScreenWidth from './../../utils/useScreenWidth';

import {
  MOBILE_SCREEN_LIMIT,
  TABLET_SCREEN_LIMIT,
  INTERIM_SCREEN_LIMIT,
  MOBILE_INITIAL_MOVIES_NUMBER,
  TABLET_INITIAL_MOVIES_NUMBER,
  INTERIM_INITIAL_MOVIES_NUMBER,
  DESKTOP_INITIAL_MOVIES_NUMBER,
  MOBILE_ADDITIONAL_MOVIES_NUMBER,
  TABLET_ADDITIONAL_MOVIES_NUMBER,
  INTERIM_ADDITIONAL_MOVIES_NUMBER,
  DESKTOP_ADDITIONAL_MOVIES_NUMBER,
} from './../../utils/constants';

function MoviesCardList({
  keyWordString,
  foundMovies,
  savedMovies,
  filteredSavedMovies,
  saveMovie,
  deleteMovie,
  checkIfMovieWasSaved,
  searchWasDone,
}) {
  const location = useLocation();
  const screenWidth = useScreenWidth();
  const [initialMoviesNumber, setInitialMoviesNumber] = useState(0);
  const [additionalMoviesNumber, setAdditionalMoviesNumber] = useState(0);

  useEffect(() => {
    if (screenWidth <= MOBILE_SCREEN_LIMIT) {
      setInitialMoviesNumber(MOBILE_INITIAL_MOVIES_NUMBER);
      setAdditionalMoviesNumber(MOBILE_ADDITIONAL_MOVIES_NUMBER);
    } else if (
      screenWidth > MOBILE_SCREEN_LIMIT &&
      screenWidth <= TABLET_SCREEN_LIMIT
    ) {
      setInitialMoviesNumber(TABLET_INITIAL_MOVIES_NUMBER);
      setAdditionalMoviesNumber(TABLET_ADDITIONAL_MOVIES_NUMBER);
    } else if (
      screenWidth > TABLET_SCREEN_LIMIT &&
      screenWidth <= INTERIM_SCREEN_LIMIT
    ) {
      setInitialMoviesNumber(INTERIM_INITIAL_MOVIES_NUMBER);
      setAdditionalMoviesNumber(INTERIM_ADDITIONAL_MOVIES_NUMBER);
    } else if (screenWidth > INTERIM_SCREEN_LIMIT) {
      setInitialMoviesNumber(DESKTOP_INITIAL_MOVIES_NUMBER);
      setAdditionalMoviesNumber(DESKTOP_ADDITIONAL_MOVIES_NUMBER);
    }
  }, [screenWidth]);

  function showMore() {
    setInitialMoviesNumber(initialMoviesNumber + additionalMoviesNumber);
  }

  if (location.pathname === '/movies') {
    if (foundMovies.length > 0) {
      return (
        <section className="movies">
          <ul className="movies__container">
            {foundMovies.slice(0, initialMoviesNumber).map((movie) => (
              <li key={movie.id}>
                {' '}
                <MoviesCard
                  movie={movie}
                  foundMovies={foundMovies}
                  saveMovie={saveMovie}
                  savedMovies={savedMovies}
                  deleteMovie={deleteMovie}
                  checkIfMovieWasSaved={checkIfMovieWasSaved}
                />
              </li>
            ))}
          </ul>
          {foundMovies.length > initialMoviesNumber && (
            <div className="show-more">
              <button
                className="show-more__button"
                type="button"
                onClick={showMore}
              >
                Ещё
              </button>
            </div>
          )}
        </section>
      );
    } else if (
      searchWasDone &&
      foundMovies.length === 0 &&
      keyWordString !== ''
    ) {
      return (
        <section className="movies">
          <span className="movies__not-found">Ничего не найдено.</span>
        </section>
      );
    } else if (
      foundMovies.length === null ||
      foundMovies.length === undefined
    ) {
      return (
        <section className="movies">
          <span className="movies__not-found">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </span>
        </section>
      );
    }
  } else if (location.pathname === '/saved-movies') {
    if (!searchWasDone && savedMovies.length > 0) {
      return (
        <section className="movies">
          <ul className="movies__container">
            {savedMovies.map((movie) => (
              <li key={movie.movieId}>
                {' '}
                <MoviesCard
                  movie={movie}
                  savedMovies={savedMovies}
                  saveMovie={saveMovie}
                  deleteMovie={deleteMovie}
                  checkIfMovieWasSaved={checkIfMovieWasSaved}
                />
              </li>
            ))}
          </ul>
        </section>
      );
    } else if (searchWasDone && filteredSavedMovies.length === 0) {
      return (
        <section className="movies">
          <span className="movies__not-found">Ничего не найдено.</span>
        </section>
      );
    } else if (searchWasDone && filteredSavedMovies.length > 0) {
      return (
        <section className="movies">
          <ul className="movies__container">
            {filteredSavedMovies.map((movie) => (
              <li key={movie.movieId}>
                {' '}
                <MoviesCard
                  movie={movie}
                  filteredSavedMovies={filteredSavedMovies}
                  saveMovie={saveMovie}
                  deleteMovie={deleteMovie}
                  checkIfMovieWasSaved={checkIfMovieWasSaved}
                />
              </li>
            ))}
          </ul>
        </section>
      );
    }
  }
}

export default MoviesCardList;
