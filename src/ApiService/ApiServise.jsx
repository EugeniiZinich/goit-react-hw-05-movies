import axios from 'axios';

const MOVIEDB_KEY = '817d0625144161de217baa97c19455ca';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrending = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${MOVIEDB_KEY}`
  );

  return data.results;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${MOVIEDB_KEY}&language=en-US`
  );

  return data;
};

export const searchMovie = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        api_key: MOVIEDB_KEY,
        language: 'en-US',
        query,
        page: 1,
        include_adult: false,
      },
    }
  );

  return data.results;
};

export const getCasts = async movieId => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: MOVIEDB_KEY,
      language: 'en-US',
    },
  });
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: MOVIEDB_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return data.results[0];
};
