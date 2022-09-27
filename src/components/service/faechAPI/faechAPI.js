import axios from 'axios';
import PropTypes from 'prop-types';

export const faechApiTrending = async (page = 1) => {
  const API_KEY = 'e2cf33bcd0ee79f76f1c4fb556b38c1b';
  const url = 'https://api.themoviedb.org/3/trending/movie/day';
  const params = {
    api_key: API_KEY,
    page: page,
  };

  return await axios
    .get(url, { params })
    .then(res => {
      return res.data;
    })
    .catch(error => console.log(error));
};

export const faechApiMovie = (search, page = 1) => {
  const API_KEY = 'e2cf33bcd0ee79f76f1c4fb556b38c1b';
  const url = 'https://api.themoviedb.org/3/search/movie';
  const params = {
    api_key: API_KEY,
    query: search,
    page: page,
  };

  return axios
    .get(url, { params })
    .then(respons => {
      return respons.data;
    })
    .catch(error => console.log(error));

  //   // throw error;
  // }
};

export const faechApiMovieId = async (movie_id, page = 1) => {
  const API_KEY = 'e2cf33bcd0ee79f76f1c4fb556b38c1b';
  const url = `https://api.themoviedb.org/3/movie/`;
  const params = {
    api_key: API_KEY,
    page: page,
  };

  return await axios
    .get(`${url}${movie_id}`, { params })
    .then(res => {
      return res.data;
    })
    .catch(error => console.log(error));
};

export const faechApiMovieCredits = async (movie_id, page = 1) => {
  const API_KEY = 'e2cf33bcd0ee79f76f1c4fb556b38c1b';
  const url = `https://api.themoviedb.org/3/movie/`;
  const params = {
    api_key: API_KEY,
    page: page,
  };

  return await axios
    .get(`${url}${movie_id}/credits`, { params })
    .then(res => {
      return res.data;
    })
    .catch(error => console.log(error));
};

export const faechApiMovieReviews = async (movie_id, page = 1) => {
  const API_KEY = 'e2cf33bcd0ee79f76f1c4fb556b38c1b';
  const url = `https://api.themoviedb.org/3/movie/`;
  const params = {
    api_key: API_KEY,
    page: page,
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
