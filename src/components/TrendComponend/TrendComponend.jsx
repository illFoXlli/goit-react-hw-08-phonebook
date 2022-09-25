import { useEffect, useState } from 'react';
import { faechApiTrending } from '../service/faechAPI';
import Container from '../Container';
import Card from 'components/Card';
import { ListCard } from './TrendComponend.styled';

const TrendComponend = () => {
  const [getApi, setGetApi] = useState([]);
  useEffect(() => {
    faechApiTrending().then(setGetApi);
  }, []);

  const { results } = getApi;
  console.log(results);
  return (
    <Container>
      {/* <div id={6969}></div>  УДОЛИТЬ потом */}
      <ListCard>
        {results &&
          results.map(value => (
            <li key={value.id}>
              <Card item={value} />
            </li>
          ))}
      </ListCard>
    </Container>
  );
};

export default TrendComponend;
