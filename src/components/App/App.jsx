import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import TrendComponend from '../../page/TrendComponendPage/TrendComponend';
import Layout from 'components/Layout/';

const Movies = lazy(() => import('../../page/Movies'));
const MovieDetails = lazy(() => import('../../page/MovieDetails'));
const CastMovie = lazy(() => import('../../page/CastMovie'));
const ReviewsMovie = lazy(() => import('../../page/ReviewsMovie/'));
const Error = lazy(() => import('../../page/Error'));

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
