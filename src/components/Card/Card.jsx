import { ListCard, Img, Title, Span } from './Card.styled';
import Box from '../Box';

const Card = ({ item }) => {
  //   const { profile_path } = item;
  //   const viewPoster = profile_path => {
  //     //     if (profile_path === null) {
  //     //       return `${defaultImg}`;
  //     // }
  //     return `https://image.tmdb.org/t/p/w300${profile_path}`;
  //   };

  return (
    <ListCard>
      <li class="event__img">
        {/* <Img class="img-src" loading="lazy" src={ } alt="Sports event" /> */}

        <Img
          alt="A lazy image"
          src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
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
