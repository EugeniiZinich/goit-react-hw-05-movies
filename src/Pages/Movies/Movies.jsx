import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
// import FilmList from 'components/FilmList/FilmList';
// import { searchMovie } from 'ApiService/ApiServise';

const Movies = () => {
  // const [movie, setMovie] = useState([]);
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    // if (!filmName) {
    //   setMovie([]);
    //   return;
    // }

    if (filmName.trim() === '') {
      console.log('Enter film name');
      return;
    }

    const getSearchFilmByName = async () => {
      try {
        // const getFilm = await searchMovie(filmName);
      } catch (error) {}
    };

    getSearchFilmByName();
  }, [filmName]);

  return (
    <div>
      <SearchForm onChange={updateQueryString} value={filmName} />
    </div>
  );
};

export default Movies;
