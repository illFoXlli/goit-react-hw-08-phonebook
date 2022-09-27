// import { useState } from 'react';
import Layout from 'components/Layout/';
import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from './App.styled';
import Muvies from '../../page/Movies';
import TrendComponend from '../../page/TrendComponend/TrendComponend';
import MovieDetails from '../../page/MovieDetails';
import CastMovie from '../../page/CastMovie';
import ReviewsMovie from '../../page/ReviewsMovie/';

export const App = () => {
  return (
    <>
      <Routes>
        <Route idex element={<Layout />}>
          <Route path="/" end element={<TrendComponend />} />
          <Route path="/movies" element={<Muvies />} />
          <Route path={'/movies/:movieId'} element={<MovieDetails />}>
            <Route path="/movies/:movieId/reviews" element={<ReviewsMovie />} />
            <Route path="/movies/:movieId/cast" element={<CastMovie />} />
          </Route>
          <Route
            path="*"
            element={<ErrorPage>Такой станицы нету!</ErrorPage>}
          />
        </Route>
      </Routes>
    </>
  );
};
