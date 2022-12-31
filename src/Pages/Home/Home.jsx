import { useState, useEffect } from 'react';
import { getTrending } from 'ApiService/ApiServise';
import FilmList from 'components/FilmList/FilmList';

const Home = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    const getFilm = async () => {
      try {
        const trending = await getTrending();
        setFilm(trending);
      } catch (error) {
        console.log(error);
      }
    };

    getFilm();
  }, []);

  return (
    <main>
      <h1>Trending film on this week</h1>
      <FilmList films={film} />
    </main>
  );
};

export default Home;
