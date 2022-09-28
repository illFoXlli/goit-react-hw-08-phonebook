import { useState, useEffect } from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import Container from 'components/Container';
import { ListCard, PaginationNew } from './Muvies.styled';
import { faechApiMovie } from '../../components/service/faechAPI';
import Card from 'components/Card';
import Pagination from '@mui/material/Pagination';
import Search from '../../components/Search';
import Loader from 'components/Loader';

const Movies = () => {
  const [valueInput, setValueInput] = useState('');
  const [data, setData] = useState({});
  const [search, setSearch] = useSearchParams();
  const [loaderTaggel, setLoaderTaggel] = useState(false);
  const location = useLocation();

  const page = search.get('page');
  const valueSearch = search.get('search');
  const pageNew = page ?? 1;

  const onHandlePage = (_, pageNew) => {
    setSearch({ page: pageNew, search: valueInput });
  };

  const handleSubmit = value => {
    setValueInput(value);
  };

  useEffect(() => {
    if (valueInput === '') {
      return;
    }

    faechApiMovie(valueInput, Number(pageNew))
      .then(setData)
      .catch(error => console.log(error));
    setSearch({ page: pageNew, search: valueInput });
    // eslint-disable-next-line
  }, [valueInput, pageNew]);

  useEffect(() => {
    if (valueInput === '') {
      return;
    }
    if (pageNew === 1) {
      return;
    }

    setLoaderTaggel(true);

    faechApiMovie(valueInput, Number(pageNew))
      .then(setData)
      .finally(() => setLoaderTaggel(false));
    // eslint-disable-next-line
  }, [pageNew, valueSearch]);

  useEffect(() => {
    if (page && valueSearch) {
      setValueInput(valueSearch);
      faechApiMovie(valueSearch, Number(page))
        .then(setData)
        .finally(() => setLoaderTaggel(false));
    }
    // eslint-disable-next-line
  }, []);

  if (data === null) {
    return !loaderTaggel && <Loader />;
  }
  return (
    <>
      <Search handleSubmit={handleSubmit} />
      {data?.results?.length > 0 && (
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
          <PaginationNew>
            <Pagination
              count={data?.total_pages}
              page={Number(pageNew)}
              onChange={onHandlePage}
              showFirstButton
              showLastButton
            />
          </PaginationNew>
        </Container>
      )}
    </>
  );
};

export default Movies;
