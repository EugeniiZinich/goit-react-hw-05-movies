import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getTrending } from 'ApiService/ApiServise';
import FilmList from 'components/FilmList/FilmList';
import { Title } from './Home.styled';
import MyLoader from 'components/Loader/Loader';

const Home = () => {
  const [film, setFilm] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFilm = async () => {
      setIsLoading(true);
      try {
        const trending = await getTrending();
        setFilm(trending);
      } catch {
        setError('Ooops! Try reset page');
      } finally {
        setIsLoading(false);
      }
    };

    getFilm();
  }, [error]);

  return (
    <main>
      <Title>Trending film on this week</Title>
      {isLoading && <MyLoader />}
      {error && toast.error(error)}
      <FilmList films={film} />
    </main>
  );
};

export default Home;
