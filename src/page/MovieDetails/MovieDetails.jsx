import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faechApiMovieId } from '../../components/service/faechAPI';
// import PropTypes from 'prop-types';
import Box from '../../components/service/Box';
import { Img, DivCard } from './MovieDetails.styled';
import Container from '../../components/Container';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [loaderTaggel, setLoaderTaggel] = useState(false);
  const location = useLocation();

  useEffect(() => {
    faechApiMovieId(movieId)
      .then(setData)
      .finally(() => setLoaderTaggel(false));
  }, [movieId]);

  if (data === null) {
    return !loaderTaggel && <Loader />;
  }
  const {
    title,
    name,
    overview,
    genres,
    release_date,
    first_air_date,
    poster_path,
    vote_average,
  } = data;

  const userScore = vote_average.toFixed(1) * 10;

  const imgNotFound =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : imgNotFound;
  console.log('+++++++++++++++++++');
  console.log(location);
  const goBack = location.state?.from ?? '/';

  return (
    <Container>
      <NavLink to={goBack}>Go back</NavLink>
      <DivCard>
        <Img src={imgUrl} alt={title || name} width="200" />
        <div>
          <Box
            as="h2"
            mb="25px"
            color="rgb(255, 151, 0)"
            textShadow="1px 1px 2px black"
          >
            {title || name} ({(first_air_date || release_date).slice(0, 4)})
          </Box>

          <Box as="p" mb="30px ">
            User Score: {userScore}%
          </Box>

          <Box as="h3" mb="10px">
            Overview
          </Box>
          <Box width="40vw" mb="10px">
            {overview}
          </Box>

          <Box as="h3" mb="10px">
            Genres
          </Box>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
          <h1>Additional information</h1>
          <Box as="ul" display="flex">
            <li>
              <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
            </li>
          </Box>
        </div>
      </DivCard>
      <Outlet />
    </Container>
  );
};

// MovieDetails.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string,
//     name: PropTypes.string,
//     overview: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(
//       PropTypes.shape({ name: PropTypes.string.isRequired })
//     ),
//     release_date: PropTypes.string.isRequired,
//     first_air_date: PropTypes.string,
//     poster_path: PropTypes.string,
//     vote_average: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default MovieDetails;
