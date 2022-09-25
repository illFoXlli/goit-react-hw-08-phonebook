import Layout from 'components/Layout';
import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from './App.styled';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={'movies'}>
            {/* <Route path="get-trending" element={'get-trending'}></Route> */}
          </Route>
        </Route>
        <Route
          path="*"
          element={<ErrorPage>Такой станицы нету!</ErrorPage>}
        ></Route>
      </Routes>
    </>
  );
};

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews
