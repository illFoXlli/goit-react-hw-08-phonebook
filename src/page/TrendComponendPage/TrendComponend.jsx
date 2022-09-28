import * as React from 'react';
import { useEffect, useState } from 'react';
import { faechApiTrending } from '../../components/service/faechAPI';
import Container from '../../components/Container';
import Card from 'components/Card';
import { ListCard, ListItem, PaginationNew } from './TrendComponend.styled';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Loader from 'components/Loader';

const TrendComponend = () => {
  const [data, setData] = useState(null);
  const [loaderTaggel, setLoaderTaggel] = useState(false);
  const [search, setSearch] = useSearchParams();

  const location = useLocation();

  const query = search.get('page');
  const pageNew = query ?? 1;

  const onHandlePage = (_, pageNew) => {
    setSearch({ page: pageNew });
  };

  useEffect(() => {
    setLoaderTaggel(true);
    faechApiTrending(Number(pageNew))
      .then(setData)
      .finally(() => setLoaderTaggel(false));
  }, [pageNew]);

  if (data === null) {
    return !loaderTaggel && <Loader />;
  }
  const { total_pages } = data;
  return (
    <Container>
      <ListCard>
        {data?.results.map(value => (
          <ListItem key={value.id}>
            <Link to={`/movies/${value.id}`} state={{ from: location }}>
              <Card item={value} />
            </Link>
          </ListItem>
        ))}
      </ListCard>
      <PaginationNew>
        <Pagination
          count={total_pages}
          page={Number(pageNew)}
          onChange={onHandlePage}
          showFirstButton
          showLastButton
        />
      </PaginationNew>
    </Container>
  );
};

export default TrendComponend;
