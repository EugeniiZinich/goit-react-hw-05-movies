import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IMAGE_URL } from 'ApiService/ApiServise';
import { getMovieById } from 'ApiService/ApiServise';
import { Wrapper, Link, NavList, NavItem, Main } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const requestDetails = async () => {
      try {
        const movieInfo = await getMovieById(Number(movieId));

        setMovie(movieInfo);
      } catch (error) {
        console.log(error);
      }
    };

    requestDetails();
  }, [movieId]);

  const { poster_path, overview, title, genres, release_date, vote_average } =
    movie;

  const dateFilm = new Date(release_date).getFullYear();
  return (
    <Main>
      <Link to={backLinkHref}> GO BACK</Link>

      <Wrapper>
        <img
          src={IMAGE_URL + poster_path}
          alt={title}
          loading="lazy"
          width={250}
        />

        <div>
          <h2>
            {title}({dateFilm})
          </h2>
          <p>
            <b>User score: </b>
            {vote_average ? vote_average.toFixed(1) : 'not found'}
          </p>
          <p>
            <b>Overview</b>: {overview}
          </p>
          <p>
            <b>Genres </b>
            {genres && genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </Wrapper>

      <NavList>
        <NavItem>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </NavItem>
        <NavItem>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </NavItem>
      </NavList>

      <Outlet />
    </Main>
  );
};

export default MovieDetails;
