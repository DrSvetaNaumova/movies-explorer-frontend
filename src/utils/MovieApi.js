const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // проверка ответа сервера
  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    }
    return res;
  }

  // получить массив фильмов с сервера
  getMovies() {
    const promise = fetch(this._baseUrl, {
      headers: {
        ...this._headers,
      },
    })
      .then(this._checkResponse)
      .then(res => res.json())

    return promise;
  }
}

const moviesApi = new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
