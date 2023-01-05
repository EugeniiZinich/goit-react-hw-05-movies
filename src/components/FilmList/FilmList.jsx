import { IMAGE_URL } from 'ApiService/ApiServise';
import { Link, useLocation } from 'react-router-dom';
import { FilmListInner, FilmItem, Img } from './FilmList.styled';

const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <FilmListInner>
      {films.map(({ poster_path, id, title }) => {
        return (
          <FilmItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={IMAGE_URL + poster_path}
                alt={title}
                loading="lazy"
                width={250}
              />
              <div>
                <p>{title}</p>
              </div>
            </Link>
          </FilmItem>
        );
      })}
    </FilmListInner>
  );
};

export default FilmList;
