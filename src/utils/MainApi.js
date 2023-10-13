const { NODE_ENV } = process.env;

let BASE_URL;
if (NODE_ENV === 'production') {
  BASE_URL = 'https://api.drsvetanaumova.nomoredomainsicu.ru';
} else {
  BASE_URL = 'http://localhost:4000';
}

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  //проверка ответа сервера
  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    }
    return res;
  }

  // получить фильмы пользователя
  getUserMovies(token) {
    const promise = fetch(this._baseUrl + '/movies', {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkResponse)
      .then((res) => res.json());
    return promise;
  }

  // получить данные пользователя
  getUserInfo(token) {
    const promise = fetch(this._baseUrl + '/users/me', {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkResponse)
      .then((res) => res.json());
    return promise;
  }

  // заменить текстовые данные пользователя 
  updateUserInfo(name, email, token) {
    const promise = fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then(this._checkResponse)
      .then((res) => res.json());
    return promise;
  }

  // сохранить фильм
  saveMovie(movie, token) {
    const promise = fetch(this._baseUrl + '/movies', {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        movieId: movie.id,
      }),
    })
      .then(this._checkResponse)
      .then((res) => res.json());
    return promise;
  }

  // удалить фильм
  deleteMovie(movieId, token) {
    const promise = fetch(this._baseUrl + '/movies/' + movieId, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkResponse)
    return promise;
  }
}

const mainApi = new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
