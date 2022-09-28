import { Img, Title, Span, RatingNew } from './Card.styled';

const Card = ({ item }) => {
  const { poster_path } = item;
  const imgNotFound =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : imgNotFound;

  return (
    <>
      <div>
        <Img alt="A lazy image" src={`${imgUrl}`} />

        <Title>{item?.title || 'not'}</Title>

        <Span>
          Rating:
          {item.vote_average.toFixed(1) > 0 ? item.vote_average.toFixed(1) : 0}
        </Span>
      </div>
      <div>
        <RatingNew
          name="simple-controlled"
          value={item.vote_average.toFixed(1) / 2}
          readOnly
          display="flex"
          justify-content="spaceBetween"
        />
      </div>
    </>
  );
};

export default Card;
