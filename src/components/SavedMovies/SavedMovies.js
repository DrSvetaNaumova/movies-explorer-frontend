import React from 'react';
import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({
  loggedIn,
  savedMovies,
  deleteMovie,
  checkIfMovieWasSaved,
  filter,
  word,
  setKeyWordString,
  onlyShorts,
  onlyShortsCheckbox,
  setSearchWasDone,
  searchWasDone,
  filteredSavedMovies
}) {
  return (
    <>
      <Header loggedIn={loggedIn} headerClassName={'header'} />
      <main className="main-saved-movies">
        <SearchForm
          filter={filter}
          word={word}
          setKeyWordString={setKeyWordString}
          onlyShorts={onlyShorts}
          onlyShortsCheckbox={onlyShortsCheckbox}
          setSearchWasDone={setSearchWasDone}
        />
        <MoviesCardList
          savedMovies={savedMovies}
          deleteMovie={deleteMovie}
          checkIfMovieWasSaved={checkIfMovieWasSaved}
          filteredSavedMovies={filteredSavedMovies}
          searchWasDone={searchWasDone}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
