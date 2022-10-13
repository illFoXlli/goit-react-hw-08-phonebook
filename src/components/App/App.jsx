import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/';
import PrivateRoute from '../../utils/PrivateRoute/PrivateRoute';
import PublicRoute from 'utils/PublicRoute/PublicRoute';
import HomePage from '../../page/HomePage';
import Loader from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../redux/auth/authOpiretion';

const RegisterView = lazy(() => import('../RegisterView/RegisterView'));
const LoginView = lazy(() => import('../LoginView/LoginView'));
const Movies = lazy(() => import('../../page/MoviesPage'));
const MovieDetails = lazy(() => import('../../page/MovieDetailsPage'));
const CastMovie = lazy(() => import('../../page/CastMoviePage'));
const ReviewsMovie = lazy(() => import('../../page/ReviewsMoviePage'));
const Error = lazy(() => import('../../page/ErrorPage'));
const PhonebookPage = lazy(() => import('../../page/PhonebookPage'));

export const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCurrentUser()) 
  },[dispatch])



  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path={'/movies/:movieId'} element={<MovieDetails />}>
            <Route path="/movies/:movieId/reviews" element={<ReviewsMovie />} />
            <Route path="/movies/:movieId/cast" element={<CastMovie />} />
          </Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <PhonebookPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
