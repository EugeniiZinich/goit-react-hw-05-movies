import { useState, useEffect } from 'react';
import { getTrending } from 'ApiService/ApiServise';
import FilmList from 'components/FilmList/FilmList';
import { Title } from './Home.styled';

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
      <Title>Trending film on this week</Title>
      <FilmList films={film} />
    </main>
  );
};

export default Home;
