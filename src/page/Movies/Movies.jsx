import Container from 'components/Container';
import {
  SearchForm,
  Input,
  Button,
  Wrapper,
  ListCard,
  PaginationNew,
} from './Muvies.styled';
import { FcSearch } from 'react-icons/fc';
import { faechApiMovie } from '../../components/service/faechAPI';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from 'components/Card';
import Pagination from '@mui/material/Pagination';
// import Loader from 'components/Loader';

const Movie = () => {
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

  const handleSubmit = e => {
    e.preventDefault();
    faechApiMovie(valueInput, Number(pageNew))
      .then(setData)
      .catch(error => console.log(error));
    setSearch({ page: pageNew, search: valueInput });
  };

  const handleChange = e => {
    return setValueInput(e.target.value);
  };

  useEffect(() => {
    if (valueInput === '') {
      return;
    }
    if (pageNew === 1) {
      return;
    }
    setLoaderTaggel(true);
    console.log(valueSearch);
    console.log(pageNew);
    faechApiMovie(valueInput, Number(pageNew))
      .then(setData)
      .finally(() => setLoaderTaggel(false));
  }, [pageNew, valueSearch]);

  useEffect(() => {
    if (page && valueSearch) {
      faechApiMovie(valueSearch, Number(page))
        .then(setData)
        .finally(() => setLoaderTaggel(false));
    }
  }, []);

  if (data === null) {
    return;
  }
  return (
    <>
      <Container>
        <Wrapper>
          <SearchForm onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              value={valueInput}
            />
            <Button type="submit">
              <FcSearch />
            </Button>
          </SearchForm>
        </Wrapper>
      </Container>

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

export default Movie;
