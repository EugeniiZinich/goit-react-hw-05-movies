import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import FilmList from 'components/FilmList/FilmList';
import { searchMovie } from 'ApiService/ApiServise';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (filmName === '') {
      setMovie([]);
      return;
    }

    if (filmName.trim() === '') {
      console.log('Enter film name');
      return;
    }

    const getSearchFilmByName = async () => {
      try {
        const getFilm = await searchMovie(filmName);

        setMovie(getFilm);
      } catch (error) {
        console.log(error);
      }
    };

    getSearchFilmByName();
  }, [filmName]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};

    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchForm onChange={updateQueryString} />
      {movie.length > 0 && <FilmList films={movie} />}
    </div>
  );
};

export default Movies;
