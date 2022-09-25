import { faechApiMovieCredits } from '../../service/faechAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListCard } from './CastMovie.styled';
import { Container } from 'components/AppBar';
import CardCast from '../../CardCast/CardCast';

const CastMovie = () => {
  const { movieId } = useParams();
  const [getApi, setGetApi] = useState(null);
  useEffect(() => {
    faechApiMovieCredits(movieId).then(setGetApi);
  }, [movieId]);
  if (getApi === null) {
    return;
  }
  const { cast } = getApi;
  return (
    <Container>
      <ListCard>
        {cast.map(value => (
          <li key={value.credit_id}>
            <CardCast item={value} />
          </li>
        ))}
      </ListCard>
    </Container>
  );
};

export default CastMovie;
