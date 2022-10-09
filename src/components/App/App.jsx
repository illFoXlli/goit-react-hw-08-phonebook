import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import TrendComponend from '../../page/TrendComponendPage/TrendComponendPage';
import Layout from 'components/Layout/';

const RegisterView = lazy(() => import('../../page/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../../page/LoginView/LoginView'));
const Movies = lazy(() => import('../../page/MoviesPage'));
const MovieDetails = lazy(() => import('../../page/MovieDetailsPage'));
const CastMovie = lazy(() => import('../../page/CastMoviePage'));
const ReviewsMovie = lazy(() => import('../../page/ReviewsMoviePage'));
const Error = lazy(() => import('../../page/ErrorPage'));
const Phonebook = lazy(() => import('../../page/PhonebookPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route  path="/" element={< Layout/>}>
          {/* <Route path="/" element={<p>Тут будет Ваша реклама</p>} /> */}
          <Route path="/login" element={<RegisterView />} />
          <Route path="/register" element={<LoginView />} />
          <Route path="/movies" element={<Movies />} />
          <Route path={'/movies/:movieId'} element={<MovieDetails />}>
            <Route path="/movies/:movieId/reviews" element={<ReviewsMovie />} />
            <Route path="/movies/:movieId/cast" element={<CastMovie />} />
          </Route>
          <Route path="/" element={<Phonebook />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
