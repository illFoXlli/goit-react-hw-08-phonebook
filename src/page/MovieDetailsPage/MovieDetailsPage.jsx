import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faechApiMovieId } from '../../components/service/faechAPI/faechAPI';

import Box from '../../components/service/Box';
import {
  Img,
  DivCard,
  Wrapper,
  Tital,
  LinkStyle,
  ItemOne,
  ListLink,
} from './MovieDetailsPage.styled';
import Container from '../../components/Container';
import Loader from 'components/Loader';
import { TbArrowBackUp } from 'react-icons/tb';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [loaderTaggel, setLoaderTaggel] = useState(false);
  const location = useLocation();

  useEffect(() => {
    faechApiMovieId(movieId)
      .then(setData)
      .catch(error => console.log(error))
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

  return (
    <Container>
      <Wrapper>
        <LinkStyle to={location.state?.from || '/'}>
          <TbArrowBackUp color="tomato" size="50px" />
        </LinkStyle>
      </Wrapper>
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
          <Box mb="10px">{overview}</Box>

          <Box as="h3" mb="10px">
            Genres
          </Box>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
          <Tital>Additional information</Tital>
          <ListLink>
            <ItemOne>
              <LinkStyle
                to={`/movies/${movieId}/cast`}
                state={{ from: location.state?.from || '/' }}
              >
                Cast
              </LinkStyle>
            </ItemOne>
            <ItemOne>
              <LinkStyle
                to={`/movies/${movieId}/reviews`}
                state={{ from: location.state?.from || '/' }}
              >
                Reviews
              </LinkStyle>
            </ItemOne>
          </ListLink>
        </div>
      </DivCard>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
