import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import TrendComponend from '../../page/TrendComponendPage/TrendComponendPage';
import Layout from 'components/Layout/';

const Movies = lazy(() => import('../../page/MoviesPage'));
const MovieDetails = lazy(() => import('../../page/MovieDetailsPage'));
const CastMovie = lazy(() => import('../../page/CastMoviePage'));
const ReviewsMovie = lazy(() => import('../../page/ReviewsMoviePage'));
const Error = lazy(() => import('../../page/ErrorPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route idex element={<Layout />}>
          <Route path="/" end element={<TrendComponend />} />
          <Route path="/movies" element={<Movies />} />
          <Route path={'/movies/:movieId'} element={<MovieDetails />}>
            <Route path="/movies/:movieId/reviews" element={<ReviewsMovie />} />
            <Route path="/movies/:movieId/cast" element={<CastMovie />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
