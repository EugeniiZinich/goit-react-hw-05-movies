import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'ApiService/ApiServise';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    const getReviews = async () => {
      try {
        const info = await getMovieReviews(Number(movieId));
        setReviews(info.content);
      } catch (error) {}
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      <p>{reviews}</p>
    </div>
  );
};

export default Reviews;
