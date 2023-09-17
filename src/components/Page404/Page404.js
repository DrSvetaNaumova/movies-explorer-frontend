import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page404.css';

function Page404() {
  const navigate = useNavigate();
  return (
    <section className="page-404">
      <h1 className="page-404__404">404</h1>
      <h2 className="page-404__not-found">Страница не найдена</h2>
      <button className="page-404__back" onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
  );
}

export default Page404;
