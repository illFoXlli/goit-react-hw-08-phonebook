import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import TrendComponend from '../../page/TrendComponendPage/TrendComponendPage';
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
//

// export const App = () => {
//   return (
//     <Suspense fallback={<Loader />}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route
//             path="contacts"
//             element={
//               <PrivateRoute>
//                 <ContactsPage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="login"
//             element={
//               <PublicRoute>
//                 <Login />
//               </PublicRoute>
//             }
//           />
//           <Route
//             path="register"
//             element={
//               <PublicRoute>
//                 <Register />
//               </PublicRoute>
//             }
//           />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// };

{
  /* <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/" component={<RegisterView />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/" component={<LoginView />} />
          }
        /> */
}

{
  /* <Route path="/register" element={<RegisterView />} /> */
}

{
  /* <Route path="/login" element={<LoginView />} /> */
}
{
  /* <Route element={<PublicRoute />}>
        </Route> */
}

{
  /* <Route path="/movies" element={<Movies />} />
          <Route path={'/movies/:movieId'} element={<MovieDetails />}>
            <Route path="/movies/:movieId/reviews" element={<ReviewsMovie />} />
            <Route path="/movies/:movieId/cast" element={<CastMovie />} />
          </Route>
        </Route> */
}

{
  /* <Route element={<PrivateRoute />}> */
}

{
  /* <Route path="/contacts" element={<PhonebookPage />} /> */
}

{
  /* <Route
          path="/contacts"
          element={
            <PublicRoute redirectTo="/" component={<PhonebookPage />} />
          }
        /> */
}
