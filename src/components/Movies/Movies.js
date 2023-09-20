import React from 'react';
import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header loggedIn={true} headerClassName={'header'} />
      <main className="main-movies">
        <SearchForm />
        <MoviesCardList />
        <div className="show-more">
          <button className="show-more__button" type='button'>Ещё</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
