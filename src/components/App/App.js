import React, { useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CurrentUserContext from './../../contexts/CurrentUserContext';
import ProtectedRoute from './../../components/ProtectedRoute/ProtectedRoute';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Page404 from '../Page404/Page404';
import InfotoolTip from '../InfotoolTip/InfotoolTip';

import * as auth from './../../utils/auth.js';
import mainApi from '../../utils/MainApi.js';
import moviesApi from '../../utils/MovieApi.js';
import { MOVIE_SHORT_DURATION } from './../../utils/constants.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('jwt'));
  const [infotoolTipData, setInfotoolTipData] = useState(null);
  const [editUserIsPossible, setEditUserIsPossible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchWasDone, setSearchWasDone] = useState(false);

  // все фильмы, они загружаются при первом поиске на странице "Фильмы"
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem('movies')) || []
  );

  // массив фильмов, найденных при поиске на странице "Фильмы"
  const [foundMovies, setFoundMovies] = useState(
    JSON.parse(localStorage.getItem('foundMovies')) || []
  );
  // массив сохраненных фильмов
  const [savedMovies, setSavedMovies] = useState([]);

  // массив сохраненных фильмов для поиска
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  // в этот массив записывается ключевое слово из поиска на странице "Фильмы"
  const [keyWordString, setKeyWordString] = useState(
    JSON.parse(localStorage.getItem('keyWordString')) || ''
  );
  // в этот массив записывается ключевое слово из поиска на странице "Сохраненные фильмы"
  const [savedKeyWordString, setSavedKeyWordString] = useState('');

  // статус короткометражек на странице "Фильмы"
  const [onlyShorts, setOnlyShorts] = useState(
    JSON.parse(localStorage.getItem('onlyShorts')) || false
  );

  // статус короткометражек на странице "Сохраненные фильмы"
  const [savedOnlyShorts, setSavedOnlyShorts] = useState(false);

  const navigate = useNavigate();

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            setLoggedIn(true);
          }
        })
        .catch((error) => setLoggedIn(false));
    }
  };

  useEffect(() => {
    handleTokenCheck();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //регистрация
  const handleRegister = (formData) => {
    const { name, email, password } = formData;
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin({ email, password });
          setInfotoolTipData({
            state: 'success',
            message: 'Вы успешно зарегистрировались!',
          });
        }
      })
      .catch((err) => {
        console.log(err, 'ошибка регистрации');
        setInfotoolTipData({
          state: 'error',
          message:
            err === 'Ошибка: 409'
              ? 'Пользователь с таким email уже существует.'
              : 'При регистрации пользователя произошла ошибка.',
        });
      });
  };

  // авторизация(логин)
  const handleLogin = (formData) => {
    const { email, password } = formData;
    auth
      .login(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err, 'ошибка логина');
        setInfotoolTipData({
          state: 'error',
          message:
            err === 'Ошибка: 401'
              ? 'Вы ввели неправильный E-mail или пароль.'
              : 'Ошибка на сервере',
        });
      });
  };

  // загрузка профиля и сохраненных фильмов после авторизации (логина)
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(jwt), mainApi.getUserMovies(jwt)])
        .then(([user, movies]) => {
          setCurrentUser(user);
          setSavedMovies(movies);
          setFilteredSavedMovies(movies);
        })
        .catch((error) =>
          console.log(error, 'ошибка загрузки профиля и сохраненных фильмов')
        );
    }
  }, [loggedIn]);

  // изменение данных профиля
  function handleEditUser(data) {
    const jwt = localStorage.getItem('jwt');
    mainApi
      .updateUserInfo(data.name, data.email, jwt)
      .then((user) => {
        setCurrentUser(user);
        setInfotoolTipData({
          state: 'success',
          message: 'Вы успешно изменили данные профиля!',
        });
      })
      .catch((error) => {
        console.log(error, 'ошибка обновления профиля');
        setInfotoolTipData({
          state: 'error',
          message:
            error === 'Ошибка 409'
              ? 'Пользователь с таким email уже существует.'
              : 'При обновлении профиля произошла ошибка.',
        });
      });
  }

  // переключатель короткометражек на странице "Фильмы"
  function onlyShortsCheckbox() {
    setOnlyShorts(!onlyShorts);
    localStorage.setItem('onlyShorts', JSON.stringify(!onlyShorts));
    if (keyWordString) {
      filterFoundMovies({ word: keyWordString, onlyShorts: !onlyShorts });
    }
  }

  // переключатель короткометражек на странице "Сохраненные фильмы"
  function savedOnlyShortsCheckbox() {
    setSavedOnlyShorts(!savedOnlyShorts);
    if (savedKeyWordString) {
      filterSavedMovies({
        word: savedKeyWordString,
        savedOnlyShorts: !savedOnlyShorts,
      });
    }
  }

  //поиск фильмов на странице "Фильмы"
  function filterFoundMovies({ word, onlyShorts }) {
    setLoading(true);
    // первый поиск
    if (movies.length === 0) {
      const jwt = localStorage.getItem('jwt');
      moviesApi
        .getMovies(jwt)
        .then((movies) => {
          localStorage.setItem('movies', JSON.stringify(movies));
          setMovies(movies);
          filterPrefetched(movies, word, onlyShorts);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error, 'ошибка загрузки фильмов');
          setLoading(false);
        });
    } else {
      filterPrefetched(movies, word, onlyShorts);
      setLoading(false);
    }
  }

  function filterPrefetched(movies, word, onlyShorts) {
    if (onlyShorts) {
      const foundMoviesOnlyShorts = movies.filter(
        (movie) =>
          movie.duration < MOVIE_SHORT_DURATION &&
          (movie.nameRU.toLowerCase().includes(word.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(word.toLowerCase()))
      );

      localStorage.setItem(
        'foundMoviesOnlyShorts',
        JSON.stringify(foundMoviesOnlyShorts)
      );
      setFoundMovies(foundMoviesOnlyShorts);
    } else if (!onlyShorts) {
      const foundMovies = movies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(word.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(word.toLowerCase())
      );

      localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
      setFoundMovies(foundMovies);
    }
  }

  // поиск на странице "Сохраненные фильмы"
  const filterSavedMovies = useCallback(
    ({ word, savedOnlyShorts }) => {
      if (savedOnlyShorts) {
        const filteredSavedMoviesOnlyShorts = savedMovies.filter(
          (movie) =>
            movie.duration < MOVIE_SHORT_DURATION &&
            (movie.nameRU.toLowerCase().includes(word.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(word.toLowerCase()))
        );

        setFilteredSavedMovies(filteredSavedMoviesOnlyShorts);
      } else if (!savedOnlyShorts) {
        const filteredSavedMovies = savedMovies.filter(
          (movie) =>
            movie.nameRU.toLowerCase().includes(word.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(word.toLowerCase())
        );
        setFilteredSavedMovies(filteredSavedMovies);
      }
    },
    [savedMovies]
  );

  useEffect(() => {
    filterSavedMovies({ word: savedKeyWordString, savedOnlyShorts });
  }, [filterSavedMovies, savedKeyWordString, savedOnlyShorts, savedMovies]);

  // сохранение фильма
  function saveMovie(movie) {
    const jwt = localStorage.getItem('jwt');
    const savedMovie = savedMovies.find((item) => item.movieId === movie.id);
    if (!savedMovie) {
      mainApi
        .saveMovie(movie, jwt)
        .then((movie) => {
          setSavedMovies((savedMovies) => [movie, ...savedMovies]);
        })
        .catch((err) => console.log(err, 'ошибка при сохранении фильма'));
    }
  }

  // удаление фильма
  function deleteMovie(movieId) {
    const jwt = localStorage.getItem('jwt');
    mainApi
      .deleteMovie(movieId, jwt)
      .then((resp) => {
        setSavedMovies(savedMovies.filter((item) => item._id !== movieId));
      })
      .catch((err) => console.log(err, 'ошибка при удалении фильма'));
  }

  // тест сохранения фильма
  function checkIfMovieWasSaved(movie) {
    return savedMovies.some((item) => item.movieId === movie.id);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />

            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  movies={movies}
                  foundMovies={foundMovies}
                  savedMovies={savedMovies}
                  setKeyWordString={setKeyWordString}
                  filter={filterFoundMovies}
                  onlyShorts={onlyShorts}
                  onlyShortsCheckbox={onlyShortsCheckbox}
                  saveMovie={saveMovie}
                  deleteMovie={deleteMovie}
                  checkIfMovieWasSaved={checkIfMovieWasSaved}
                  loading={loading}
                  searchWasDone={searchWasDone}
                  setSearchWasDone={setSearchWasDone}
                />
              }
            />

            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  savedMovies={filteredSavedMovies}
                  deleteMovie={deleteMovie}
                  checkIfMovieWasSaved={checkIfMovieWasSaved}
                  setKeyWordString={setSavedKeyWordString}
                  filter={filterSavedMovies}
                  onlyShorts={savedOnlyShorts}
                  onlyShortsCheckbox={savedOnlyShortsCheckbox}
                  searchWasDone={searchWasDone}
                  setSearchWasDone={setSearchWasDone}
                  filteredSavedMovies={filteredSavedMovies}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  editUserIsPossible={editUserIsPossible}
                  setEditUserIsPossible={setEditUserIsPossible}
                  editUser={handleEditUser}
                  signOut={() => {
                    localStorage.clear();
                    setLoggedIn(false);
                    setMovies([]);
                    setKeyWordString('');
                    setFoundMovies([]);
                    setOnlyShorts(false);
                    setSavedOnlyShorts(false)
                    setSavedMovies([])
                    setFilteredSavedMovies([])
                    setSearchWasDone(false);
                    navigate('/', { replace: true });
                  }}
                />
              }
            />

            <Route
              path="/signup"
              element={
                <Register handleRegister={handleRegister} loggedIn={loggedIn} />
              }
            />

            <Route
              path="/signin"
              element={
                <Login
                  handleLogin={handleLogin}
                  loggedIn={loggedIn}
                />
              }
            />

            <Route path="*" element={<Page404 />} />
          </Routes>
          <InfotoolTip
            infotoolTipData={infotoolTipData}
            setInfotoolTipData={setInfotoolTipData}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
