import styled from 'styled-components';
import { shadow } from 'styled-system';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
} from 'styled-system';

const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
);
export default Box;
