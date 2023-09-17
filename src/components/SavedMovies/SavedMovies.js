import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
      <Header loggedIn={true} headerClassName={'header'} />
      <SearchForm />
      <section className="saved-movies">
        <div className="saved-movies__container">
          <MoviesCard type={'saved'} />
          <MoviesCard type={'saved'} />
          <MoviesCard type={'saved'} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
