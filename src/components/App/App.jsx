// import { useState } from 'react';
import Layout from 'components/Layout/';
import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from './App.styled';
import Muvies from '../page/Movies';
import TrendComponend from '../page/TrendComponend';
import MovieDetails from 'components/page/MovieDetails';
import CastMovie from '../page/CastMovie';
import ReviewsMovie from '../page/ReviewsMovie';

export const App = () => {
  // const [idMuvies, setIdMuvies] = useState(null);

  return (
    <>
      <Layout />
      <Routes>
        <Route index element={<TrendComponend />} />
        <Route path="/movies" element={<Muvies />} />
        <Route path={'/movies/:movieId'} element={<MovieDetails />}>
          <Route path="/movies/:movieId/reviews" element={<ReviewsMovie />} />
          <Route path="/movies/:movieId/cast" element={<CastMovie />} />
        </Route>
        <Route path="*" element={<ErrorPage>Такой станицы нету!</ErrorPage>} />
      </Routes>
    </>
  );
};

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews
