import { ListCard, Img, Title, Span, RatingNew } from './Card.styled';
import Box from '../service/Box';

const Card = ({ item }) => {
  const { poster_path } = item;
  const imgNotFound =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : imgNotFound;

  console.log();
  return (
    <>
      <Img alt="A lazy image" src={`${imgUrl}`} />

      <Title>{item.title}</Title>

      <Span>
        Rating:
        {item.vote_average.toFixed(1) > 0 ? item.vote_average.toFixed(1) : 0}
      </Span>

      <RatingNew
        name="simple-controlled"
        value={item.vote_average.toFixed(1) / 2}
        readOnly
        display="flex"
        justify-content="spaceBetween"
      />

      {/* <Box as="li" mt="4px">
        <Span>{item.release_date}</Span>
      </Box> */}
    </>
  );
};

export default Card;
