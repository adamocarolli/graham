import styled from 'styled-components';
import { darken, adjustHue } from 'polished';
import React from 'react';

import * as colors from '../styles/colors';

const Tooltip = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  transition: opacity .6s;
  margin-left: 16px;
  margin-top: 16px;
`;

const Span = styled.span`
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
  &:hover ${Tooltip} {
    visibility: visible;
  }
  &:active {
    background: ${({ bgColor })  => darken(0.2, colors[bgColor])};
  }
`;

class Square extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };

    this.children = Array(100).fill(<Square bgColor="green"></Square>);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    let child = null;
    if (this.props.numChildren > 0) {
      child = <Square bgColor={ this.props.childrenColors[0] }
                      title={ this.props.childrenTitles[0] }
                      numChildren={ this.props.numChildrensChildren[0] }
                      numChildrensChildren={ this.props.numChildrensChildren.slice(1) }
                      childrenColors={ this.props.childrenColors.slice(1) }
                      childrenTitles={ this.props.childrenTitles.slice(1) } />
    }

    return (
      <span>
        <Span bgColor={ this.props.bgColor } onClick={ this.handleClick }>
          <Tooltip>{ this.props.title }</Tooltip>
        </Span>
        {this.state.clicked ? Array(this.props.numChildren).fill(child) : null}
      </span>
    )
  }
}

Square.defaultProps = {
  bgColor: 'black',
  title: 'Billion Barrels of Oil',
  numChildren: 1000,
  numChildrensChildren: [1000, 1000, 636, 0],
  childrenColors: ['darkOrange', 'purple', 'darkBlue', 'orange'],
  childrenTitles: ['Million Barrels of Oil', 'Thousand Barrels of Oil', 'Barrel (159L) of Oil', 'Juice Box (250mL)'],
};

export default Square;
