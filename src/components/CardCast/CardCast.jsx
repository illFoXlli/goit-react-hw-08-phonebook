import { ListCard, Img, Title, SpanCharacter } from './CardCast.styled';
import Box from '../service/Box';
import PropTypes from 'prop-types';

const CardCast = ({ item }) => {
  const { profile_path } = item;
  const imgNotFound =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  const imgUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : imgNotFound;

  return (
    <ListCard>
      <li>
        <Img alt="A lazy image" src={imgUrl} />
      </li>
      <Box as="li">
        <Box mb="4px" color="rgb(255, 151, 0)" textShadow="1px 1px 2px black">
          <Title>{item.name}</Title>
        </Box>
      </Box>

      <Box as="li" mt="4px">
        <SpanCharacter>{item.character}</SpanCharacter>
      </Box>
    </ListCard>
  );
};

CardCast.propTypes = {
  profile_path: PropTypes.string,
};

export default CardCast;
