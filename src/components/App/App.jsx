import { Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home/Home';
import SharedLayout from '../SharedLayout/SharedLayout';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import Movies from 'Pages/Movies/Movies';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
