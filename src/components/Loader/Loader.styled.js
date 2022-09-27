import styled from 'styled-components';
import { Vortex } from 'react-loader-spinner';

export const Position = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const VortexNew = styled(Vortex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(
    circle at 50% 50%,
    #bde18d 0,
    #b0e494 5%,
    #a2e69d 10%,
    #94e8a7 15%,
    #85eab2 20%,
    #75ebbd 25%,
    #65ecc9 30%,
    #53ecd5 35%,
    #40ede1 40%,
    #2aeded 45%,
    #10ecf8 50%,
    #00ebff 55%,
    #00eaff 60%,
    #20e8ff 65%,
    #3ae6ff 70%,
    #51e4ff 75%,
    #68e1ff 80%,
    #7edeff 85%,
    #92daff 90%,
    #a6d7ff 95%,
    #b9d2ff 100%
  );
`;
