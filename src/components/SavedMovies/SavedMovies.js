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
      <main className="main-saved-movies">
        <SearchForm />
        <section className="saved-movies">
          <ul className="saved-movies__container">
            <li>
              <MoviesCard type={'saved'} />
            </li>
            <li>
              <MoviesCard type={'saved'} />
            </li>
            <li>
              <MoviesCard type={'saved'} />
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
