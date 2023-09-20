import React from 'react';
import './MoviesCard.css';

function MovieCard({ type }) {
  return (
    <article className="movies__movie">
      <div className="movies__image-container">
        <img
          className="movies__image"
          src="https://sun9-75.userapi.com/impg/RGdLvmNfhwjFMT7PHWzYejkJ_3e7GKCV3wz5hQ/8HoKD2cHFhM.jpg?size=2560x1920&quality=95&sign=5bae10733e922c14cf914760cc88a732&type=album"
          alt="самоед"
        />
      </div>

      <div className="movies__description-icon">
        <h2 className="movies__description">
          Пи Джей Харви: A dog called money
        </h2>
        <button
          className={`movies__icon ${
            type === 'all'
              ? 'movies__icon_type_like-white'
              : 'movies__icon_type_delete'
          }`}
          type="button"
        />
      </div>
      <div className="movies__duration">
        {/* на экране шириной 1280px часы и минуты слитно (без пробела), на экране 768 с пробелом */}
        <div className="movies__duration-hours">1ч</div>
        <div className="movies__duration-minutes">42м</div>
      </div>
    </article>
  );
}

export default MovieCard;
