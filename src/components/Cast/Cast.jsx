import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from 'ApiService/ApiServise';
import { IMAGE_URL } from 'ApiService/ApiServise';
import { ActorList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getActorsPhoto = async () => {
      try {
        const actors = await getCasts(Number(movieId));
        setCasts(actors);
      } catch (error) {
        console.log(error);
      }
    };

    getActorsPhoto();
  }, [movieId]);

  return (
    <div>
      {casts.length > 0 && (
        <ActorList>
          {casts.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? IMAGE_URL + profile_path
                      : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                  }
                  alt={name}
                  loading="lazy"
                  width={250}
                />
                <p>{name}</p>
                <p>Character: {character} </p>
              </li>
            );
          })}
        </ActorList>
      )}
    </div>
  );
};

export default Cast;
