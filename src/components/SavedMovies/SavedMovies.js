import { React, useEffect } from 'react';
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
  setOnlyShorts,
  onlyShortsCheckbox,
  searchWasDone,
  setSearchWasDone,
  filteredSavedMovies,
  setFilteredSavedMovies,
}) {
  useEffect(() => {
    return () => {
      setOnlyShorts(false);
      setSearchWasDone(false);
      setFilteredSavedMovies(savedMovies);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header loggedIn={loggedIn} headerClassName={'header'} />
      <main className="main-saved-movies">
        <SearchForm
          filter={filter}
          word={word}
          setKeyWordString={setKeyWordString}
          onlyShorts={onlyShorts}
          setOnlyShorts={setOnlyShorts}
          onlyShortsCheckbox={onlyShortsCheckbox}
          setSearchWasDone={setSearchWasDone}
        />
        <MoviesCardList
          savedMovies={savedMovies}
          deleteMovie={deleteMovie}
          checkIfMovieWasSaved={checkIfMovieWasSaved}
          filteredSavedMovies={filteredSavedMovies}
          setFilteredSavedMovies={setFilteredSavedMovies}
          searchWasDone={searchWasDone}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
