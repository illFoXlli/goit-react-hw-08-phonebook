import axios from 'axios';
import PropTypes from 'prop-types';

export const faechApiTrending = async () => {
  const API_KEY = 'e2cf33bcd0ee79f76f1c4fb556b38c1b';
  const url = 'https://api.themoviedb.org/3/trending/movie/day';
  const params = {
    api_key: API_KEY,
  };

  return await axios.get(url, { params }).then(res => {
    return res.data;
  });
};

export const faechApiMovie = async search => {
  const API_KEY = 'e2cf33bcd0ee79f76f1c4fb556b38c1b';
  const url = 'https://api.themoviedb.org/3/search/movie';
  const params = {
    api_key: API_KEY,
    query: search,
  };

  return await axios.get(url, { params }).then(res => {
    return res.data;
  });
};

export const faechApiMovieId = async movie_id => {
  const API_KEY = 'e2cf33bcd0ee79f76f1c4fb556b38c1b';
  const url = `https://api.themoviedb.org/3/movie/`;
  const params = {
    api_key: API_KEY,
  };

  return await axios.get(`${url}${movie_id}`, { params }).then(res => {
    return res.data;
  });
};

export const faechApiMovieCredits = async movie_id => {
  const API_KEY = 'e2cf33bcd0ee79f76f1c4fb556b38c1b';
  const url = `https://api.themoviedb.org/3/movie/`;
  const params = {
    api_key: API_KEY,
  };

  return await axios.get(`${url}${movie_id}/credits`, { params }).then(res => {
    return res.data;
  });
};

export const faechApiMovieReviews = async movie_id => {
  const API_KEY = 'e2cf33bcd0ee79f76f1c4fb556b38c1b';
  const url = `https://api.themoviedb.org/3/movie/`;
  const params = {
    api_key: API_KEY,
  };

  return await axios.get(`${url}${movie_id}/reviews`, { params }).then(res => {
    return res.data;
  });
};

faechApiMovie.propTypes = {
  search: PropTypes.string,
  movie_id: PropTypes.number,
};
faechApiMovieId.propTypes = {
  movie_id: PropTypes.number,
};
faechApiMovieCredits.propTypes = {
  movie_id: PropTypes.number,
};
faechApiMovieReviews.propTypes = {
  movie_id: PropTypes.number,
};
