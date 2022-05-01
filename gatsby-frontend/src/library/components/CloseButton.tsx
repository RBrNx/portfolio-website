import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';

interface CloseButtonProps {
  onClick: React.MouseEventHandler;
}

const CloseButton = ({ onClick }: CloseButtonProps) => (
  <Container onClick={onClick}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'>
      <g>
        <Circle cy='30' cx='30' r='20' strokeWidth='2' />
        <Line x1='20' y1='30' x2='40' y2='30' />
        <Line2 x1='20' y1='30' x2='40' y2='30' />
      </g>
    </svg>
  </Container>
);

const Container = styled.div`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 25px;
  right: 20px;
  z-index: 99;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    cursor: pointer;

    .circle {
      stroke-dashoffset: 0;
      transform: rotate(-90deg);
      fill: lighten($primaryGrey, 15%);
    }

    .line1 {
      transform: rotate(135deg);
    }

    .line2 {
      transform: rotate(45deg);
    }
  }
`;

const Circle = styled.circle`
  fill: transparent;
  stroke-dasharray: 150;
  stroke-dashoffset: 150;
  stroke: ${props => props.theme.accent};
  transform-origin: 50% 50%;
  transform: rotate(-270deg);
  transition: all 800ms ease;

  ${Container}:hover & {
    stroke-dashoffset: 0;
    transform: rotate(-90deg);
    fill: ${props => lighten(0.15, props.theme.background)};
  }
`;

const Line = styled.line`
  stroke-width: 2;
  stroke: ${props => props.theme.body};
  transform-origin: 50% 50%;
  transition: all 500ms ease;
  transform: rotate(45deg);

  ${Container}:hover & {
    transform: rotate(135deg);
  }
`;

const Line2 = styled(Line)`
  transform: rotate(-45deg);

  ${Container}:hover & {
    transform: rotate(45deg);
  }
`;

export default CloseButton;
