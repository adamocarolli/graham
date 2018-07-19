import styled from 'styled-components';
import { darken } from 'polished';

import * as colors from '../styles/colors';

const Square = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 1px;
  background: ${({ bgColor })  => colors[bgColor]};
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 300ms ease;
  &:hover {
    background: ${({ bgColor })  => darken(0.1, colors[bgColor])};
  }
`;

Square.defaultProps = {
  bgColor: 'blue',
};

export default Square;
