import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IMAGE_URL } from 'ApiService/ApiServise';
import { getMovieById } from 'ApiService/ApiServise';

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
      <NavLink to={backLinkHref}>Back to films</NavLink>
      <img
        src={IMAGE_URL + poster_path}
        alt={title}
        loading="lazy"
        width={250}
      />
      <p>{overview}</p>

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </main>
  );
};

export default MovieDetails;
