import React from 'react';
import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies({
  loggedIn,
  movies,
  foundMovies,
  filter,
  word,
  keyWordString,
  setKeyWordString,
  onlyShorts,
  onlyShortsCheckbox,
  loading,
  savedMovies,
  saveMovie,
  deleteMovie,
  checkIfMovieWasSaved,
  searchWasDone,
  setSearchWasDone
}) {
  return (
    <>
      <Header loggedIn={loggedIn} headerClassName={'header'} />
      <main className="main-movies">
        <SearchForm
          filter={filter}
          word={word}
          keyWordString={keyWordString}
          setKeyWordString={setKeyWordString}
          onlyShorts={onlyShorts}
          onlyShortsCheckbox={onlyShortsCheckbox}
          setSearchWasDone={setSearchWasDone}
        />
        {loading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={movies}
            foundMovies={foundMovies}
            saveMovie={saveMovie}
            savedMovies={savedMovies}
            deleteMovie={deleteMovie}
            checkIfMovieWasSaved={checkIfMovieWasSaved}
            searchWasDone={searchWasDone}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
