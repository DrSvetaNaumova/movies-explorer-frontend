const { NODE_ENV } = process.env;

let BASE_URL;
if (NODE_ENV === 'production') {
  BASE_URL = 'https://api.drsvetanaumova.nomoredomainsicu.ru';
} else {
  BASE_URL = 'http://localhost:4000';
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then((response) => 
    response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`)
  );
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => 
    response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`)
  );
};
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => 
    response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`)
  );
};
