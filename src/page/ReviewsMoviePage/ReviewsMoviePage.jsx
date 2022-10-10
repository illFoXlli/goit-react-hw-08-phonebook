import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { faechApiMovieReviews } from '../../components/service/faechAPI/faechAPI';
import { Text, Titel, List } from './ReviewsMoviePage.styled';

const ReviewsMovie = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    faechApiMovieReviews(movieId)
      .then(response => {
        setReviews(response.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <List>
            {reviews.map((element, index) => (
              <li key={index}>
                <Titel>{element.author}</Titel>
                <Text>{element.content}</Text>
              </li>
            ))}
          </List>
        </>
      ) : (
        <p>No Reviews</p>
      )}
    </div>
  );
};

export default ReviewsMovie;
