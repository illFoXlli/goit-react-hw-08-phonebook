import { ListCard, Img, Title, Span } from './Card.styled';
import Box from '../service/Box';

const Card = ({ item }) => {
  const { poster_path } = item;
  const imgNotFound =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : imgNotFound;

  return (
    <ListCard>
      <li>
        <Img
          alt="A lazy image"
          src={`https://image.tmdb.org/t/p/w300${imgUrl}`}
        />
      </li>
      <Box as="li" mt="4px">
        <Title>{item.title}</Title>
      </Box>
      <Box as="li" mt="4px">
        <Span>Release date:</Span>
      </Box>
      <Box as="li" mt="4px">
        <Span>{item.release_date}</Span>
      </Box>
    </ListCard>
  );
};

export default Card;
