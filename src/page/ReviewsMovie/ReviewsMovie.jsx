import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faechApiMovieReviews } from '../../components/service/faechAPI/';
import { AuthorReviews, Text } from './ReviewsMovie.styled';

const ReviewsMovie = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    faechApiMovieReviews(movieId).then(response => {
      setReview(response.results);
    });
  }, [movieId]);

  return (
    <>
      <>
        {review.length > 0 ? (
          <ul>
            {review.map(review => (
              <li key={review.id}>
                <AuthorReviews>{review.author}</AuthorReviews>
                <p>Character: {review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <Text>We don't have any reviews for this movie </Text>
        )}
      </>
    </>
  );
};

export default ReviewsMovie;
