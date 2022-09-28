import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faechApiMovieCredits } from '../../components/service/faechAPI';
import { ListCard } from './CastMoviePage.styled';
import { Container } from 'components/AppBar';
import CardCast from '../../components/CardCast/CardCast';

const CastMovie = () => {
  const { movieId } = useParams();
  const [getApi, setGetApi] = useState(null);
  useEffect(() => {
    faechApiMovieCredits(movieId)
      .then(setGetApi)
      .catch(error => console.log(error));
  }, [movieId]);
  if (getApi === null) {
    return;
  }
  const { cast } = getApi;
  return (
    <Container>
      <ListCard>
        {cast?.map(value => (
          <li key={value.credit_id}>
            <CardCast item={value} />
          </li>
        ))}
      </ListCard>
    </Container>
  );
};

export default CastMovie;
