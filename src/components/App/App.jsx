import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../SharedLayout/SharedLayout';
import { Container } from 'components/Container/Container.styled';

const Home = lazy(() => import('../../Pages/Home/Home'));
const Movies = lazy(() => import('../../Pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../Pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const NotFound = lazy(() => import('../../Pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
