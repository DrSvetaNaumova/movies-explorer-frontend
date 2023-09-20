import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Page404 from '../Page404/Page404';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/saved-movies" element={<SavedMovies />} />

          <Route path="/signup" element={<Register />} />

          <Route path="/signin" element={<Login />} />

          <Route
            path="/profile"
            element={<Profile profileIsUpdated={false} />}
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
