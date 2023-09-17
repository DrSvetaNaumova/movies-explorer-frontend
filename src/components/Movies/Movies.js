import React from 'react';
import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header loggedIn={true} headerClassName={'header'} />
      <SearchForm />
      <MoviesCardList />
      <div className="movies__show-more-container">
        <div className="movies__show-more-button">Ещё</div>
      </div>
      {/* <Preloader /> */}
      <Footer />
    </>
  );
}

export default Movies;
