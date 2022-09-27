import { Wrapper, VortexNew, Position } from './Loader.styled';
const Loader = () => {
  return (
    <Wrapper>
      <Position>
        <VortexNew
          visible={true}
          height="300"
          width="300"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </Position>
    </Wrapper>
  );
};

export default Loader;
