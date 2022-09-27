import Container from 'components/Container';
import { SearchForm, Input, Button, Wrapper, ListCard } from './Muvies.styled';
import { FcSearch } from 'react-icons/fc';
import { faechApiMovie } from '../../components/service/faechAPI';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from 'components/Card';
import Pagination from '@mui/material/Pagination';
// import Loader from 'components/Loader';

const Movie = () => {
  const [valueInput, setValueInput] = useState('');
  const [data, setData] = useState(null);
  // const [loaderTaggel, setLoaderTaggel] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const pageNew = new URLSearchParams(location.search).get('page') ?? 1;
  const onHandlePage = (_, pageNew) => {
    navigate({ ...location, search: `page=${pageNew}` });
  };

  const handleSubmit = e => {
    e.preventDefault();
    faechApiMovie(valueInput, Number(pageNew)).then(setData);
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

    // setLoaderTaggel(true);
    faechApiMovie(valueInput, Number(pageNew)).then(setData);
    // .finally(() => setLoaderTaggel(false));
  }, [pageNew, valueInput]);
  if (data === null) {
    return (
      <>
        <Container>
          <Wrapper>
            <SearchForm onSubmit={handleSubmit}>
              <Input
                onChange={handleChange}
                type="text"
                name="search"
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
      </>
    );
  }
  const { total_pages } = data;
  return (
    <>
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
      </>
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
    </>
  );
};

export default Movie;
