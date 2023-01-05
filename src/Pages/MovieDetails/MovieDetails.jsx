import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IMAGE_URL } from 'ApiService/ApiServise';
import { getMovieById } from 'ApiService/ApiServise';
import { Wrapper, Link, NavList, NavItem } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const requestDetails = async () => {
      try {
        const movieInform = await getMovieById(Number(movieId));
        setDetails(movieInform);
      } catch (error) {
        console.log(error);
      }
    };

    requestDetails();
  }, [movieId]);

  const { poster_path, overview, title } = details;

  return (
    <main>
      <Link to={backLinkHref}>GO BACK</Link>
      <h2>{title}</h2>
      <Wrapper>
        <img
          src={IMAGE_URL + poster_path}
          alt={title}
          loading="lazy"
          width={250}
        />
        <p>Overview: {overview}</p>
      </Wrapper>

      <NavList>
        <NavItem>
          <Link to="cast">Cast</Link>
        </NavItem>
        <NavItem>
          <Link to="reviews">Reviews</Link>
        </NavItem>
      </NavList>

      <Outlet />
    </main>
  );
};

export default MovieDetails;
