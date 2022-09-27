import * as React from 'react';
import { useEffect, useState } from 'react';
import { faechApiTrending } from '../../components/service/faechAPI';
import Container from '../../components/Container';
import Card from 'components/Card';
import { ListCard } from './TrendComponend.styled';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Loader from 'components/Loader';

const TrendComponend = () => {
  const [data, setData] = useState(null);
  const [loaderTaggel, setLoaderTaggel] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pageNew = new URLSearchParams(location.search).get('page') ?? 1;
  const onHandlePage = (_, pageNew) => {
    navigate({ ...location, search: `page=${pageNew}` });
  };

  useEffect(() => {
    setLoaderTaggel(true);
    faechApiTrending(Number(pageNew))
      .then(setData)
      .finally(() => setLoaderTaggel(false));
  }, [pageNew]);
  console.log(data);
  if (data === null) {
    return !loaderTaggel && <Loader />;
  }
  const { total_pages } = data;
  return (
    <Container>
      <ListCard>
        {data?.results.map(value => (
          <li key={value.id}>
            <Link to={`/movies/${value.id}`} state={{ from: location }}>
              <Card item={value} />
            </Link>
          </li>
        ))}
      </ListCard>
      <Pagination
        count={total_pages}
        page={Number(pageNew)}
        onChange={onHandlePage}
        showFirstButton
        showLastButton
      />
    </Container>
  );
};

export default TrendComponend;
