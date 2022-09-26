import { useParams, NavLink, Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faechApiMovieId } from '../../service/faechAPI';
// import PropTypes from 'prop-types';
import Box from '../../service/Box';
import { Img, DivCard } from './MovieDetails.styled';
import Container from '../../service/Container';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [getApi, setGetApi] = useState(null);
  useEffect(() => {
    faechApiMovieId(movieId).then(setGetApi);
  }, [movieId]);
  if (getApi === null) {
    return;
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
  } = getApi;

  const userScore = Math.round(vote_average * 10);

  const imgNotFound =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : imgNotFound;

  return (
    <Container>
      <NavLink to={'/'}>Go back</NavLink>
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
        </div>
      </DivCard>
      <div>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
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
