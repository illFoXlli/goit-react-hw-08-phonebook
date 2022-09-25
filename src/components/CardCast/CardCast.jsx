import { ListCard, Img, Title, Span, SpanCharacter } from './CardCast.styled';
import Box from '../service/Box';

const CardCast = ({ item }) => {
  const { profile_path } = item;
  console.log('+++++++++++++++++++');
  console.log(profile_path);
  const imgNotFound =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  const imgUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : imgNotFound;

  return (
    <ListCard>
      <li>
        <Img
          alt="A lazy image"
          src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
        />
      </li>
      <Box as="li">
        <Box
          as="h2"
          mb="4px"
          color="rgb(255, 151, 0)"
          textShadow="1px 1px 2px black"
        >
          <Title>{item.name}</Title>
        </Box>
      </Box>
      {/* <Box as="li" mt="4px">
        <Span>Character:</Span>
      </Box> */}
      <Box as="li" mt="4px">
        <SpanCharacter>{item.character}</SpanCharacter>
      </Box>
    </ListCard>
  );
};

export default CardCast;
