import { IMAGE_URL } from 'ApiService/ApiServise';
import { Link, useLocation } from 'react-router-dom';

const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {films.map(({ poster_path, id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={IMAGE_URL + poster_path}
                  alt={title}
                  loading="lazy"
                  width={250}
                />
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilmList;
