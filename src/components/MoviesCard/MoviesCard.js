import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({
  movie,
  savedMovies,
  saveMovie,
  checkIfMovieWasSaved,
  deleteMovie,
}) {
  const location = useLocation();
  const saved = checkIfMovieWasSaved(movie);

  function handleSaveMovie() {
    saveMovie(movie);
  }

    function handleDeleteMovie() {
    if (location.pathname === '/saved-movies') {
      const savedMovie = savedMovies.find(
        (item) => item.movieId === movie.movieId
      );
      return deleteMovie(savedMovie._id);
    } 
    if (location.pathname === '/movies') {
      const savedMovie = savedMovies.find(
        (item) => item.movieId === movie.id
        );
      return deleteMovie(savedMovie._id);
    }
  }

  function calculateHours(duration) {
    const hours = Math.floor(duration / 60);
    return hours;
  }

  function calculateMinutes(duration) {
    const minutes = duration - Math.floor(duration / 60) * 60;
    return minutes;
  }

  if (location.pathname === '/movies') {
    return (
      <article className="movies__movie">
        <a className="movies__image-link" href={movie.trailerLink}>
          <div className="movies__image-container">
            <img
              className="movies__image"
              src={`https://api.nomoreparties.co/${movie.image.url}`}
              alt={movie.nameRU}
            />
          </div>
        </a>

        <div className="movies__description-icon">
          <h2 className="movies__description">{movie.nameRU}</h2>

          <button
            className={
              saved
                ? 'movies__icon_type_like-red'
                : 'movies__icon_type_like-white'
            }
            type="button"
            onClick={saved? handleDeleteMovie : handleSaveMovie}
          />
        </div>
        <div className="movies__duration">
          <div className="movies__duration-hours">
            {calculateHours(movie.duration) + 'ч'}
          </div>
          <div className="movies__duration-minutes">
            {calculateMinutes(movie.duration) + 'м'}
          </div>
        </div>
      </article>
    );
  } else if (location.pathname === '/saved-movies') {
    return (
      <article className="movies__movie">
        <div className="movies__image-container">
          <a className="movies__image-link" href={movie.trailerLink}>
            <img
              className="movies__image"
              src={movie.image}
              alt={movie.nameRU}
            />
          </a>
        </div>

        <div className="movies__description-icon">
          <h2 className="movies__description">{movie.nameRU}</h2>
          <button
            className="movies__icon movies__icon_type_delete"
            type="button"
            onClick={handleDeleteMovie}
          />
        </div>
        <div className="movies__duration">
          <div className="movies__duration-hours">
            {calculateHours(movie.duration) + 'ч'}
          </div>
          <div className="movies__duration-minutes">
            {calculateMinutes(movie.duration) + 'м'}
          </div>
        </div>
      </article>
    );
  }
}

export default MoviesCard;
