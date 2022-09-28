import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { SearchForm, Input, Button, Wrapper } from './Search.styled';
import Container from 'components/Container';
import PropTypes from 'prop-types';

const Search = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    handleSubmit(query);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <SearchForm onSubmit={onHandleSubmit}>
            <Input
              onChange={handleChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              value={query}
            />
            <Button type="submit">
              <FcSearch />
            </Button>
          </SearchForm>
        </Wrapper>
      </Container>
    </>
  );
};

Search.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Search;
