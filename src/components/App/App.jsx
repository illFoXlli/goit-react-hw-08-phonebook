import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import TrendComponend from '../../page/TrendComponendPage/TrendComponendPage';
import Layout from 'components/Layout/';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import HomePage from '../../page/HomePage';

const RegisterView = lazy(() => import('../RegisterView/RegisterView'));
const LoginView = lazy(() => import('../LoginView/LoginView'));
const Movies = lazy(() => import('../../page/MoviesPage'));
const MovieDetails = lazy(() => import('../../page/MovieDetailsPage'));
const CastMovie = lazy(() => import('../../page/CastMoviePage'));
const ReviewsMovie = lazy(() => import('../../page/ReviewsMoviePage'));
const Error = lazy(() => import('../../page/ErrorPage'));
const PhonebookPage = lazy(() => import('../../page/PhonebookPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        {/* <Route element={<PublicRoute />}>
        </Route> */}

        <Route path="/movies" element={<Movies />} />
        <Route path={'/movies/:movieId'} element={<MovieDetails />}>
          <Route path="/movies/:movieId/reviews" element={<ReviewsMovie />} />
          <Route path="/movies/:movieId/cast" element={<CastMovie />} />
        </Route>

        {/* <Route element={<PrivateRoute />}>
        </Route> */}

        <Route path="/contacts" element={<PhonebookPage />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
//
