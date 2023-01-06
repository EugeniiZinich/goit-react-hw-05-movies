import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import SearchForm from 'components/SearchForm/SearchForm';
import FilmList from 'components/FilmList/FilmList';
import { searchMovie } from 'ApiService/ApiServise';
import MyLoader from 'components/Loader/Loader';

const Movies = () => {
  const [movie, setMovie] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('name') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (filmName === '') {
      return;
    }

    const getSearchFilmByName = async () => {
      setIsLoading(true);
      try {
        const getFilm = await searchMovie(filmName);
        setMovie(getFilm);
      } catch (error) {
        toast.error(`Search is not working. Try again later`);
      } finally {
        setIsLoading(false);
      }
    };

    getSearchFilmByName();
  }, [filmName]);

  const updateQueryString = name => {
    if (!name) {
      toast.error('Enter film name');
      return;
    }

    setSearchParams({ name: name.toLowerCase().trim() });
  };

  return (
    <div>
      <SearchForm onChange={updateQueryString} />
      {isLoading && <MyLoader />}
      {movie.length > 0 && <FilmList films={movie} />}
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default Movies;
