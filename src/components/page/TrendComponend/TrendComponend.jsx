import { useEffect, useState } from 'react';
import { faechApiTrending } from '../../service/faechAPI';
import Container from '../../service/Container';
import Card from 'components/Card';
import { ListCard } from './TrendComponend.styled';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

const TrendComponend = () => {
  const [getApi, setGetApi] = useState(null);
  useEffect(() => {
    faechApiTrending().then(setGetApi);
  }, []);

  if (getApi === null) {
    return;
  }
  const { results, total_pages, page } = getApi;

  console.log(getApi);
  return (
    <Container>
      <ListCard>
        {results &&
          results.map(value => (
            <li key={value.id}>
              <Link to={`/movies/${value.id}`}>
                <Card item={value} />
              </Link>
            </li>
          ))}
      </ListCard>
      <Pagination count={10} showFirstButton showLastButton />
    </Container>
  );
};

export default TrendComponend;
