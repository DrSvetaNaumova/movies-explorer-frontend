import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Page404.css';

function Page404() {
  const navigate = useNavigate();
  return (
    <main className="page-404">
      <section className="page-404__section">
        <h1 className="page-404__404">404</h1>
        <h2 className="page-404__not-found">Страница не найдена</h2>
        <Link to="*" className="page-404__back" onClick={() => navigate(-2)}>
          Назад
        </Link>
      </section>
    </main>
  );
}

export default Page404;
